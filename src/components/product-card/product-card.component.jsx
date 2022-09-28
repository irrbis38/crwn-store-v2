import "./product-card.styles.scss";

import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { title, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={title} />
      <div className="footer">
        <span className="name">{title}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
};

export default ProductCard;
