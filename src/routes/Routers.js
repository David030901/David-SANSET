import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Setting from "../pages/Setting";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Sell from "../pages/Sell";
import AddProduct from "../pages/AddProduct";
import ProfileSeller from "../pages/ProfileSeller";
import Profile from "../pages/Profile";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/profileseller" element={<ProfileSeller />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
