import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DetailBusiness from "./pages/detail_business";
import ListBusiness from "./pages/list_business";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ListBusiness />} path="/" />
        <Route element={<DetailBusiness />} path="/detail" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
