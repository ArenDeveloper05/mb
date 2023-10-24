import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
//
import { BsShield } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BiMicrophone } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";

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
  { id: 1, icon: BsShield, title: "Меры господдержки", url: "#" },
  { id: 2, icon: HiOutlineSpeakerphone, title: "Мероприятия", url: "#" },
  { id: 3, icon: BiMicrophone, title: "Новости", url: "#" },
  { id: 4, icon: FcAbout, title: "О нас", url: "#" },
  { id: 5, icon: IoLocationOutline, title: "Контакты", url: "#" },
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
    description: "lorem",
    open: false,
    close: false,
  },
  {
    id: 2,
    title: "Хочу развивать свой бизнес. Как это сделать?",
    description: "lorem",
    open: false,
    close: false,
  },
  {
    id: 3,
    title: "Как продавать на экспорт. Вы можете мне помочь?",
    description: "lorem",
    open: false,
    close: false,
  },
  {
    id: 4,
    title: "Как я могу воспользоваться услугами Центра?",
    description: "lorem",
    open: false,
    close: false,
  },
];
