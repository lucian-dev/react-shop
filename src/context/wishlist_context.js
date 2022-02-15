import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/wishlist_reducer';
import { getLocalStorage } from '../utils/helpers';
import { ADD_PRODUCT_TO_WISHLIST, REMOVE_PRODUCT_FROM_WISHLIST } from '../actions';

const initialState = {
  wishlist: getLocalStorage('wishlist'),
};

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  const addProductToWishlist = (product) => {
    dispatch({ type: ADD_PRODUCT_TO_WISHLIST, payload: product });
  };

  const removeProductFromWishlist = (id) => {
    dispatch({ type: REMOVE_PRODUCT_FROM_WISHLIST, payload: id });
  };

  return (
    <WishlistContext.Provider value={{ ...state, addProductToWishlist, removeProductFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  return useContext(WishlistContext);
};
