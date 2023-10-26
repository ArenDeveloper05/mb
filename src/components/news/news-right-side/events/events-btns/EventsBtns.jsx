import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const EventsBtns = () => {
  return (
    <div className="news-right-side-events-btns">
      <div className="news-right-side-events-btns-prnt">
        <button className="news-right-side-events-btns-prnt-btn">
          <AiOutlineLeft />
        </button>

        <button className="news-right-side-events-btns-prnt-btn">
          <AiOutlineRight />
        </button>
      </div>

      <p className="news-right-side-events-btns-title">ОКТЯБРЬ, 2023</p>
    </div>
  );
};

export default EventsBtns;
