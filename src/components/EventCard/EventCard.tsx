import { Link } from "react-router-dom";
import { EventCardProps } from "./types";
import { eventsData } from "../../data";

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { _id, title, description, event_date, organizer } = event;
  const { btn } = eventsData;

  return (
    <div className="flex flex-col gap-4 bg-customRadial rounded-3xl p-5 w-80 min-h-60">
      <h3 className="text-white text-lg font-gilroySemibold font-semibold h-14">
        {title}
      </h3>
      <p className="text-white text-sm font-gilroyRegular font-normal">
        {description}
      </p>
      <div className="flex justify-between">
        <p className="text-white text-sm font-gilroyMedium font-medium">
          {event_date}
        </p>
        <p className="text-white text-sm font-gilroyMedium font-medium">
          {organizer}
        </p>
      </div>
      <div className="flex justify-between mt-auto">
        <Link
          to={`/register/${_id}`}
          className="border-2 border-white rounded-3xl px-4 py-1 text-white font-gilroyRegular text-sm hover:text-blue-500 hover:bg-white transition-all duration-300"
        >
          {btn.register}
        </Link>
        <Link
          to={`/participants/${_id}`}
          className="border-2 border-white rounded-3xl px-4 py-1 text-white font-gilroyRegular text-sm hover:text-blue-500 hover:bg-white transition-all duration-300"
        >
          {btn.view}
        </Link>
      </div>
    </div>
  );
};
