import { useContext } from "react";

import {
  CartIconContainer,
  ShoppingIconStyled,
  ItemCount,
} from "./cart-icon.styled.jsx";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styled.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  let { cartItems } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconStyled />
      <ItemCount>{cartItems.length}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
