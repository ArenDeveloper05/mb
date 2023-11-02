import { Link } from "react-router-dom";
import { ROUTER } from "../../../router/router";
import { Fragment } from "react";

import "./PageBanner.scss";

const PageBanner = ({ params }) => {
  const text = params && params.title ? params.title : "";

  return (
    <div className="page-banner">
      <div className="page-banner-content">
        <Link to={ROUTER.HOME_PAGE_ROUTE}>
          {"Центр «Мой Бизнес»".toUpperCase()}
        </Link>
        {params &&
          params.list &&
          params.list.map(({ id, title, link }) => {
            return (
              <Fragment key={id}>
                <b style={{ color: "grey", fontWeight: "300" }}> / </b>
                {link ? (
                  <Link to={link} className="banner-link">
                    {title.toUpperCase()}
                  </Link>
                ) : (
                  <span>{title.toUpperCase()}</span>
                )}
              </Fragment>
            );
          })}
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default PageBanner;
