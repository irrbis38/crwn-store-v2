import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "./../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styled.jsx";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "./../../components/cart-dropdown/cart-dropdown.component";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLilnk,
} from "./navigation.styled";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLilnk to="/shop">SHOP</NavLilnk>

          {currentUser ? (
            <NavLilnk as="span" onClick={signOutHandler}>
              {" "}
              SIGN OUT{" "}
            </NavLilnk>
          ) : (
            <NavLilnk to="/auth">SIGN IN</NavLilnk>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
