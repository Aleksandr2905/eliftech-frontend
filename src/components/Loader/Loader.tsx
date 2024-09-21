import { Watch } from "react-loader-spinner";

export const Loader: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(5px)",
      }}
    >
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#2563eb"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
