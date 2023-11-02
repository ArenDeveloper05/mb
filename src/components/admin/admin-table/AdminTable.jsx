import { deleteNews, editNews, getNews } from "../../../api/api";
import { useDispatch } from "react-redux";
import { changeNewsDataAdmin } from "../../../redux/slices/adminSlice";

import "./AdminTable.scss";
import AdminTableRow from "./admin-table-row/AdminTableRow";

const AdminTable = ({ data }) => {
  const dispatch = useDispatch();

  const deleteNewsFunction = async (id) => {
    try {
      await deleteNews(id);
      const newsData = await getNews(10);
      dispatch(changeNewsDataAdmin(newsData.data.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const editNewsFunction = async (id, data) => {
    try {
      await editNews(id, data);
      const newsData = await getNews(10);
      dispatch(changeNewsDataAdmin(newsData.data.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Image</th>
          <th>Title</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        {data &&
          data.map((item) => {
            return (
              <AdminTableRow
                key={item.id}
                deleteNewsFunction={deleteNewsFunction}
                editNewsFunction={editNewsFunction}
                item={item}
              />
            );
          })}
      </thead>
    </table>
  );
};

export default AdminTable;
