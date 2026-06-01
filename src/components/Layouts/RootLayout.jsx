import React from "react";
import Header from "../Common/Header";
import { Outlet, ScrollRestoration, useMatches } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Common/Footer";
const RootLayout = () => {
  const matches = useMatches();
  const hideFooter = matches.some((math) => math.handle?.hideFooter);
  console.log(hideFooter);
  return (
    <>
      <Header />
      <ScrollRestoration />
      <main id="content">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </>
  );
};

export default RootLayout;
