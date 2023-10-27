import { getEvents } from "../../../api/api";
import AdminTable from "../admin-table/AdminTable";
import useFetchData from "../../../hooks/useFetchData";

const EventsAdmin = () => {
  const { result, loading, error } = useFetchData(getEvents, 10);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {result && !loading && !error && <AdminTable data={result.data} />}
    </>
  );
};

export default EventsAdmin;
