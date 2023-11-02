import PageBanner from "../components/common/page-banner/PageBanner";
import AntikrizisMode from "../components/home/modes/antikrizis-mode/AntikrizisMode";
import Layout from "../layout/Layout";

const AntikrizisModePage = () => {
  return (
    <Layout>
      <PageBanner
        params={{
          list: [{ id: 1, title: "Меры антикризисной поддержки" }],
          title: "Меры антикризисной поддержки",
        }}
      />
      <AntikrizisMode />
    </Layout>
  );
};

export default AntikrizisModePage;
