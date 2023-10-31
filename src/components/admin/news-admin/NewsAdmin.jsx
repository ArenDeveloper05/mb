import { getNews } from "../../../api/api";
import { NewsAdminAdd } from "./news-admin-add/NewsAdminAdd";
import AdminTable from "../admin-table/AdminTable";
import useFetchData from "../../../hooks/useFetchData";

const NewsAdmin = () => {
  const { result, loading, error } = useFetchData(getNews, 10);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {!loading && !error && result && <AdminTable data={result.data} />}
      <NewsAdminAdd />
    </>
  );
};

export default NewsAdmin;
