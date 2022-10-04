import {
  CartItemContainer,
  CartImage,
  ItemDetails,
  ItemName,
} from "./cart-item.styled";

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, title, quantity } = cartItem;

  return (
    <CartItemContainer>
      <CartImage src={imageUrl} alt={`${title}`} />
      <ItemDetails>
        <ItemName>{title}</ItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
