import { useEffect, useState } from "react";
import { getAllEvents } from "../../services/api";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);
  // const [page, setPage] = useState(1);
  useEffect(() => {
    const getEvents = async () => {
      try {
        const { events } = await getAllEvents({});
        setEvents(events);
      } catch (error) {
        console.error(error);
      }
    };
    getEvents();
  }, []);

  console.log(events);

  return (
    <section>
      <h1>Events</h1>
      {events.map((event) => {
        return (
          <li key={event._id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.event_date}</p>
            <p>{event.organizer}</p>
            <div>
              <Link to={`/register/${event._id}`}>Register</Link>
              <Link to={`/participants/${event._id}`}>View</Link>
            </div>
          </li>
        );
      })}
    </section>
  );
};

export default Events;
