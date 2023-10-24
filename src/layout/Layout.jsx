import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
