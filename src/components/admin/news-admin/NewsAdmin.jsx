import { getNews } from "../../../api/api";
import { NewsAdminAdd } from "./news-admin-add/NewsAdminAdd";
import AdminTable from "../admin-table/AdminTable";
import useFetchData from "../../../hooks/useFetchData";
import { changeNewsDataAdmin } from "../../../redux/slices/adminSlice";
import { useSelector } from "react-redux";

const NewsAdmin = () => {
  const { loading, error } = useFetchData(getNews, 10, {
    redux: true,
    action: changeNewsDataAdmin,
  });
  const data = useSelector((store) => store.admin.newsData);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {!loading && !error && data && <AdminTable data={data} />}
      <NewsAdminAdd />
    </>
  );
};

export default NewsAdmin;
