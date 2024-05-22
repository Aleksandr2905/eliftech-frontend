import { useEffect, useState } from "react";
import { getAllEvents } from "../../services/api";
import * as s from "./Events.styled";
import Loader from "../Loader/Loader";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getEvents = async () => {
      try {
        setIsLoading(true);
        const { events, totalPages } = await getAllEvents({
          page: currentPage,
        });
        setEvents(events);
        setTotalPages(totalPages);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getEvents();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <s.Wrapper>
      <s.Title>Events</s.Title>
      <s.List>
        {events.map((event) => {
          return (
            <s.Card key={event._id}>
              <s.CardTitle>{event.title}</s.CardTitle>
              <s.Description>{event.description}</s.Description>
              <s.Date>{event.event_date}</s.Date>
              <s.Organizer>{event.organizer}</s.Organizer>
              <s.BtnWrapper>
                <s.Button to={`/register/${event._id}`}>Register</s.Button>
                <s.Button to={`/participants/${event._id}`}>View</s.Button>
              </s.BtnWrapper>
            </s.Card>
          );
        })}
      </s.List>
      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </s.Wrapper>
  );
};

export default Events;
