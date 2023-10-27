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
              className="field"
              key={id}
              style={{ border: active === id ? "solid" : "none" }}
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
