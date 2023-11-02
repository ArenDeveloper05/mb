import { useEffect } from "react";
import Container from "../common/container/Container";
import "./Menu.scss";
import { menuConfig } from "../../config";
import MenuItem from "./menu-item/MenuItem";

const Menu = ({ open, render }) => {
  useEffect(() => {
    let scrollBefore = 0;
    function handleScroll() {
      const scrolled = window.scrollY;
      if (open) {
        if (scrollBefore > scrolled) {
          scrollBefore = scrolled;
        } else {
          scrollBefore = scrolled;
          if (scrolled > 100) {
            window.scrollTo({ top: 100 });
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <section
      className={`menu ${open ? "menu-open" : render ? "" : "menu-close"}`}
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
