import React from "react";
import axios from "axios";

import Search from "../../components/Search";
import Filter from "../../components/Filter";
import Pagination from "../../components/Pagination";

const ListBusiness = () => {
  return (
    <section className="w-screen h-full flex flex-col justify-center items-center">
      <div className="absolute top-0 flex justify-center items-center">
        <Pagination />
        <Search />
        <Filter />
      </div>
      <div className="absolute left-10">
        <p className="font-semibold text-xl">List Business</p>
      </div>
    </section>
  );
};

export default ListBusiness;
