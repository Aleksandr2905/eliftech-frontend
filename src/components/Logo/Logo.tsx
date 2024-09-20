import sprite from "../../assets/icons/sprite.svg";

export const Logo: React.FC = () => {
  return (
    <a href="/" className="inline-flex items-center gap-3">
      <svg width="32" height="32">
        <use href={`${sprite}#logo`} />
      </svg>
      <span className="font-gilroySemibold text-base font-semibold text-primaryText">
        IT Event Hub
      </span>
    </a>
  );
};
