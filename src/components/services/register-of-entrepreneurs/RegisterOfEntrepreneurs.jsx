import { Link } from "react-router-dom";
import "./RegisterOfEntrepreneurs.scss";

const RegisterOfEntrepreneurs = () => {
  return (
    <div className="register-of-entrepreneurs">
      <Link>
        <div className="register-of-entrepreneurs-link">
          <p>Реестр оказываемых услуг — юридические лица — 2022 год</p>
          <div className="register-of-entrepreneurs-link-arrow"></div>
        </div>
      </Link>
      <Link>
        <div className="register-of-entrepreneurs-link">
          <p>
            Реестр оказываемых услуг — индивидуальные предприниматели — 2022 год
          </p>
          <div className="register-of-entrepreneurs-link-arrow"></div>
        </div>
      </Link>
      <Link>
        <div className="register-of-entrepreneurs-link">
          <p>Реестр производителей юридических лиц</p>
          <div className="register-of-entrepreneurs-link-arrow"></div>
        </div>
      </Link>
      <Link>
        <div className="register-of-entrepreneurs-link">
          <p>Реестр производителей индивидуальных предпринимателей</p>
          <div className="register-of-entrepreneurs-link-arrow"></div>
        </div>
      </Link>
      <Link>
        <div className="register-of-entrepreneurs-link">
          <p>Реестр оказываемых услуг — индивидуальные предприниматели</p>
          <div className="register-of-entrepreneurs-link-arrow"></div>
        </div>
      </Link>
      <Link>
        <div className="register-of-entrepreneurs-link">
          <p>Реестр оказываемых услуг — юридические лица</p>
          <div className="register-of-entrepreneurs-link-arrow"></div>
        </div>
      </Link>
    </div>
  );
};

export default RegisterOfEntrepreneurs;
