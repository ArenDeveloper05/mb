import "./HomeQuestionSection.scss";

const HomeQuestionSection = () => {
  return (
    <section className="home-question-section">
      <h1>Есть вопросы? Задавайте!</h1>
      <form className="home-question-section-form" action="">
        <input
          className="home-question-section-form-input"
          type="text"
          name=""
          id=""
          placeholder="Ваше имя"
        />
        <input
          className="home-question-section-form-input"
          type="email"
          name=""
          id=""
          placeholder="Ваш e-mail"
        />
        <textarea
          name=""
          id=""
          cols="40"
          rows="10"
          placeholder="Ваш вопрос"
        ></textarea>
        <input
          className="home-question-section-form-submit"
          type="submit"
          value="Задать вопрос"
        />
      </form>
    </section>
  );
};

export default HomeQuestionSection;
