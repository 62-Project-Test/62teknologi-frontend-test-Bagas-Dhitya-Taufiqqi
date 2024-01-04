import React from "react";

const Card = ({ image, name, phone, address, city, zip, rating }) => {
  return (
    <div className="p-3 w-96 h-full rounded-md shadow-md">
      <div className="flex flex-col gap-y-5">
        <img src={image} className="w-full h-1/2" />
        <p className="font-semibold">
          {address},{city},{zip}
        </p>
        <p>Name : {name}</p>
        <p>Rating : {rating}</p>
        <p>Phone : {phone}</p>
      </div>
    </div>
  );
};

export default Card;
