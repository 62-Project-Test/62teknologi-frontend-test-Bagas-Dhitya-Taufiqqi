import React from "react";

import Search from "../../components/Search";
import Filter from "../../components/Filter";
import Pagination from "../../components/Pagination";

const ListBusiness = () => {
  return (
    <section className="w-screen h-full flex flex-col justify-center items-center">
      <div className="fixed gap-x-7 top-0 flex justify-center items-center">
        <Search />
        <Filter />
        <div className="ml-20">
          <Pagination />
        </div>
      </div>
      <div className="absolute left-10 top-32">
        <p className="font-semibold text-xl">List Business</p>
      </div>
    </section>
  );
};

export default ListBusiness;
