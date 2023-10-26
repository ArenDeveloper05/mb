import "./List.scss";
import ListItem from "./list-item/ListItem";

const List = ({ list }) => {
  return (
    <ul className="list">
      {list &&
        list.map((item) => {
          return <ListItem key={item.id} item={item} />;
        })}
    </ul>
  );
};

export default List;
