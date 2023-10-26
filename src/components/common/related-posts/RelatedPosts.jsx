import "./RelatedPosts.scss";
import List from "./list/List";

const RelatedPosts = ({ title, list }) => {
  return (
    <div className="related-posts">
      <h1 className="related-posts-title">{title}</h1>

      <List list={list} />
    </div>
  );
};

export default RelatedPosts;
