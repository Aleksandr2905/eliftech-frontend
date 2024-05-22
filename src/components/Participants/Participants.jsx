import { useEffect, useState } from "react";
import { getEventById } from "../../services/api";
import { useParams } from "react-router-dom";
import * as s from "./Participants.styled";
import Loader from "../Loader/Loader";

const Participants = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEventById = async () => {
      try {
        setIsLoading(true);
        const event = await getEventById(id);
        setEvent(event);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEventById();
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
    <s.Wrapper>
      <s.Title>{event.title} participants</s.Title>
      {event?.user?.length === 0 ? (
        <s.SubTitle>There are no registered participants</s.SubTitle>
      ) : (
        <s.List>
          {event?.user?.map((item) => {
            return (
              <s.Card key={item._id}>
                <s.Text>{item.fullName}</s.Text>
                <s.Text>{item.email}</s.Text>
              </s.Card>
            );
          })}
        </s.List>
      )}
    </s.Wrapper>
  );
};

export default Participants;
