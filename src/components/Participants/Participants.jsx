import { useEffect, useState } from "react";
import { getEventById } from "../../services/api";
import { useParams } from "react-router-dom";

const Participants = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEventById = async () => {
      try {
        const event = await getEventById(id);
        setEvent(event);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEventById();
  }, [id]);

  return (
    <section>
      <h2>{event.title} participants</h2>
      {event?.user?.length === 0 ? (
        <p>There are no registered participants</p>
      ) : (
        <ul>
          {event?.user?.map((item) => {
            return (
              <li key={item._id}>
                <p>{item.fullName}</p>
                <p>{item.email}</p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Participants;
