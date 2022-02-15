import { useEffect } from 'react';
import { useCartContext } from '../context/cart_context';

const SuccessCheckout = () => {
  const { clearCart } = useCartContext();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line
  }, []);

  return <div>Your payment is successful</div>;
};

export default SuccessCheckout;
