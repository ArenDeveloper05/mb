import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts-container">
        <div className="contacts-container-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96223.75595646311!2d47.49791196269158!3d42.92792211929546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404ea126e14fa1b1%3A0x6b11dd408abfc02b!2z0KbQtdC90YLRgCDQv9C-0LTQtNC10YDQttC60Lgg0L_RgNC10LTQv9GA0LjQvdC40LzQsNGC0LXQu9GM0YHRgtCy0LAg0KDQtdGB0L_Rg9Cx0LvQuNC60Lgg0JTQsNCz0LXRgdGC0LDQvQ!5e0!3m2!1sru!2sam!4v1698827356407!5m2!1sru!2sam"
            frameBorder={0}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contacts-container-info">
          <p className="contacts-container-info-title">
            ГАУ «Центр поддержки предпринимательства <br /> Республики Дагестан»
            Мой <br /> бизнес
          </p>
          <p className="contacts-container-info-phone">
            <a href="">8 (800) 700 99 00</a>
            <br />
            <a href="">info@mb05.ru</a>
          </p>
          <p className="contacts-container-info-workTime">ГРАФИК РАБОТЫ</p>
          <p className="contacts-container-info-workTime">
            Пн-Пт: 09.00-18.00 без перерывов <br />
            Сб-Вс: выходной
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
