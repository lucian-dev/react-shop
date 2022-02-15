import { ADD_PRODUCT_TO_WISHLIST, REMOVE_PRODUCT_FROM_WISHLIST } from '../actions';

const wishlist_reducer = (state, action) => {
  if (action.type === ADD_PRODUCT_TO_WISHLIST) {
    return {
      ...state,
      wishlist: [action.payload, ...state.wishlist],
    };
  }
  if (action.type === REMOVE_PRODUCT_FROM_WISHLIST) {
    return {
      ...state,
      wishlist: state.wishlist.filter((product) => product.id !== action.payload),
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default wishlist_reducer;
