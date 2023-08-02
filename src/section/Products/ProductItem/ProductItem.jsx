import { Link } from "react-router-dom";
import "./ProductItem.modules.scss";

const ProductItem = ({ title, price, src, id }) => {
  return (
    <Link to={`/products/${id}`} className="card">
      <h2 className="card__title">{title}</h2>
      <span className="card__price">{price}</span>
      <img src={src} alt="" className="cart__img" />
    </Link>
  );
};

export default ProductItem;
