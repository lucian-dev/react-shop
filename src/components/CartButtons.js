import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';
import { useWishlistContext } from '../context/wishlist_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';

const CartButtons = () => {
  const { loginWithRedirect, logout, myUser } = useUserContext();
  const { wishlist } = useWishlistContext();
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/wishlist" className="wishlist-btn">
        {wishlist.length > 0 ? <AiFillHeart /> : <AiOutlineHeart />}
      </Link>
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        <span className="cart-container">
          <FaShoppingCart />
          {total_items > 0 && <span className="cart-value">{total_items}</span>}
        </span>
      </Link>
      {myUser ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            clearCart();
            logout({ returnTo: window.location.origin });
          }}
        >
          <FaUserMinus />
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={() => loginWithRedirect()}>
          <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .wishlist-btn {
    justify-self: flex-end;
    width: 25px;
    height: 25px;
    color: black;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 15px;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;

export default CartButtons;
