import "./NewsSingle.scss";
import { useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import { getSingleNews } from "../../../api/api";

const NewsSingle = () => {
  const { id } = useParams();
  const { result, error, loading } = useFetchData(getSingleNews, id);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {result && !loading && !error && (
        <div className="news-single">
          <div className="news-single-images">
            <img src={result.data.image} alt="img" />
          </div>

          <div className="news-single-desc">
            <p className="news-single-desc-date">
              {result.data.created_at}
              Новости
            </p>

            <p className="news-single-desc-txt">{result.data.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsSingle;
