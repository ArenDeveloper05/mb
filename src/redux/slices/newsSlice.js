import { createSlice } from "@reduxjs/toolkit";
import news_img_1 from "../../assets/images/news-img-1.jpg";

const initialState = {
  news: [
    {
      id: 1,
      img: news_img_1,
      title: "«Мой добрый бизнес»",
      link: "#",
      desc: "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области […]",
      date: "2023 24.10",
      info_txt1:
        "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области социального предпринимательства и СОНКО «Мой добрый бизнес».",
      info_txt2:
        "Конкурс направлен на популяризацию и развитие социального предпринимательства и СОНКО.",
      info_txt3:
        "Подать заявку могут субъекты малого и среднего предпринимательства, имеющие статус социального предприятия, а также не имеющие статус, но осуществляющие деятельность в сфере социального предпринимательства, а также социально-ориентированные некоммерческие организации.Заявки подаются через официальный сайт конкурса:",
      info_txt4:
        "Победители регионального этапа получат памятные призы и выход на межрегиональный и федеральный этап конкурса.",
      info_txt5:
        "Подробно узнать о конкурсе можно на его официальном сайте https://moybusiness.guu.ru, либо у регионального куратора Конкурса по номеру телефона 8-928-050-64-73",
      info_link1: {
        title: "https://moybusiness.guu.ru/.",
        url: "#",
      },
      info_link2: "#",
    },
    {
      id: 2,
      img: news_img_1,
      title: "«Мой добрый бизнес»",
      link: "#",
      desc: "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области […]",
      date: "2023 24.10",
      info_txt1:
        "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области социального предпринимательства и СОНКО «Мой добрый бизнес».",
      info_txt2:
        "Конкурс направлен на популяризацию и развитие социального предпринимательства и СОНКО.",
      info_txt3:
        "Подать заявку могут субъекты малого и среднего предпринимательства, имеющие статус социального предприятия, а также не имеющие статус, но осуществляющие деятельность в сфере социального предпринимательства, а также социально-ориентированные некоммерческие организации.Заявки подаются через официальный сайт конкурса:",
      info_txt4:
        "Победители регионального этапа получат памятные призы и выход на межрегиональный и федеральный этап конкурса.",
      info_txt5:
        "Подробно узнать о конкурсе можно на его официальном сайте https://moybusiness.guu.ru, либо у регионального куратора Конкурса по номеру телефона 8-928-050-64-73",
      info_link1: {
        title: "https://moybusiness.guu.ru/.",
        url: "#",
      },
      info_link2: "#",
    },
    {
      id: 3,
      img: news_img_1,
      title: "«Мой добрый бизнес»",
      link: "#",
      desc: "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области […]",
      date: "2023 24.10",
      info_txt1:
        "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области социального предпринимательства и СОНКО «Мой добрый бизнес».",
      info_txt2:
        "Конкурс направлен на популяризацию и развитие социального предпринимательства и СОНКО.",
      info_txt3:
        "Подать заявку могут субъекты малого и среднего предпринимательства, имеющие статус социального предприятия, а также не имеющие статус, но осуществляющие деятельность в сфере социального предпринимательства, а также социально-ориентированные некоммерческие организации.Заявки подаются через официальный сайт конкурса:",
      info_txt4:
        "Победители регионального этапа получат памятные призы и выход на межрегиональный и федеральный этап конкурса.",
      info_txt5:
        "Подробно узнать о конкурсе можно на его официальном сайте https://moybusiness.guu.ru, либо у регионального куратора Конкурса по номеру телефона 8-928-050-64-73",
      info_link1: {
        title: "https://moybusiness.guu.ru/.",
        url: "#",
      },
      info_link2: "#",
    },
    {
      id: 4,
      img: news_img_1,
      title: "«Мой добрый бизнес»",
      link: "#",
      desc: "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области […]",
      date: "2023 24.10",
      info_txt1:
        "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области социального предпринимательства и СОНКО «Мой добрый бизнес».",
      info_txt2:
        "Конкурс направлен на популяризацию и развитие социального предпринимательства и СОНКО.",
      info_txt3:
        "Подать заявку могут субъекты малого и среднего предпринимательства, имеющие статус социального предприятия, а также не имеющие статус, но осуществляющие деятельность в сфере социального предпринимательства, а также социально-ориентированные некоммерческие организации.Заявки подаются через официальный сайт конкурса:",
      info_txt4:
        "Победители регионального этапа получат памятные призы и выход на межрегиональный и федеральный этап конкурса.",
      info_txt5:
        "Подробно узнать о конкурсе можно на его официальном сайте https://moybusiness.guu.ru, либо у регионального куратора Конкурса по номеру телефона 8-928-050-64-73",
      info_link1: {
        title: "https://moybusiness.guu.ru/.",
        url: "#",
      },
      info_link2: "#",
    },
    {
      id: 5,
      img: news_img_1,
      title: "«Мой добрый бизнес»",
      link: "#",
      desc: "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области […]",
      date: "2023 24.10",
      info_txt1:
        "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области социального предпринимательства и СОНКО «Мой добрый бизнес».",
      info_txt2:
        "Конкурс направлен на популяризацию и развитие социального предпринимательства и СОНКО.",
      info_txt3:
        "Подать заявку могут субъекты малого и среднего предпринимательства, имеющие статус социального предприятия, а также не имеющие статус, но осуществляющие деятельность в сфере социального предпринимательства, а также социально-ориентированные некоммерческие организации.Заявки подаются через официальный сайт конкурса:",
      info_txt4:
        "Победители регионального этапа получат памятные призы и выход на межрегиональный и федеральный этап конкурса.",
      info_txt5:
        "Подробно узнать о конкурсе можно на его официальном сайте https://moybusiness.guu.ru, либо у регионального куратора Конкурса по номеру телефона 8-928-050-64-73",
      info_link1: {
        title: "https://moybusiness.guu.ru/.",
        url: "#",
      },
      info_link2: "#",
    },
    {
      id: 6,
      img: news_img_1,
      title: "«Мой добрый бизнес»",
      link: "#",
      desc: "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области […]",
      date: "2023 24.10",
      info_txt1:
        "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области социального предпринимательства и СОНКО «Мой добрый бизнес».",
      info_txt2:
        "Конкурс направлен на популяризацию и развитие социального предпринимательства и СОНКО.",
      info_txt3:
        "Подать заявку могут субъекты малого и среднего предпринимательства, имеющие статус социального предприятия, а также не имеющие статус, но осуществляющие деятельность в сфере социального предпринимательства, а также социально-ориентированные некоммерческие организации.Заявки подаются через официальный сайт конкурса:",
      info_txt4:
        "Победители регионального этапа получат памятные призы и выход на межрегиональный и федеральный этап конкурса.",
      info_txt5:
        "Подробно узнать о конкурсе можно на его официальном сайте https://moybusiness.guu.ru, либо у регионального куратора Конкурса по номеру телефона 8-928-050-64-73",
      info_link1: {
        title: "https://moybusiness.guu.ru/.",
        url: "#",
      },
      info_link2: "#",
    },
    {
      id: 7,
      img: news_img_1,
      title: "«Мой добрый бизнес»",
      link: "#",
      desc: "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области […]",
      date: "2023 24.10",
      info_txt1:
        "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области социального предпринимательства и СОНКО «Мой добрый бизнес».",
      info_txt2:
        "Конкурс направлен на популяризацию и развитие социального предпринимательства и СОНКО.",
      info_txt3:
        "Подать заявку могут субъекты малого и среднего предпринимательства, имеющие статус социального предприятия, а также не имеющие статус, но осуществляющие деятельность в сфере социального предпринимательства, а также социально-ориентированные некоммерческие организации.Заявки подаются через официальный сайт конкурса:",
      info_txt4:
        "Победители регионального этапа получат памятные призы и выход на межрегиональный и федеральный этап конкурса.",
      info_txt5:
        "Подробно узнать о конкурсе можно на его официальном сайте https://moybusiness.guu.ru, либо у регионального куратора Конкурса по номеру телефона 8-928-050-64-73",
      info_link1: {
        title: "https://moybusiness.guu.ru/.",
        url: "#",
      },
      info_link2: "#",
    },
    {
      id: 8,
      img: news_img_1,
      title: "«Мой добрый бизнес»",
      link: "#",
      desc: "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области […]",
      date: "2023 24.10",
      info_txt1:
        "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области социального предпринимательства и СОНКО «Мой добрый бизнес».",
      info_txt2:
        "Конкурс направлен на популяризацию и развитие социального предпринимательства и СОНКО.",
      info_txt3:
        "Подать заявку могут субъекты малого и среднего предпринимательства, имеющие статус социального предприятия, а также не имеющие статус, но осуществляющие деятельность в сфере социального предпринимательства, а также социально-ориентированные некоммерческие организации.Заявки подаются через официальный сайт конкурса:",
      info_txt4:
        "Победители регионального этапа получат памятные призы и выход на межрегиональный и федеральный этап конкурса.",
      info_txt5:
        "Подробно узнать о конкурсе можно на его официальном сайте https://moybusiness.guu.ru, либо у регионального куратора Конкурса по номеру телефона 8-928-050-64-73",
      info_link1: {
        title: "https://moybusiness.guu.ru/.",
        url: "#",
      },
      info_link2: "#",
    },
    {
      id: 9,
      img: news_img_1,
      title: "«Мой добрый бизнес»",
      link: "#",
      desc: "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области […]",
      date: "2023 24.10",
      info_txt1:
        "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области социального предпринимательства и СОНКО «Мой добрый бизнес».",
      info_txt2:
        "Конкурс направлен на популяризацию и развитие социального предпринимательства и СОНКО.",
      info_txt3:
        "Подать заявку могут субъекты малого и среднего предпринимательства, имеющие статус социального предприятия, а также не имеющие статус, но осуществляющие деятельность в сфере социального предпринимательства, а также социально-ориентированные некоммерческие организации.Заявки подаются через официальный сайт конкурса:",
      info_txt4:
        "Победители регионального этапа получат памятные призы и выход на межрегиональный и федеральный этап конкурса.",
      info_txt5:
        "Подробно узнать о конкурсе можно на его официальном сайте https://moybusiness.guu.ru, либо у регионального куратора Конкурса по номеру телефона 8-928-050-64-73",
      info_link1: {
        title: "https://moybusiness.guu.ru/.",
        url: "#",
      },
      info_link2: "#",
    },
    {
      id: 10,
      img: news_img_1,
      title: "«Мой добрый бизнес»",
      link: "#",
      desc: "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области […]",
      date: "2023 24.10",
      info_txt1:
        "🔔Центр «Мой бизнес» до 1 ноября продлил прием заявок на региональный этап Всероссийского конкурса проектов в области социального предпринимательства и СОНКО «Мой добрый бизнес».",
      info_txt2:
        "Конкурс направлен на популяризацию и развитие социального предпринимательства и СОНКО.",
      info_txt3:
        "Подать заявку могут субъекты малого и среднего предпринимательства, имеющие статус социального предприятия, а также не имеющие статус, но осуществляющие деятельность в сфере социального предпринимательства, а также социально-ориентированные некоммерческие организации.Заявки подаются через официальный сайт конкурса:",
      info_txt4:
        "Победители регионального этапа получат памятные призы и выход на межрегиональный и федеральный этап конкурса.",
      info_txt5:
        "Подробно узнать о конкурсе можно на его официальном сайте https://moybusiness.guu.ru, либо у регионального куратора Конкурса по номеру телефона 8-928-050-64-73",
      info_link1: {
        title: "https://moybusiness.guu.ru/.",
        url: "#",
      },
      info_link2: "#",
    },
  ],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducer: {},
});

export const {} = newsSlice.actions;
export default newsSlice.reducer;
