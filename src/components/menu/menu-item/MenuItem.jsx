import { Link } from "react-router-dom";

const MenuItem = ({ item, setMenuOpen }) => {
  return (
    <div className="menu-content-item">
      <h2>
        <Link to={item && item.link}>{item && item.title}</Link>
      </h2>
      {item.list.length !== 0 && (
        <ul>
          {item.list.map(({ id, title, link }) => {
            return (
              <li key={id}>
                <Link
                  to={link}
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MenuItem;
