import { EventsSortProps } from "./types";

export const EventsSort: React.FC<EventsSortProps> = ({
  sortType,
  setSortType,
  resetFilters,
}) => {
  return (
    <div className="mb-4 flex justify-center gap-4">
      <div>
        <label className="mr-2 font-gilroyMedium text-lg">Sort by:</label>
        <select
          value={sortType}
          onChange={(e) =>
            setSortType(
              e.target.value as "default" | "title" | "event_date" | "organizer"
            )
          }
          className="p-2  border rounded font-gilroyMedium text-lg"
        >
          <option value="default">Select sorting</option>
          <option value="title">Title</option>
          <option value="event_date">Event Date</option>
          <option value="organizer">Organizer</option>
        </select>
      </div>

      <button
        onClick={resetFilters}
        className="font-gilroyMedium text-sm p-2 bg-blue-500 border  rounded hover:bg-blue-700 text-white transition-all duration-300"
      >
        Reset Filters
      </button>
    </div>
  );
};
