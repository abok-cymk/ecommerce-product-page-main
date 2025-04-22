import React from "react";
import Thumbnails from "./Thumbnails";
import CountButton from "./CountButton";

const thumbnails = [
  { "thumbnail": "/image-product-1-thumbnail.jpg" },
  { "thumbnail": "/image-product-2-thumbnail.jpg" },
  { "thumbnail": "/image-product-3-thumbnail.jpg" },
  { "thumbnail": "/image-product-4-thumbnail.jpg" },
];

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-0 md:mt-10 px-0 md:px-10 py-0 md:py-6 gap-0 md:gap-14">
      <div className="flex flex-col gap-5">
        <img
          src="/image-product-1.jpg"
          alt=""
          className="md:rounded-lg object-cover w-full md:h-2/3"
        />
        <div className="hidden md:flex items-center justify-between">
          {thumbnails.map((thumbnail, thumbnail_idx) => (
            <Thumbnails key={thumbnail_idx} thumbnail={thumbnail.thumbnail} />
          ))}
        </div>
      </div>
      <div className="px-6 md:px-0 py-3 md:py-8">
        <span className="uppercase text-[11px] md:text-xs text-dark-grayish-blue font-700 tracking-wider">
          sneaker company
        </span>
        <h1 className="text-2xl md:text-4xl font-700 pt-2 md:pt-4 tracking-tight">
          Fall Limited Edition Sneakers
        </h1>
        <p className="pt-3 md:pt-6 text-sm font-400 text-dark-grayish-blue leading-6">
          {" "}
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="mt-4">
          <p className="font-700 text-xl">
            $125.00{" "}
            <span className="ml-3 text-xs bg-black text-white rounded py-0.5 px-2">
              50%
            </span>
          </p>
          <span className="line-through text-xs font-700 text-dark-grayish-blue">
            $250.00
          </span>
        </div>
        <div className="md:flex md:gap-3 items-center w-full mt-3 md:mt-6">
          <CountButton />
          <button className="shadow-lg cursor-pointer mt-4 md:mt-0 w-full rounded-lg flex items-center justify-center gap-2 text-sm font-700 text-dark-blue px-6 py-2 bg-custom-orange">
            <img src="/icon-cart.svg" alt="shopping cart" /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
