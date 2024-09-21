import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Loader } from "../Loader";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
