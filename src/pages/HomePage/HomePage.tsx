import { home } from "../../data";

export const HomePage: React.FC = () => {
  const { title, subtitle, text } = home;
  return (
    <section>
      <div className="container min-h-[calc(100vh-181px)] flex my-auto">
        <div className="bg-customRadial rounded-3xl p-5 flex flex-col gap-5 justify-center">
          <h1 className="text-white font-gilroySemibold text-2xl font-semibold md:text-4xl xl:text-7xl">
            {title}
          </h1>
          <h2 className="text-white font-gilroyMedium text-lg font-medium xl:text-2xl">
            {subtitle}
          </h2>
          <p className="text-white font-gilroyRegular text-base font-normal xl:text-lg">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};
