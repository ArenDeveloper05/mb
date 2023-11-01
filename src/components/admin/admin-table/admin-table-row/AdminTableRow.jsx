import { useState } from "react";

const AdminTableRow = ({ item, deleteNewsFunction, editNewsFunction }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [rowData, setRowData] = useState({
    title: item.title,
    description: item.description,
    image: item.image,
  });

  const handleChange = (e) => {
    setRowData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <tr>
      <td>{item.id}</td>
      <td>
        {isEdit ? (
          <textarea
            type="text"
            name="description"
            value={rowData.description}
            onChange={handleChange}
          />
        ) : (
          item.description
        )}
      </td>
      <td>
        {isEdit ? (
          <textarea
            type="text"
            name="image"
            value={rowData.image}
            onChange={handleChange}
          />
        ) : (
          <img src={item.image} alt="news-pic" style={{ width: "100px" }} />
        )}
      </td>
      <td>
        {isEdit ? (
          <textarea
            type="text"
            name="title"
            value={rowData.title}
            onChange={handleChange}
          />
        ) : (
          item.title
        )}
      </td>
      <td>{item.created_at}</td>
      <td>{item.updated_at}</td>
      <td>
        <button
          className="del-btn"
          onClick={() => {
            deleteNewsFunction(item.id);
          }}
        >
          Delete
        </button>
      </td>
      <td>
        <button
          className="edit-btn"
          onClick={() => {
            if (isEdit) {
              const obj = {
                ...item,
                ...rowData,
              };
              delete obj.id;
              editNewsFunction(item.id, obj);
            }
            setIsEdit((prev) => !prev);
          }}
        >
          {isEdit ? "Save" : "Edit"}
        </button>
      </td>
    </tr>
  );
};

export default AdminTableRow;
