import { useState } from "react";
import { adminConfig } from "./adminConfig";
import "./Admin.scss";

const Admin = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="admin">
      <aside>
        {adminConfig.map(({ id, title }) => {
          return (
            <div
              className={`field ${active === id ? "active" : ""}`}
              key={id}
              onClick={() => {
                if (id !== active) {
                  setActive(id);
                }
              }}
            >
              <p>{title}</p>
            </div>
          );
        })}
      </aside>
      <div className="admin-content">
        {adminConfig[active - 1].component
          ? adminConfig[active - 1].component
          : ""}
      </div>
    </div>
  );
};

export default Admin;
