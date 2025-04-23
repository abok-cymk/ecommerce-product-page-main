import React from "react";

const Thumbnails = ({ thumbnail }) => {
  return (
    <img
      src={thumbnail}
      alt="Product Thumbnail"
      className="rounded-lg object-cover w-20 block hover:outline-2 hover:outline-offset-2 hover:outline-custom-orange cursor-pointer"
    />
  );
};

export default Thumbnails;
