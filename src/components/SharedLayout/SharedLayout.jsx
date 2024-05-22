import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import { Button, Header } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Button to="/">Events page</Button>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
