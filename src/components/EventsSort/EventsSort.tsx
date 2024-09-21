import { EventsSortProps } from "./types";

export const EventsSort: React.FC<EventsSortProps> = ({
  sortType,
  setSortType,
  resetFilters,
}) => {
  return (
    <div className="mb-4 flex justify-center gap-4">
      <div>
        <label className="mr-2">Sort by:</label>
        <select
          value={sortType}
          onChange={(e) =>
            setSortType(
              e.target.value as "default" | "title" | "event_date" | "organizer"
            )
          }
          className="p-2 border rounded"
        >
          <option value="default">Select sorting</option>
          <option value="title">Title</option>
          <option value="event_date">Event Date</option>
          <option value="organizer">Organizer</option>
        </select>
      </div>

      <button
        onClick={resetFilters}
        className="p-2 bg-gray-200 border rounded hover:bg-gray-300"
      >
        Reset Filters
      </button>
    </div>
  );
};
