import EventsAdmin from "./events-admin/EventsAdmin";
import NewsAdmin from "./news-admin/NewsAdmin";

export const adminConfig = [
  {
    id: 1,
    title: "News",
    component: <NewsAdmin />,
  },
  {
    id: 2,
    title: "Events",
    component: <EventsAdmin />,
  },
];
