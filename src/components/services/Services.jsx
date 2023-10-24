import { useState } from "react";
import { servicesConfig } from "../../config";
import "./Services.scss";
import { useSearchParams } from "react-router-dom";

const Services = () => {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const [activeService, setActiveService] = useState(
    id && servicesConfig[id] ? id : 1
  );

  return (
    <div className="services">
      <div className="services-list">
        {servicesConfig &&
          servicesConfig.map(({ id, title, icon }) => {
            return (
              <div
                key={id}
                className="services-list-item"
                style={
                  id === activeService
                    ? {
                        border: "1px solid #a2662e",
                        color: "#a2662e",
                      }
                    : {}
                }
                onClick={() => {
                  if (activeService !== id) {
                    setActiveService(id);
                  }
                }}
              >
                <div className="services-list-item-icon">
                  {icon && <img src={icon} alt="icon" />}
                </div>
                <p>{title}</p>
              </div>
            );
          })}
      </div>
      <div className="services-component">
        {servicesConfig[activeService - 1].component &&
          servicesConfig[activeService - 1].component}
      </div>
    </div>
  );
};

export default Services;
