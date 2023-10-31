import StateSupportPart from "../components/state-support-part/StateSupportPart";
import Layout from "../layout/Layout";
import NewsLayout from "../layout/NewsLayout";

const StateSupportPage = () => {
  return (
    <Layout>
      <NewsLayout isHidden={false}>
        <StateSupportPart />
      </NewsLayout>
    </Layout>
  );
};

export default StateSupportPage;
