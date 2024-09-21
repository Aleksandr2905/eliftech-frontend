export interface EventsSortProps {
  sortType: "default" | "title" | "event_date" | "organizer";
  setSortType: (type: "default" | "title" | "event_date" | "organizer") => void;
  resetFilters: () => void;
}
