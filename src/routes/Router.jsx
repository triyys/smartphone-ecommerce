import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PUBLIC_ROUTE, PRIVATE_ROUTE } from "../constants/paths";
import HomeRoute from "./HomeRoute";
import ProductRoute from "./ProductRoute";
import CatalogRoute from "./CatalogRoute";
import AccessoryRoute from "./AccessoryRoute";
import ContactRoute from "./ContactRoute";
import CartRoute from "./CartRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PUBLIC_ROUTE.HOME} element={<HomeRoute/>} />
        <Route path={`${PUBLIC_ROUTE.CATALOG}/:slug`} element={<ProductRoute/>} />
        <Route path={PUBLIC_ROUTE.CATALOG} element={<CatalogRoute/>} />
        <Route path={PUBLIC_ROUTE.ACCESSORY} element={<AccessoryRoute/>} />
        <Route path={PUBLIC_ROUTE.CONTACT} element={<ContactRoute/>} />
        <Route path={PRIVATE_ROUTE.CART} element={<CartRoute/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
