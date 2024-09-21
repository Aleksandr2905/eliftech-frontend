import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader";
import { getEventById } from "../../services/api";
import { Event, User } from "./types";
import { participants } from "../../data";

export const Participants = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<Record<string, string | undefined>>();
  const [event, setEvent] = useState<Event | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  const { textRegister, textSearch } = participants;

  useEffect(() => {
    const fetchEventById = async () => {
      try {
        setIsLoading(true);
        if (id) {
          const event = await getEventById(id);
          setEvent(event);
          setFilteredUsers(event.user);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEventById();
  }, [id]);

  useEffect(() => {
    if (event?.user) {
      const filtered = event.user.filter(
        (user) =>
          user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery, event]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <h2 className="text-primaryText text-center text-lg font-gilroySemibold mb-6">
        {event?.title} participants
      </h2>

      {event?.user?.length !== 0 && (
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-6 p-2 border rounded-xl mx-auto flex"
        />
      )}

      {filteredUsers.length === 0 && searchQuery && (
        <p className="text-primaryText text-center text-lg font-gilroySemibold mb-6">
          {textSearch}
        </p>
      )}

      {event?.user?.length === 0 && !searchQuery && (
        <p className="text-primaryText text-center text-lg font-gilroySemibold mb-6">
          {textRegister}
        </p>
      )}

      {filteredUsers.length !== 0 && (
        <ul className="flex flex-wrap gap-5 justify-center mb-5">
          {filteredUsers.map((item) => (
            <li
              key={item._id}
              className="flex flex-col gap-4 bg-customRadial rounded-3xl p-5 w-64 min-h-14"
            >
              <p className="text-white text-sm font-gilroyMedium font-medium">
                {item.fullName}
              </p>
              <p className="text-white text-sm font-gilroyMedium font-medium">
                {item.email}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
