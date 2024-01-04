import React from "react";
import { useLocation } from "react-router-dom";

import Slideshow from "../../components/Slideshow";

const DetailBusiness = () => {
  return (
    <section className="w-screen h-full flex flex-col justify-center items-center">
      <div className="absolute left-10 top-32">
        <p className="font-semibold text-xl">Detail Business</p>
        <Slideshow />
      </div>
    </section>
  );
};

export default DetailBusiness;
