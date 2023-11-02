import { useEffect, useState } from "react";
import { servicesConfig } from "../../config";
import { useSearchParams } from "react-router-dom";

import PageBanner from "../common/page-banner/PageBanner";

import "./Services.scss";

const Services = () => {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const [activeService, setActiveService] = useState(
    id && servicesConfig[id - 1] ? id : 1
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <PageBanner
        params={{
          list: [{ id: 1, title: servicesConfig[activeService - 1].title }],
          title: servicesConfig[activeService - 1].title,
        }}
      />
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
    </>
  );
};

export default Services;
