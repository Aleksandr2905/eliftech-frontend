import { useEffect, useState } from "react";
import { getEventById } from "../../services/api";
import { useParams } from "react-router-dom";

const Participants = () => {
  const { id } = useParams();
  const [event, setEvent] = useState();

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

  console.log(event);

  return <div>Participants</div>;
};

export default Participants;
