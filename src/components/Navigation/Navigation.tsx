import { NavLink, useLocation } from "react-router-dom";
import { common } from "../../data";

export const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <nav className="flex gap-4 items-center md:gap-7">
      {common.nav.map(({ to, name }) => (
        <NavLink
          key={name}
          to={to}
          className={`text-base font-gilroyMedium  hover:text-hover md:text-xl transition-all duration-300 ${
            pathname === to ? "text-yellow-400" : "text-primaryText"
          }`}
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
};
