import PageBanner from "../components/common/page-banner/PageBanner";
import EventsPart from "../components/events-part/EventsPart";
import Layout from "../layout/Layout";

const EventsPage = () => {
  return (
    <Layout>
      <PageBanner
        params={{
          list: [{ id: 1, title: "Мероприятия" }],
          title: "Мероприятия",
        }}
      />
      <EventsPart />
    </Layout>
  );
};

export default EventsPage;
