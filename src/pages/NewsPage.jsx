import Modes from "../components/home/modes/Modes";
import News from "../components/news/News";
import Layout from "../layout/Layout";

const NewsPage = () => {
  return (
    <Layout>
      <Modes />
      {/* Stex dnum es News componenty */}
      <News />
    </Layout>
  );
};

export default NewsPage;
