import React from "react";

const Card = ({ image, name, phone, address, city, zip, rating }) => {
  return (
    <div className="w-96 h-full rounded-md shadow-md">
      <img src={image} className="w-full h-96 rounded-md" />
      <div className="p-5 flex flex-col gap-y-5">
        <p className="font-semibold">
          {address},{city},{zip}
        </p>
        <div className="gap-y-2 flex flex-col">
          <p>Name : {name}</p>
          <p>Rating : {rating}</p>
          <p>Phone : {phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
