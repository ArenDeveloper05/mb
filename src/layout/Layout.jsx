import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Container from "../components/common/container/Container";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
