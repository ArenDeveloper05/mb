import conferenceImg from "../../../assets/images/conference.jpg";
import covorkingImg from "../../../assets/images/covorking.jpg";

import "./PropertySupport.scss";

const PropertySupport = () => {
  const halls = [{ id: 1, title: "Коворкинг", image: covorkingImg }];
  return (
    <div className="property-support">
      <ul>
        <li>
          Предоставление оборудованного конференц-зала для проведения
          мероприятий (до 40 чел) – г. Махачкала ул. Гагарина 120, Центр «Мой
          Бизнес»
        </li>
        <li>
          Предоставление оснащенного рабочего места в коворкинге (12 раб. мест)
          – г. Махачкала ул. Гагарина 120, Центр «Мой Бизнес»
        </li>
        <li>
          Предоставление оборудованных переговорных комнат (до 6 чел.) – г.
          Махачкала ул. Гагарина 120, Центр «Мой Бизнес»
        </li>
      </ul>
      <div className="conference-image">
        <img src={conferenceImg} alt="conference" />
      </div>
      <p className="conference-name">Конференц-зал</p>
      <h2>Бизнес-инкубаторы:</h2>
      <ul>
        <li>Бизнес-инкубатор «120» – гор Махачкала ул Гагарина 120</li>
        <li>Бизнес-инкубатор «Турали» – пос. Турали ул. Сурхай-Хана д.1</li>
        <li>
          Бизнес-инкубатор «Нарын-Кала» – гор. Дербент ул. Фермерская 102.
        </li>
        <li>Бизнес-инкубатор «Черемушки» – гор. Кизляр ул. Шевченко 38</li>
        <li>Бизнес-инкубатор «Сулак» – гор. Кизилюрт ул. Ленина 105.</li>
      </ul>
      <div className="halls">
        {halls &&
          halls.map(({ id, title, image }) => {
            return (
              <div className="halls-item" key={id}>
                <img src={image} alt="" />
                <span>{title}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PropertySupport;
