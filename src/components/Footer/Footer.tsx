import { Navigation } from "../Navigation";
import { Social } from "../Social";
import { common } from "../../data";

export const Footer: React.FC = () => {
  const { copyright } = common;
  return (
    <footer className="">
      <div className="container py-5">
        <div className="flex justify-between">
          <Social />
          <Navigation />
        </div>
        <p className="text-center font-gilroyRegular text-xs mt-3 pt-3 border-t-[1px]">
          {copyright}
        </p>
      </div>
    </footer>
  );
};
