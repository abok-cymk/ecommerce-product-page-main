import React from "react";

const Thumbnails = ({ thumbnail }) => {
  return <img src={thumbnail} alt="Product Thumbnail" className="rounded-lg object-cover w-20"/>;
};

export default Thumbnails;
