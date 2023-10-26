import { Link } from "react-router-dom";
import "./HomeEventsSection.scss";

const HomeEventsSection = () => {
  return (
    <section className="home-events-section">
      <div className="home-events-section-head">
        <h1>Мероприятия</h1>
        <form action="" className="home-events-section-head-form">
          <button className="home-events-section-head-form-button">
            все мероприятия
          </button>
        </form>
      </div>
      <form action="">
        <input
          className="home-events-section-searchInput"
          type="text"
          placeholder="Поиск мероприятий"
        />
      </form>
      <h2>сентябрь</h2>
      <div className="home-events-section-mounthEvents">
        <div className="home-events-section-mounthEvents-outter">
          <Link>
            <div className="home-events-section-mounthEvents-item">
              <div className="home-events-section-mounthEvents-item-date">
                <p>29</p>
                <span>сентябрь</span>
              </div>
              <div className="home-events-section-mounthEvents-item-title">
                <p>«Самозанятые в индустрии красоты»</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="home-events-section-mounthEvents-outter">
          <Link>
            <div className="home-events-section-mounthEvents-item">
              <div className="home-events-section-mounthEvents-item-date">
                <p>30</p>
                <span>сентябрь</span>
              </div>
              <div className="home-events-section-mounthEvents-item-title">
                <p>«Мой Бизнес. Самозанятые в туристической отрасли»</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="home-events-section-mounthEvents-outter">
          <Link>
            <div className="home-events-section-mounthEvents-item">
              <div className="home-events-section-mounthEvents-item-date">
                <p>30</p>
                <span>сентябрь</span>
              </div>
              <div className="home-events-section-mounthEvents-item-title">
                <p>«Мой Бизнес. Самозанятые в туристической отрасли»</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <h2>октябрь</h2>
      <div className="home-events-section-mounthEvents">
        <div className="home-events-section-mounthEvents-outter">
          <Link>
            <div className="home-events-section-mounthEvents-item">
              <div className="home-events-section-mounthEvents-item-date">
                <p>20</p>
                <span>октябрь</span>
              </div>
              <div className="home-events-section-mounthEvents-item-title">
                <p>«Развитие женского предпринимательства»</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="home-events-section-mounthEvents-outter">
          <Link>
            <div className="home-events-section-mounthEvents-item">
              <div className="home-events-section-mounthEvents-item-date">
                <p>23</p>
                <span>октябрь</span>
              </div>
              <div className="home-events-section-mounthEvents-item-title">
                <p>«Косметология» - «Перманентный макияж»</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="home-events-section-mounthEvents-outter">
          <Link>
            <div className="home-events-section-mounthEvents-item">
              <div className="home-events-section-mounthEvents-item-date">
                <p>25</p>
                <span>октябрь</span>
              </div>
              <div className="home-events-section-mounthEvents-item-title">
                <p>Выставка «Легпром»</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeEventsSection;
