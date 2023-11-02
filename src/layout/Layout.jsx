import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Modes from "../components/home/modes/Modes";
import Container from "../components/common/container/Container";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <Container>
        <Modes />
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
