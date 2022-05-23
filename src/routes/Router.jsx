import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeRoute from "./HomeRoute";
import ProductRoute from "./ProductRoute";
import CatalogRoute from "./CatalogRoute";
import CartRoute from "./CartRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute/>} />
        <Route path="/catalog/:slug" element={<ProductRoute/>} />
        <Route path="/catalog" element={<CatalogRoute/>} />
        <Route path="/cart/:params?" element={<CartRoute/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
