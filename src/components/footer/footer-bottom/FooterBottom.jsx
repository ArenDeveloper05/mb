import footerLogo from "../../../assets/images/logo_footer.png";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <img src={footerLogo} alt="Footer_logo" />

      <p className="footer-bottom-txt">Мой бизнес — 2020</p>

      <p className="footer-bottom-txt">
        Политика обработки персональных данных
      </p>

      <p className="footer-bottom-txt">Соглашение о пользовании сайтом</p>
    </div>
  );
};

export default FooterBottom;
