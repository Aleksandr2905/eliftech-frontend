import { useEffect, useState } from "react";
import { EventCard } from "../../components/EventCard";
import { Loader } from "../../components/Loader";
import { EventsSort } from "../../components/EventsSort";
import { getAllEvents } from "../../services/api";
import { Events } from "./types";
import { eventsData } from "../../data";

export const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Events[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortType, setSortType] = useState<
    "default" | "title" | "event_date" | "organizer"
  >("default");

  const { title } = eventsData;

  const loadEvents = async (page: number) => {
    try {
      setIsLoading(true);
      const { events: newEvents, totalPages } = await getAllEvents({
        page,
      });
      setEvents((prevEvents) => [...prevEvents, ...newEvents]);
      setTotalPages(totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const sortEvents = (events: Events[]) => {
    if (sortType === "default") {
      return events;
    }
    return events.sort((a, b) => {
      if (sortType === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortType === "event_date") {
        return (
          new Date(a.event_date).getTime() - new Date(b.event_date).getTime()
        );
      } else if (sortType === "organizer") {
        return a.organizer.localeCompare(b.organizer);
      }
      return 0;
    });
  };

  const resetFilters = () => {
    setSortType("default");
    setEvents([]);
    setCurrentPage(1);
    loadEvents(1);
  };

  useEffect(() => {
    loadEvents(currentPage);
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

  const sortedEvents = sortEvents(events);

  return (
    <section>
      <div className="container min-h-[calc(100vh-181px)] flex my-auto flex-col">
        <h2 className="text-primaryText text-center text-lg font-gilroySemibold mb-6">
          {title}
        </h2>

        <EventsSort
          sortType={sortType}
          setSortType={setSortType}
          resetFilters={resetFilters}
        />

        <ul className="flex flex-wrap gap-5 justify-center mb-5">
          {sortedEvents.map((event, index) => (
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
