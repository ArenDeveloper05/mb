import PageBanner from "../components/common/page-banner/PageBanner";
import News from "../components/news/News";
import Layout from "../layout/Layout";

const NewsPage = () => {
  return (
    <Layout>
      <PageBanner
        params={{
          list: [{ id: 1, title: "Новости" }],
          title: "Новости",
        }}
      />
      <News />
    </Layout>
  );
};

export default NewsPage;
