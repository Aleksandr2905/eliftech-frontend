import { useEffect, useState } from "react";

import { EventCard } from "../../components/EventCard";
import { Loader } from "../../components/Loader";

import { getAllEvents } from "../../services/api";
import { Events } from "./types";

import { eventsData } from "../../data";

export const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Events[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { title } = eventsData;

  const loadEvents = async (page: number, limit: number) => {
    try {
      setIsLoading(true);
      const { events: newEvents, totalPages } = await getAllEvents({
        page,
        limit,
      });
      setEvents((prevEvents) => [...prevEvents, ...newEvents]);
      setTotalPages(totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const defaultLimit = 6;
    loadEvents(currentPage, defaultLimit);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const currentScrollPosition = window.innerHeight + window.scrollY;

      if (scrollHeight - currentScrollPosition <= 60) {
        if (!isLoading && currentPage < totalPages) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage, totalPages, isLoading]);

  return (
    <section>
      <div className="container min-h-[calc(100vh-181px)] flex my-auto flex-col">
        <h2 className="text-primaryText text-center text-lg font-gilroySemibold mb-6">
          {title}
        </h2>
        <ul className="flex flex-wrap gap-5 justify-center mb-5">
          {events.map((event, index) => (
            <li key={index}>
              <EventCard event={event} />
            </li>
          ))}
        </ul>
        {isLoading && <Loader />}
      </div>
    </section>
  );
};
