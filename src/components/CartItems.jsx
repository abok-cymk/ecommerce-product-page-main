import React from 'react';

const CartItems = () => {
  return (
    <div className="absolute shadow-lg rounded -translate-1/2 top-[140px] bg-white w-full md:w-[250px] h-48">
      <h4 className="pb-4 border-b border-b-grayish-blue text-sm pt-2 pl-3 font-700 text-left">
        Cart
      </h4>
      <div className="flex justify-center items-center pt-10">
        <p className="text-xs text-dark-grayish-blue">Your cart is empty</p>
      </div>
    </div>
  );
}

export default CartItems;
