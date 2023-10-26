import Modes from "../components/home/modes/Modes";
import News from "../components/news/News";
import Layout from "../layout/Layout";
import NewsLayout from "../layout/NewsLayout";

const NewsPage = () => {
  return (
    <Layout>
      <Modes />

      <News />
    </Layout>
  );
};

export default NewsPage;
