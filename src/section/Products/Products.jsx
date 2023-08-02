import { carts } from "./../../assets/text";
import ProductItem from "./ProductItem/ProductItem";

import "./Products.modules.scss";

const Products = () => {
  return (
    <div className="container">
      <div className="card__list flex">

        {carts.map((car) => (

          <ProductItem
            key={car.id}
            title={car.title}
            price={car.price}
            src={car.url}
            id={car.id}
          />

        ))}
        
      </div>
    </div>
  );
};

export default Products;
