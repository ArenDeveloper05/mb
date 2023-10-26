import React, { useEffect, useState } from "react";
import { getNews } from "../../../api/api";
import AdminTable from "../admin-table/AdminTable";
const NewsAdmin = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await getNews(10);
        setNewsData(data.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getData();
  }, []);
  return (
    <>
      <AdminTable data={newsData} />
    </>
  );
};

export default NewsAdmin;
