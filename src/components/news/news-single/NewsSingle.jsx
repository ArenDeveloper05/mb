import "./NewsSingle.scss";
import { useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import { getSingleNews } from "../../../api/api";
import Loading from "../../loading/Loading";
import { useEffect } from "react";

const NewsSingle = () => {
  const { id } = useParams();
  const { result, error, loading } = useFetchData(getSingleNews, id);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      {loading && <Loading />}
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
