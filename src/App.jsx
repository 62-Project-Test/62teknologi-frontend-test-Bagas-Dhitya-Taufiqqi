import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import DetailBusiness from "./pages/detail_business";
import ListBusiness from "./pages/list_business";

const App = () => {
  axios.defaults.baseURL =
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/";

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ListBusiness />} path="/" />
        <Route element={<DetailBusiness />} path="/detail/:name" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
