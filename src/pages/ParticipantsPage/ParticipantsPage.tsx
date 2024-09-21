import { Participants } from "../../components/Participants";

export const ParticipantsPage: React.FC = () => {
  return (
    <section>
      <div className="container min-h-[calc(100vh-181px)] flex my-auto flex-col">
        <Participants />
      </div>
    </section>
  );
};
