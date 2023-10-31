import { useState } from "react";
import RelatedPosts from "../components/common/related-posts/RelatedPosts";
import NewsRightSide from "../components/news/news-right-side/NewsRightSide";
import news_img_1 from "../assets/images/news-img-1.jpg";

const NewsLayout = ({ children, isHidden }) => {
  const [list] = useState([
    {
      id: 1,
      title: "title",
      img: news_img_1,
      date: "3 августа 2023",
      desc: "Начинающим предпринимателям Дагестана рассказали о мерах господдержки",
    },
    {
      id: 2,
      title: "title",
      img: news_img_1,
      date: "3 августа 2023",
      desc: "Начинающим предпринимателям Дагестана рассказали о мерах господдержки",
    },
    {
      id: 3,
      title: "title",
      img: news_img_1,
      date: "3 августа 2023",
      desc: "Начинающим предпринимателям Дагестана рассказали о мерах господдержки",
    },
  ]);

  return (
    <div className="news-layout">
      <section style={{ display: "flex" }}>
        <div style={{ flex: 2 }}>{children}</div>

        <NewsRightSide />
      </section>

      {/*  */}
      {isHidden && <RelatedPosts title="Похожие записи" list={list} />}
    </div>
  );
};

export default NewsLayout;
