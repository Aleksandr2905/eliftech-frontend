import { Hourglass } from "react-loader-spinner";

export const Loader: React.FC = () => {
  return (
    <div className="fixed z-9 top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm">
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#2563eb", "#72a1ed"]}
      />
    </div>
  );
};
