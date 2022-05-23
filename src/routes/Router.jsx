import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeRoute from "./HomeRoute";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute/>} />
        <Route path="/catalog/:slug" element={<Product/>} />
        <Route path="/catalog" element={<Catalog/>} />
        {/* <Route path="/cart" element={<Cart/>} /> */}
        <Route path="/cart/:params?" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
