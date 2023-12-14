import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts-container">
        <div className="contacts-container-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354303.6507409404!2d44.526295929598696!3d43.2279995818428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40506ee1bcdb665b%3A0x79b7e8f3e4ff7840!2z0JDQndCeICLQptC10L3RgtGAINC_0L7QtNC00LXRgNC20LrQuCDQv9GA0LXQtNC_0YDQuNC90LjQvNCw0YLQtdC70YzRgdGC0LLQsCDQoNCYIg!5e0!3m2!1sru!2sam!4v1699365211584!5m2!1sru!2sam"
            frameBorder={0}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contacts-container-info">
          <p className="contacts-container-info-title">
            ГАУ «Центр поддержки предпринимательства <br /> Республики
            Ингушетия» Мой <br /> бизнес
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
