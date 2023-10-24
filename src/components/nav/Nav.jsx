import "./Nav.scss";
import Container from "../common/container/Container";
import NavLinks from "./nav-links/NavLinks";

const Nav = () => {
  return (
    <nav className="nav">
      <Container>
        <NavLinks />
      </Container>
    </nav>
  );
};

export default Nav;
