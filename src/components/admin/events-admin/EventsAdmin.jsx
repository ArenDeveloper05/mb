import { useEffect, useState } from "react";
import { getEvents, getNews } from "../../../api/api";
import AdminTable from "../admin-table/AdminTable";

const EventsAdmin = () => {
  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await getEvents(10);
        setEventsData(data.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getData();
  }, []);
  return (
    <div>
      <AdminTable data={eventsData} />
    </div>
  );
};

export default EventsAdmin;
