import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useWishlistContext } from '../context/wishlist_context';

const Favorite = ({ product }) => {
  const { addProductToWishlist, removeProductFromWishlist, wishlist } = useWishlistContext();
  let storedProduct = wishlist.find((prod) => prod.id === product.id);
  const inWishlist = storedProduct ? true : false;

  return (
    <Wrapper>
      <span>Add to favorite: </span>
      {inWishlist ? (
        <button className="favorite" onClick={() => removeProductFromWishlist(product.id)}>
          <AiFillHeart />
        </button>
      ) : (
        <button className="favorite" onClick={() => addProductToWishlist(product)}>
          <AiOutlineHeart />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  .favorite {
    width: 25px;
    height: 25px;
    border: none;
    cursor: pointer;
    background: transparent;
    outline: none;
    margin-left: 10px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export default Favorite;
