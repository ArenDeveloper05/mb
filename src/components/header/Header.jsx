import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import { BiMenuAltLeft } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { ROUTER } from "../../router/router";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

import logo from "../../assets/images/logo.png";

import Menu from "../menu/Menu";
import Container from "../common/container/Container";
import FeedbackButton from "./feedback-button/FeedbackButton";

import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuRender } from "../../redux/slices/menuSlice";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const render = useSelector((store) => store.menu.menuRender);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <Container>
        <div className="header-inner">
          <div className="header-inner-left">
            <div
              className="burger"
              onClick={() => {
                dispatch(changeMenuRender(false));
                if (render) {
                  setTimeout(() => {
                    dispatch(changeMenuRender(true));
                  }, 500);
                }

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
            <a className="header-inner-right-link">
              <div className="tel-icon">
                <BsTelephone />
              </div>
              <span>8 (800) 700 99 00</span>
            </a>
            <FeedbackButton />
            <CiSearch className="header-inner-right-search-icon" />
          </div>
        </div>
      </Container>
      <Menu open={menuOpen} render={render} setMenuOpen={setMenuOpen} />
    </header>
  );
};

export default Header;
