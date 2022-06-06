import { useNavigate } from "react-router-dom";
import "./DirectoryItem.css";

function DirectoryItem({ category }) {
  const { name, img, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <div
      className="directory-item-container"
      style={{ backgroundImage: `url(${img})` }}
      onClick={onNavigateHandler}
    >
      <div className="content">
        <div className="name">{name}</div>
        <div>shop now</div>
      </div>
    </div>
  );
}

export default DirectoryItem;
