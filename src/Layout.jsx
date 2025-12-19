import React from "react";
import Header from "./header and footer/Header";
import { Outlet } from "react-router-dom";
import Footer from "./header and footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
