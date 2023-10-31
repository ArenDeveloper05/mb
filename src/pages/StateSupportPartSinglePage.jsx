import StateSupportPartSinglePart from "../components/state-support-part/state-support-part-single-part/StateSupportPartSinglePart";
import Layout from "../layout/Layout";
import NewsLayout from "../layout/NewsLayout";

const StateSupportPartSinglePage = () => {
  return (
    <Layout>
      <NewsLayout isHidden={true}>
        <StateSupportPartSinglePart />
      </NewsLayout>
    </Layout>
  );
};

export default StateSupportPartSinglePage;
