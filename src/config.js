import { BsShield } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BiMicrophone } from "react-icons/bi";
import { LiaInfoSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";

// Services icons
import service1 from "./assets/images/services/service1.jpg";
import service4 from "./assets/images/services/service4.png";
import service6 from "./assets/images/services/service6.svg";
import service7 from "./assets/images/services/service7.png";
import service8 from "./assets/images/services/service8.svg";
import service9 from "./assets/images/services/service9.svg";
import service10 from "./assets/images/services/service10.svg";
import service11 from "./assets/images/services/service11.svg";
import service12 from "./assets/images/services/service12.svg";
import service13 from "./assets/images/services/service13.svg";
import service14 from "./assets/images/services/service14.svg";
import service15 from "./assets/images/services/service15.svg";
import service16 from "./assets/images/services/service16.svg";
import service17 from "./assets/images/services/service17.svg";
import service18 from "./assets/images/services/service18.svg";
import service19 from "./assets/images/services/service19.svg";
import service20 from "./assets/images/services/service20.svg";

// Home services icons
import serviceImg1 from "./assets/images/reg_support.svg";
import serviceImg2 from "./assets/images/antikrizis.svg";
import serviceImg3 from "./assets/images/innovation-center.svg";
import serviceImg4 from "./assets/images/finansovaya-podderzhka.svg";
import serviceImg5 from "./assets/images/centr-podderzhki-predprinimatelstva.svg";
import serviceImg6 from "./assets/images/mfc.svg";
import serviceImg7 from "./assets/images/imushhestvennaya-podderzhka.svg";
import serviceImg8 from "./assets/images/centr-narodno-hudozhestvennyh-promyslov.svg";
import serviceImg9 from "./assets/images/portal-biznes-navigatora.svg";
import serviceImg10 from "./assets/images/regioonalnyj-centr-inzhiniringa.svg";
import serviceImg11 from "./assets/images/centr-innovacionnogo-tvorchestva.svg";
import serviceImg12 from "./assets/images/centr-koordinacii-eksporta.svg";
import serviceImg13 from "./assets/images/provedenie-obrazovatelnyh-meropriyatij.svg";
import serviceImg14 from "./assets/images/note.png";

// news images
import newsImg1 from "./assets/images/newsImg1.jpg";
import newsImg2 from "./assets/images/newsImg2.jpg";
import newsImg3 from "./assets/images/newsImg3.png";

import Regional from "./components/services/regional/Regional";
import { ROUTER } from "./router/router";
import SupportMeasures from "./components/services/support-measures/SupportMeasures";
import PropertySupport from "./components/services/property-support/PropertySupport";

export const menuConfig = [
  {
    id: 1,
    title: "Меры господдержки",
    list: [
      { id: 1, title: "Цифровая платформа МСП.РФ", link: "" },
      {
        id: 2,
        title: "Расширение доступа к соцконтрактам",
        link: "",
      },
      {
        id: 3,
        title: "Реестр предпринимателей РД",
        link: "",
      },
      {
        id: 4,
        title: "Региональные меры господдержки",
        link: "",
      },
      {
        id: 5,
        title: "Антикризис",
        link: "",
      },
      {
        id: 6,
        title: "Центр инноваций социальной сферы",
        link: "",
      },
      {
        id: 7,
        title: "Оказание консультаций",
        link: "",
      },
      {
        id: 8,
        title: "Проведение образовательных мероприятий",
        link: "",
      },
      {
        id: 9,
        title: "Финансовая поддержка",
        link: "",
      },
      {
        id: 10,
        title: "Региональный центр инжиниринга",
        link: "",
      },
      {
        id: 11,
        title: "Имущественная поддержка",
        link: "",
      },
      {
        id: 12,
        title: "Портал бизнес-навигатора",
        link: "",
      },
      {
        id: 13,
        title: "Центр поддержки предпринимательства",
        link: "",
      },
      {
        id: 14,
        title: "Центр народно-художественных промыслов",
        link: "",
      },
      {
        id: 15,
        title: "Центр молодежного инновационного творчества",
        link: "",
      },
      {
        id: 16,
        title: "МФЦ для Бизнеса",
        link: "",
      },
    ],
  },
  {
    id: 2,
    title: "О центре",
    list: [
      {
        id: 1,
        title: "СМИ о Центре",
        link: "",
      },
    ],
  },
  {
    id: 3,
    title: "Мероприятия",
    list: [],
  },
  {
    id: 4,
    title: "Новости",
    list: [],
  },
  {
    id: 5,
    title: "Контакты",
    list: [],
  },
];

export const navConfig = [
  {
    id: 1,
    icon: BsShield,
    title: "Меры господдержки",
    url: ROUTER.STATE_SUPPORT_PAGE_ROUTE,
  },
  { id: 2, icon: HiOutlineSpeakerphone, title: "Мероприятия", url: "#" },
  { id: 3, icon: BiMicrophone, title: "Новости", url: ROUTER.NEWS_PAGE_ROUTE },
  { id: 4, icon: LiaInfoSolid, title: "О нас", url: ROUTER.ABOUT_PAGE_ROUTE },
  {
    id: 5,
    icon: IoLocationOutline,
    title: "Контакты",
    url: ROUTER.CONTACTS_PAGE_ROUTE,
  },
];

export const footerConfig = {
  aboutCenterConfig: [
    {
      id: 1,
      title: "О центре",
      url: "#",
    },
    {
      id: 2,
      title: "Меры господдержки",
      url: "#",
    },
    {
      id: 3,
      title: "Мероприятия",
      url: "#",
    },
    {
      id: 4,
      title: "СМИ о Центре",
      url: "#",
    },
    {
      id: 5,
      title: "Контакты",
      url: "#",
    },
  ],

  stateSupportConfig: [
    { id: 1, title: "Финансовая поддержка", url: "#" },
    { id: 2, title: "Имущественная поддержка", url: "#" },
    { id: 3, title: "Проведение образовательных мероприятий", url: "#" },
    {
      id: 4,
      title:
        "Центр координации поддержки экспортной деятельности субъектов МСП",
      url: "#",
    },
    { id: 5, title: "Центр молодежного инновационного творчества", url: "#" },
  ],

  contactConfig: [
    {
      id: 1,
      icon: HiOutlineLocationMarker,
      title: "г. Махачкала, ул.Гагарина д. 120",
      url: "#",
    },
    { id: 2, icon: BiPhoneCall, title: "8 (800) 700 99 00", url: "#" },
    { id: 3, icon: AiOutlineMail, title: "info@mb05.ru", url: "#" },
    {
      id: 4,
      icon: BiCalendar,
      title: "Пн-Пт: 09.00-18.00 без перерывов Сб-Вс: выходной",
      url: "#",
    },
  ],
};

export const faqConfig = [
  {
    id: 1,
    title: "Хочу открыть свой бизнес. Как это сделать?",
    description: `<p style="margin-left:25px;">Возможность открыть бизнес легко и без ошибок.</p>
    <p style="margin-left:25px;"><i>Консультации:</i></p>
    <ul>
        <li><i>По вопросам выбора формы собственности и системы налогообложения</i></li>
        <li>По вопросам подготовки документов на регистрацию предпринимательской деятельности</li>
        <li>Помощь в расчетах финансово-экономического обоснования и бизнес-плана</li>
        <li>Экспертиза бизнес-проекта</li>
    </ul>
    <p style="margin-left:25px;"><i>Обучение:</i></p>
    <ul>
        <li>Семинары и тренинги по актуальным вопросам предпринимательской деятельности</li>
    </ul>
    <p><br>&nbsp;</p>`,
    open: false,
    close: false,
  },
  {
    id: 2,
    title: "Хочу развивать свой бизнес. Как это сделать?",
    description: `<p><i>Консультации:</i></p>
    <ul>
        <li>По вопросам финансового планирования</li>
        <li>По вопросам разработки маркетинговой стратегии</li>
        <li>По вопросам оптимизации налогообложения</li>
        <li>Прочим вопросам, связанным с ведением предпринимательской деятельности</li>
    </ul>
    <p><i>Образовательная поддержка</i></p>
    <p><i>Финансовая поддержка:</i></p>
    <ul>
        <li>Предоставление микрозаймов в сумме до 5 млн. руб.</li>
        <li>Поручительств, гарантий</li>
        <li>Услуги МСП банка</li>
    </ul>
    <p><i>Имущественная поддержка:</i></p>
    <ul>
        <li>Предоставление оборудованных офисных помещений по программе бизнес-инкубирования</li>
        <li>Предоставление оборудованных рабочих мест в коворкинге, переговорных комнат и конференц-зала.</li>
    </ul>
    <p><br>&nbsp;</p>`,
    open: false,
    close: false,
  },
  {
    id: 3,
    title: "Как продавать на экспорт. Вы можете мне помочь?",
    description: `<p>Вывод предприятий, товаров, услуг на международный рынок</p>
    <p><i>Консультации:</i></p>
    <ul>
        <li><i>по тематике ведения внешнеэкономической деятельности</i></li>
    </ul>
    <p><i>Обучение:</i></p>
    <ul>
        <li><i>по программам организации экспортной деятельности&nbsp;</i></li>
        <li>семинары и тренинги от ведущих специалистов ВЭД</li>
    </ul>
    <p><i>Финансовая поддержка:</i></p>
    <ul>
        <li>бизнес-миссии на условиях софинансирования</li>
        <li>выставки на условиях софинансирования</li>
    </ul>
    <p><i>Экспортная поддержка:</i></p>
    <ul>
        <li>поиск потенциальных партнеров&nbsp; и маркетинговые исследования зарубежных рынков</li>
        <li>продвижение информации о деятельности компании</li>
        <li>сопровождение внешнеэкономических сделок</li>
    </ul>
    <p><br>&nbsp;</p>`,
    open: false,
    close: false,
  },
  {
    id: 4,
    title: "Как я могу воспользоваться услугами Центра?",
    description: `<p style="margin-left:25px;">Лишь единожды вы оставляете заявку на сайте или посещаете офис Центра «Мой Бизнес»</p>
    <ol>
        <li>В течении 24 часов ваш вопрос будет проработан. Опытные специалисты дадут рекомендации и предложат инструменты гос. поддержки</li>
        <li>Получаете консультации, обучение, финансирование, имущественную поддержку, сопровождение проекта, инвестирование.</li>
    </ol>
    <p>&nbsp;</p>
    <p><br>&nbsp;</p>`,
    open: false,
    close: false,
  },
];

export const servicesConfig = [
  {
    id: 1,
    title: "Цифровая платформа МСП.РФ",
    icon: service1,
    component: <Regional />,
  },
  {
    id: 2,
    title:
      "Меры поддержки субъектам промышленности, предусмотренных в 2023 году",
    icon: "",
    component: <SupportMeasures />,
  },
  {
    id: 3,
    title: "Расширение доступа к соцконтрактам",
    icon: "",
    component: <Regional />,
  },
  {
    id: 4,
    title: "Антикризисные меры поддержки субъектов МСП в нерабочие дни",
    icon: service4,
    component: <Regional />,
  },
  {
    id: 5,
    title: "Реестр предпринимателей РД",
    icon: "",
    component: <Regional />,
  },
  {
    id: 6,
    title: "Региональные меры господдержки",
    icon: service6,
    component: <Regional />,
  },
  {
    id: 7,
    title: "Меры поддержки самозанятых",
    icon: service7,
    component: <Regional />,
  },
  {
    id: 8,
    title: "Имущественная поддержка",
    icon: service8,
    component: <PropertySupport />,
  },
  {
    id: 9,
    title: "Реализация специальных программ субъектов МСП",
    icon: service9,
    component: <Regional />,
  },
  {
    id: 10,
    title: "Центр народно-художественных промыслов",
    icon: service10,
    component: <Regional />,
  },
  {
    id: 11,
    title: "Центр инноваций социальной сферы",
    icon: service11,
    component: <Regional />,
  },
  {
    id: 12,
    title: "Антикризис",
    icon: service12,
    component: <Regional />,
  },
  {
    id: 13,
    title: "Финансовая поддержка",
    icon: service13,
    component: <Regional />,
  },
  {
    id: 14,
    title: "Центр поддержки предпринимательства",
    icon: service14,
    component: <Regional />,
  },
  {
    id: 15,
    title: "МФЦ для Бизнеса",
    icon: service15,
    component: <Regional />,
  },
  {
    id: 16,
    title: "Центр молодежного инновационного творчества",
    icon: service16,
    component: <Regional />,
  },
  {
    id: 17,
    title: "Центр координации поддержки экспортной деятельности субъектов МСП",
    icon: service17,
    component: <Regional />,
  },
  {
    id: 18,
    title: "Проведение образовательных мероприятий",
    icon: service18,
    component: <Regional />,
  },
  {
    id: 19,
    title: "Портал бизнес-навигатора",
    icon: service19,
    component: <Regional />,
  },
  {
    id: 20,
    title: "Региональный центр инжиниринга",
    icon: service20,
    component: <Regional />,
  },
];

// ===================== Home Services Section ===============================

export const homeServicesConfig = [
  {
    id: 6,
    title: "Региональные меры господдержки",
    img: serviceImg1,
  },
  {
    id: 12,
    title: "Антикризис",
    img: serviceImg2,
  },
  {
    id: 11,
    title: "Центр инноваций социальной сферы",
    img: serviceImg3,
  },
  {
    id: 13,
    title: "Финансовая поддержка",
    img: serviceImg4,
  },
  {
    id: 14,
    title: "Центр поддержки предпринимательства",
    img: serviceImg5,
  },
  {
    id: 15,
    title: "МФЦ для бизнеса",
    img: serviceImg6,
  },
  {
    id: 8,
    title: "Имущественная поддержка",
    img: serviceImg7,
  },
  {
    id: 10,
    title: "Центр народно-художественных промыслов",
    img: serviceImg8,
  },
  {
    id: 19,
    title: "Портал бизнес-навигатора",
    img: serviceImg9,
  },
  {
    id: 20,
    title: "Региональный центр инжиниринга",
    img: serviceImg10,
  },
  {
    id: 16,
    title: "Центр молодежного инновационного творчества",
    img: serviceImg11,
  },
  {
    id: 17,
    title: "Центр координации поддержки экспортной деятельности субъектов МСП",
    img: serviceImg12,
  },
  {
    id: 18,
    title: "Проведение образовательных мероприятий",
    img: serviceImg13,
  },
  {
    id: "",
    title: "Расширение доступа к соцконтрактам",
    img: serviceImg14,
  },
];

// ===================== Home News Section ===============================

export const newsConfig = [
  {
    id: 1,
    img: newsImg1,
    date: "24 октября 2023",
    category: "Новости",
    title: "«Мой добрый бизнес»",
  },
  {
    id: 2,
    img: newsImg2,
    date: "24 октября 2023",
    category: "Новости",
    title: "«Гранд Текстиль 2023»",
  },
  {
    id: 3,
    img: newsImg3,
    date: "23 октября 2023",
    category: "Новости",
    title: "Приём заявок на Конкурс «История успеха самозанятых 2023 г.",
  },
];
