import {Routes, Route} from "react-router-dom";
import Home from "../section/Home/Home";
import Contacts from "../section/Contacts/contacts";
import Products from "../section/Products/Products";
import About from "../section/About/About"
import Product from "../section/Products/Product/Product";

const Router = () => {
  return (
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contacts />} path="/contacts" />
        <Route element={<Products />} path="/products" />
        <Route element={<About />} path="/About" />
        <Route element={<Product />} path="/products/:id" />
        <Route path="/*" element={<h2>Note found</h2>} />
      </Routes>
  );
};

export default Router;
