import NewsSingle from "../components/news/news-single/NewsSingle";
import Layout from "../layout/Layout";
import NewsLayout from "../layout/NewsLayout";

const NewsSinglePage = () => {
  return (
    <Layout>
      <NewsLayout isHidden={true}>
        <NewsSingle />
      </NewsLayout>
    </Layout>
  );
};

export default NewsSinglePage;
