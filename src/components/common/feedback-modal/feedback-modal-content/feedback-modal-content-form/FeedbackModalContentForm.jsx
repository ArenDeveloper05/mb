import { useState } from "react";

const FooterTopFeedbackModalContentForm = () => {
  const [inputsVal, setInputVal] = useState({
    name: "",
    number: "",
    organizations: "",
    comment: "",
  });

  const handleInputsOnChange = (evt) => {
    setInputVal((prev) => {
      return {
        ...prev,
        [evt.target.name]: evt.target.value,
      };
    });
  };

  return (
    <div className="footer-top-feedback-modal-content-form">
      <form>
        <p>Представьтесь пожалуйста</p>
        <input
          type="text"
          placeholder="Например: Иван Юрьевич"
          name="name"
          value={inputsVal.name}
          onChange={handleInputsOnChange}
        />

        <p>Ваш номер телефона</p>
        <input
          type="text"
          placeholder="Например: +7 (928) 123-45-67"
          name="number"
          value={inputsVal.number}
          onChange={handleInputsOnChange}
        />

        <p>Название организации(если есть)</p>
        <input
          type="text"
          placeholder="Например: Фирма АС"
          name="organizations"
          value={inputsVal.organizations}
          onChange={handleInputsOnChange}
        />

        <p>Какую нишу Вы выбрали? (если есть)</p>
        <select>
          <option value="">Без направления</option>
          <option value="">Самозанятый</option>
          <option value="">Имусшественная поддержка</option>
          <option value="">Финансовая поддержка</option>
          <option value="">Поддержка экспорта</option>
          <option value="">Тех. присоединение</option>
          <option value="">Образовательная Поддержка</option>
        </select>

        <p>Комментарий</p>
        <textarea
          placeholder="Начните писать здесь"
          name="comment"
          value={inputsVal.comment}
          onChange={handleInputsOnChange}
        ></textarea>

        <p className="links">
          Отправляя вопрос, я даю согласие на
          <a href=""> обработку персональных данных</a> и подтверждаю согласие с{" "}
          <a href="">политикой конфиденциальности</a>
        </p>

        <input
          type="submit"
          value="Отправить запрос"
          readOnly
          className="btn"
          onChange={handleInputsOnChange}
        />

        <p className="response">
          Одно или несколько полей содержат ошибочные данные. Пожалуйста,
          проверьте их и попробуйте ещё раз.
        </p>
      </form>
    </div>
  );
};

export default FooterTopFeedbackModalContentForm;
