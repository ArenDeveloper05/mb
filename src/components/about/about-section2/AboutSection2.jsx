import img from "../../../assets/images/about-support.png";
import done from "../../../assets/icons/doneIcon.png";

const AboutSection2 = () => {
  return (
    <section className="about-section2">
      <div className="about-section2-img">
        <img src={img} alt="img" />
      </div>
      <div className="about-section2-info">
        <h5>
          Благодаря Центрам «Мой бизнес» предприниматели имеют возможность
          получить следующие виды поддержки
        </h5>
        <ul>
          <li>
            <img src={done} alt="" />
            <p>информационно-консультационную</p>
          </li>
          <li>
            <img src={done} alt="" />
            <p>имущественную</p>
          </li>
          <li>
            <img src={done} alt="" />
            <p>финансовую</p>
          </li>
          <li>
            <img src={done} alt="" />
            <p>экспортную</p>
          </li>
          <li>
            <img src={done} alt="" />
            <p>в сфере развития производства</p>
          </li>
          <li>
            <img src={done} alt="" />
            <p>профессиональное обучение</p>
          </li>
          <li>
            <img src={done} alt="" />
            <p>услуги всех организаций инфраструктуры поддержки бизнеса</p>
          </li>
          <li>
            <img src={done} alt="" />
            <p>комплексные услуги по бизнес-ситуациям</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection2;
