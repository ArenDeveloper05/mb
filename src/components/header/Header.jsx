import "./Header.scss";
import Container from "../common/container/Container";
import { BiMenuAltLeft } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../router/router";
import { useState } from "react";
import Menu from "../menu/Menu";
import FeedbackButton from "./feedback-button/FeedbackButton";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Container>
        <div className="header-inner">
          <div className="header-inner-left">
            <div
              className="burger"
              onClick={() => {
                setMenuOpen((prev) => !prev);
              }}
            >
              {menuOpen ? <AiOutlineClose /> : <BiMenuAltLeft />}
            </div>
            <div
              className="logo"
              onClick={() => {
                navigate(ROUTER.HOME_PAGE_ROUTE);
              }}
            >
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="header-inner-right">
            <a>
              <div className="tel-icon">
                <BsTelephone />
              </div>
              <span>8 (800) 700 99 00</span>
            </a>
            <FeedbackButton />
          </div>
        </div>
      </Container>
      <Menu open={menuOpen} />
    </header>
  );
};

export default Header;
