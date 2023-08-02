import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { carts } from "../../../assets/text";
import "./Product.modules.scss";

const Product = () => {
  const { id } = useParams();

  const [productId, setProductId] = useState();
  const [productTitle, setProductTitle] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productUrl, setProductUrl] = useState();
  const [productArtikl, setProductArtikl] = useState();
  const [productDesc, setProductDesc] = useState();

  useEffect(() => {
    if (!id) return;

    const dataProductId = carts[id - 1].id;
    const dataProductTitle = carts[id - 1].title;
    const dataPrice = carts[id - 1].price;
    const dataUrl = carts[id - 1].url;
    const dataArtikl = carts[id - 1].artikle;
    const dataDesc = carts[id - 1].desc;

    setProductId(dataProductId);
    setProductTitle(dataProductTitle);
    setProductPrice(dataPrice);
    setProductUrl(dataUrl);
    setProductArtikl(dataArtikl);
    setProductDesc(dataDesc);
  }, [id]);

  return (
    <div className="product-item">
      <div className="container">
        <div className="product__details">
          <div className="product__descripson">
            <h2>{productTitle}</h2>
            <span>{productPrice}</span>
            <span>{productArtikl}</span>
            <span>{productId}</span>
            <span>{productDesc}</span>
          </div>
          <div className="product__image">
            <img src={`${productUrl}`} alt={productTitle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
