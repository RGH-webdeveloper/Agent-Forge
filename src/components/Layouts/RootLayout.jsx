import React from "react";
import Header from "../Common/Header";
import { Outlet, ScrollRestoration, useMatches } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Common/Footer";
const RootLayout = () => {
  const mathes = useMatches();
  const hideFooter = mathes.some((math) => math.handle?.hideFooter);
  console.log(hideFooter);
  return (
    <section id="route">
      <Header />
      <ScrollRestoration />
      <main id="content" className="d-relative">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </section>
  );
};

export default RootLayout;
