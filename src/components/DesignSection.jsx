import { Link } from "react-router-dom";

function DesignSection({ title, image, link }) {
  return (
    <div className="design-section">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <Link to={link}>
        <button>View More</button>
      </Link>s
    </div>
  );
}

export default DesignSection;
