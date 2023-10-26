import { useState } from "react";
import LatestNewsListItem from "./latest-news-list-item/LatestNewsListItem";

const LatestNewsList = () => {
  const [latestNewsList] = useState([
    {
      id: 1,
      title: "«Мой добрый бизнес»",
      link: "#",
    },
    {
      id: 2,
      title: "«Гранд Текстиль 2023»",
      link: "#",
    },
    {
      id: 3,
      title: "78 регионов показывают рост сектора МСП по ряду показателей",
      link: "#",
    },
    {
      id: 4,
      title: "Приём заявок на Конкурс «История успеха самозанятых 2023 г.",
      link: "#",
    },
    {
      id: 5,
      title:
        "🔴В центре поддержке предпринимательства Дагестана рассказали, как правильно сдавать бухгалтерскую отчетность",
      link: "#",
    },
  ]);

  return (
    <ul className="news-right-side-latest-news-list">
      {latestNewsList.map((item) => {
        return <LatestNewsListItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default LatestNewsList;
