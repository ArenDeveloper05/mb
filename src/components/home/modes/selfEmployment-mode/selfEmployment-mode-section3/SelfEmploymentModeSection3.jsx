import "./SelfEmploymentModeSection3.scss";

const SelfEmploymentModeSection3 = () => {
  return (
    <section className="self-employment-mode-section3">
      <h2>Как стать самозанятым в Дагестане?</h2>
      <p>
        Чтобы использовать новый специальный налоговый режим, нужно пройти
        регистрацию и получить подтверждение. Без регистрации применение
        налогового режима и формирование чеков невозможно.
      </p>
      <br />
      <p>
        Регистрация в приложении "Мой налог" занимает несколько минут. Заполнять
        заявление на бумаге и посещать инспекцию не нужно. Доступны несколько
        способов:
      </p>
      <div className="self-employment-mode-section3-info">
        <div className="self-employment-mode-section3-info-item">
          <p>
            с использованием паспорта для сканирования и проверки, а также
            фотографии, которую можно сделать прямо на камеру смартфона;
          </p>
        </div>
        <div className="self-employment-mode-section3-info-line"></div>
        <div className="self-employment-mode-section3-info-item">
          <p>
            c использованием ИНН и пароля, которые используются для доступа в
            личный кабинет физлица на сайте nalog.ru;
          </p>
        </div>
        <div className="self-employment-mode-section3-info-line"></div>
        <div className="self-employment-mode-section3-info-item">
          <p>
            с помощью учетной записи Единого портала государственных и
            муниципальных услуг.
          </p>
        </div>
      </div>
      <div className="self-employment-mode-section3-appInfo">
        <h3>Приложение уже доступно для скачивания</h3>
        <div className="self-employment-mode-section3-appInfo-buttonsBox">
          <form
            className="self-employment-mode-section3-appInfo-buttonsBox-form"
            action=""
          >
            <button className="self-employment-mode-section3-appInfo-buttonsBox-form-button1">
              Скачать из App Store
            </button>
            <button className="self-employment-mode-section3-appInfo-buttonsBox-form-button2">
              Скачать из Google Play
            </button>
          </form>
        </div>
        <p>
          Также налогоплательщик может зарегистрироваться, обратившись в
          уполномоченные банки,
          <br /> а при отсутствии смартфона - работать через вэб-версию
          приложения «Мой налог».
        </p>
      </div>
    </section>
  );
};

export default SelfEmploymentModeSection3;
