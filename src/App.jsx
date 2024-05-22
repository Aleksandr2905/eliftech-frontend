import { Route, Routes } from "react-router-dom";
import EventsPage from "./pages/EventsPage/EventsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ParticipantsPage from "./pages/ParticipantsPage/ParticipantsPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<EventsPage />} />
        <Route path="/register/:id" element={<RegisterPage />} />
        <Route path="/participants/:id" element={<ParticipantsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
