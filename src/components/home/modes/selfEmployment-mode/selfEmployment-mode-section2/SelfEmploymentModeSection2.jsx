import "./SelfEmploymentModeSection2.scss";
import img from "../../../../../assets/images/self-employed-section2-img.png";

const SelfEmploymentModeSection2 = () => {
  return (
    <section className="self-employment-mode-section2">
      <div className="self-employment-mode-section2-img">
        <img src={img} alt="alt" />
      </div>
      <div className="self-employment-mode-section2-content">
        <h2>Кто такие самозанятые?</h2>
        <p>
          Самозанятые – это граждане, получающие доход от своей личной трудовой
          деятельности, не имеющие наемных работников и доход которых не
          превышает 2 400 000 рублей.
        </p>
        <p>
          Статус самозанятого с каждым месяцем набирает популярность, а в
          интернете растёт интерес к таким темам как «самозанятые граждане
          Дагестана» и «регистрация как самозанятый гражданин Махачкала». Статус
          самозанятого лица выбирают специалисты разных профессий, при этом
          законодательством предусмотрены ограничения по видам деятельности
          самозанятых граждан.
        </p>
      </div>
    </section>
  );
};

export default SelfEmploymentModeSection2;
