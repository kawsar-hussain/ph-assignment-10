import React from "react";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AddProductForm from "./Components/ProductListing/AddProductForm";
import Products from "./Components/Products/Products";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet>
        <Home></Home>
        <AddProductForm></AddProductForm>
        <Products></Products>
      </Outlet>
      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
    </div>
  );
};

export default Root;
