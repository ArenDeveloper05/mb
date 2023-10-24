import { useEffect, useRef } from "react";
import Container from "../common/container/Container";
import "./Menu.scss";
import { menuConfig } from "../../config";
import MenuItem from "./menu-item/MenuItem";

const Menu = ({ open }) => {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return (
    <section
      className={`menu ${
        open ? "menu-open" : firstRender.current ? "" : "menu-close"
      }`}
    >
      <Container>
        <div
          className="menu-content"
          style={{ display: open ? "block" : "none" }}
        >
          {menuConfig.map((item) => {
            return <MenuItem item={item} key={item.id} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default Menu;
