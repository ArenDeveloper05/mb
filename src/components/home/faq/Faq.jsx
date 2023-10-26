import { useCallback, useEffect, useState } from "react";
import { faqConfig } from "../../../config";
import "./Faq.scss";
import FaqItem from "./faq-item/FaqItem";

const Faq = () => {
  const [data, setData] = useState(faqConfig);

  const changeActive = useCallback((id) => {
    setData((prev) => {
      return prev.map((item) => {
        if (item.open) {
          item.close = true;
        } else {
          item.close = false;
        }
        if (item.id === id) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      });
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="faq">
      <h1>Вопрос-ответ FaQ</h1>
      <ul className="faq-list">
        {data.map((item) => {
          return (
            <FaqItem item={item} changeActive={changeActive} key={item.id} />
          );
        })}
      </ul>
    </div>
  );
};

export default Faq;
