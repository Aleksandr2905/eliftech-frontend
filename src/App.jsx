import { Route, Routes } from "react-router-dom";
import EventsPage from "./pages/EventsPage/EventsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ParticipantsPage from "./pages/ParticipantsPage/ParticipantsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<EventsPage />} />
      <Route path="/register/:id" element={<RegisterPage />} />
      <Route path="/participants/:id" element={<ParticipantsPage />} />
    </Routes>
  );
};

export default App;
