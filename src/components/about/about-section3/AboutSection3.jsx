import img from "../../../assets/images/about-coworking.png";

const AboutSection3 = () => {
  return (
    <section className="about-section3">
      <div className="about-section3-info">
        <h5>
          Центр «Мой бизнес» — это зоны комфортного ожидания, переговорные
          комнаты, коворкинг с технически оснащенными рабочими местами и
          просторный конференц-зал для проведения разного формата
          образовательных и деловых мероприятий.
        </h5>
      </div>
      <div className="about-section3-img">
        <img src={img} alt="img" />
      </div>
    </section>
  );
};

export default AboutSection3;
