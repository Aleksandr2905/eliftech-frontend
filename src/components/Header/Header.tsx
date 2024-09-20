import { Logo } from "../Logo";
import { Navigation } from "../Navigation";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="container py-5 flex justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
