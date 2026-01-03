import React from "react";
import Hero from "./Hero";
import ProductCategories from "./ProductCategory/ProductCategories";
import RecentProducts from "./RecentProducts/RecentProducts";
import ExtraSections from "./ExtraSections";

const Home = () => {
  return (
    <div>
      <title>PawMart - Home</title>
      <Hero></Hero>
      <ProductCategories></ProductCategories>
      <RecentProducts></RecentProducts>
      <ExtraSections></ExtraSections>
    </div>
  );
};

export default Home;
