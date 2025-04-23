import React, { useState } from 'react';
import CartItems from './CartItems';

const Cart = ({cart}) => {
    const [isToggle, setIsToggle] = useState(false);
  return (
    <button
      className="text-dark-grayish-blue hover:text-dark-blue cursor-pointer"
      onClick={() => setIsToggle(!isToggle)}
    >
      <img src={cart} alt="shopping cart" className='h-4 md:h-full'/>
      {isToggle && (
        <CartItems />
      )}
    </button>
  );
}

export default Cart;
