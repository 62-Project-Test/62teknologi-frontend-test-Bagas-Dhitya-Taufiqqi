import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Search from "../../components/Search";
import Filter from "../../components/Filter";
import Pagination from "../../components/Pagination";
import BusinessCard from "../../components/BusinessCard";
import Loading from "../../components/Loading";

const countries = [
  { value: "Singapore", label: "Singapore" },
  { value: "United States", label: "United States" },
  { value: "Australia", label: "Australia" },
  { value: "Canada", label: "Canada" },
  { value: "Germany", label: "Germany" },
  { value: "France", label: "France" },
  { value: "Japan", label: "Japan" },
  { value: "India", label: "India" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Brazil", label: "Brazil" },
  { value: "China", label: "China" },
  { value: "Italy", label: "Italy" },
  { value: "South Korea", label: "South Korea" },
  { value: "Spain", label: "Spain" },
  { value: "Mexico", label: "Mexico" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "Sweden", label: "Sweden" },
  { value: "Switzerland", label: "Switzerland" },
  { value: "Russia", label: "Russia" },
  { value: "Norway", label: "Norway" },
];

const ListBusiness = () => {
  const accessToken = import.meta.env.VITE_YELP_TOKEN;
  const navigate = useNavigate();
  const limit = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [business, setBusiness] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("Singapore");

  const getBusiness = async (input = "", page = 1) => {
    try {
      setLoading(true);

      let term = "";

      if (input.trim() !== "") {
        if (input.includes(",")) {
          const [termInput, locationInput] = input
            .split(",")
            .map((item) => item.trim());
          term = termInput;
          setFilter(locationInput);
        } else {
          term = input.trim();
        }
      }

      const response = await axios.get(
        `search?location=${filter}&term=${term}&sort_by=best_match&limit=${limit}&offset=${
          (page - 1) * limit
        }`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setBusiness(response?.data?.businesses);
      console.log(response?.data?.businesses);
      setTotalPages(Math.ceil(response?.data?.total / limit));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (value) => {
    setFilter(value);
    getBusiness();
  };

  const handleSearch = (input) => {
    getBusiness(input);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getBusiness("", currentPage);
  }, [filter, currentPage]);
  return (
    <section className="w-screen h-full flex flex-col justify-center items-center">
      <div className="absolute gap-x-7 top-0 h-20 w-full bg-white flex justify-center items-center mt-12 z-10 sticky">
        <Search
          onSearch={(input) => handleSearch(input)}
          placeholder={"Search by food or restaurant ..."}
        />
        <Filter
          filter={filter}
          onFilterChange={(value) => handleFilterChange(value)}
          options={countries}
        />
        <div className="ml-20">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <div className="relative my-40">
        <p className="font-semibold text-xl">List Business</p>
        {loading === false && business ? (
          <div className="grid grid-cols-3 gap-5 my-7">
            {business?.map((item, index) => {
              return (
                <BusinessCard
                  key={index}
                  image={item?.image_url}
                  address={item?.location?.address1}
                  city={item?.location?.city}
                  zip={item?.location?.zip_code}
                  name={item?.name}
                  phone={item?.phone}
                  rating={item?.rating}
                  onDetail={() =>
                    navigate(`/detail/${item?.name}`, {
                      state: {
                        id: item?.id,
                      },
                    })
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Loading />
          </div>
        )}
      </div>
    </section>
  );
};

export default ListBusiness;
