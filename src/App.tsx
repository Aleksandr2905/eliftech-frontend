import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { EventsPage } from "./pages/EventsPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ParticipantsPage } from "./pages/ParticipantsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/register/:id" element={<RegisterPage />} />
          <Route path="/participants/:id" element={<ParticipantsPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
