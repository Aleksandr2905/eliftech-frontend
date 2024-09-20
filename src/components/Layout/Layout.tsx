import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
