const AdminTable = ({ data }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>image</th>
          <th>Title</th>
          <th>Created</th>
          <th>Updated</th>
        </tr>
        {data &&
          data.map(
            ({ id, title, image, description, created_at, updated_at }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{description}</td>
                  <td>
                    ￼
                    <img
                      src={image}
                      alt="news-pic"
                      style={{ width: "100px" }}
                    />
                  </td>
                  <td>{title}</td>
                  <td>{created_at}</td>
                  <td>{id}</td>
                </tr>
              );
            }
          )}
      </thead>
    </table>
  );
};

export default AdminTable;
