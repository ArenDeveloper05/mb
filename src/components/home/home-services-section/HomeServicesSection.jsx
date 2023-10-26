import React from "react";
import "./HomeServicesSection.scss";
import { servicesConfig } from "../../../config";
import HomeServicesSectionItem from "./home-services-section-item/HomeServicesSectionItem";

// =======

import howItWorkImg1 from "../../../assets/images/schema1.svg";
import howItWorkImg2 from "../../../assets/images/schema2.svg";
import howItWorkImg3 from "../../../assets/images/schema3.svg";

const HomeServicesSection = () => {
  return (
    <section className="home-services-section">
      <h1>Предоставляемые услуги</h1>
      <div className="home-services-section-servicesContainer">
        {servicesConfig.map((item) => {
          return <HomeServicesSectionItem item={item} key={item.id} />;
        })}
      </div>
      <h1>Как это работает?</h1>
      <div className="home-services-section-howItWorkContainer">
        <div className="home-services-section-howItWorkContainer-item">
          <img src={howItWorkImg1} alt="img" />
          <p>
            Лишь единожды вы оставляете заявку на сайте, посещаете фронт-офис
            Центра “Мой Бизнес”, офис МФЦ для бизнеса или удобный вам ИКЦ.
          </p>
        </div>
        <div className="home-services-section-howItWorkContainer-item">
          <img src={howItWorkImg2} alt="img" />
          <p>
            В течение 24 часов ваш вопрос будет проработан. Опытные специалисты
            дадут рекомендации и предложат инструменты гос.поддержки.
          </p>
        </div>
        <div className="home-services-section-howItWorkContainer-item">
          <img src={howItWorkImg3} alt="img" />
          <p>
            Получаете консультации, обучение, финансирование, имущественную
            поддержку, сопровождение проекта, инвестирование.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;
