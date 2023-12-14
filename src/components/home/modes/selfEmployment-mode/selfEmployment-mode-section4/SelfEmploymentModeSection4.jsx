import "./SelfEmploymentModeSection4.scss";
import img from "../../../../../assets/images/self-employment-sectio4-img.png";

const SelfEmploymentModeSection4 = () => {
  return (
    <section className="self-employment-mode-section4">
      <h2>Почему выгодно быть самозанятым?</h2>
      <div className="self-employment-mode-section4-content">
        <img src={img} alt="img" />
        <div className="self-employment-mode-section4-content-greenBox">
          <h3>Преимущества легальных самозанятых</h3>
          <h4>Официальный статус</h4>
          <p>Самозанятые могут заключать договоры с крупными клиентами.</p>
          <div className="self-employment-mode-section4-content-greenBox-line"></div>
          <h4>Минимальные налоги</h4>
          <p>Платят всего 4% или 6% с каждого платежа.</p>
          <div className="self-employment-mode-section4-content-greenBox-line"></div>
          <h4>Справки о доходах</h4>
          <p>
            Отчисляют налоги, фиксируют доходы и получают справку о доходах.
          </p>
          <div className="self-employment-mode-section4-content-greenBox-line"></div>
          <h4>Легальный доход</h4>
          <p>Работают официально, у налоговой не будет вопросов.</p>
          <div className="self-employment-mode-section4-content-greenBox-line"></div>
          <h4>Возможность пользоваться мерами господдержки</h4>
          <p>
            Самозанятые относятся к субъектам МСП, а значит могут бесплатно
            получать правовую поддержку, разработку бизнес-плана, участие в
            выставках, получение займов и льготного лизинга и многое другое.
          </p>
        </div>
        <div className="self-employment-mode-section4-content-redBox">
          <h3>Страхи нелегальных самозанятых</h3>
          <h4>Нет кредитного рейтинга</h4>
          <p>Негде взять деньги на развитие бизнеса без справки о доходах.</p>
          <div className="self-employment-mode-section4-content-redBox-line"></div>
          <h4>Могут доначислить налог</h4>
          <p>
            Незаконный доход от аренды квартиры может стоить чиновнику карьеры.
          </p>
          <div className="self-employment-mode-section4-content-redBox-line"></div>
          <h4>Могут уволить с госслужбы</h4>
          <p>Придется платить 13% от дохода и штраф.</p>
          <div className="self-employment-mode-section4-content-redBox-line"></div>
          <h4>Не получат оплаты от клиента</h4>
          <p>Работают официально, у налоговой не будет вопросов.</p>
        </div>
      </div>
    </section>
  );
};

export default SelfEmploymentModeSection4;
