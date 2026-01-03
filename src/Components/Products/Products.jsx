import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { FaFilter } from "react-icons/fa";
import Loader from "../../Loader";
import { GrLocation } from "react-icons/gr";
import Aside from "./Aside";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://server-a10-six.vercel.app/add-product-form")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="bg-base-200 lg:px-20 lg:py-10 px-3 py-5 pb-10 lg:min-h-[70vh] h-auto">
      <title>PawMart - Pet & Supplies</title>

      <h2 className="lg:text-4xl text-3xl lg:mb-15 mb-7 text-center font-bold primary-text">
        Products <span className="secondary-text">& Accessories</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-2 ">
          <Aside searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></Aside>
        </div>
        <div className="flex-10">
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-3">
            {[...filteredProducts]
              .filter((item) => item.category != "Pets")
              .reverse()
              .map((item) => (
                <div key={item._id} className="bg-white rounded-md overflow-hidden shadow-sm">
                  <Link to={`/product-details/${item?._id}`}>
                    <div className="w-full overflow-hidden aspect-4/3 border-b-2 border-gray-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" />
                    </div>
                  </Link>

                  <div className="p-3">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600 text-xs">{item.category}</p>
                    <p className="text-lg font-semibold py-2 primary-text">{item.price === 0 ? "Free for Adoption" : `$${item.price}`}</p>
                  </div>
                </div>
              ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
              {/* Main text */}
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Products Found</h2>

              {/* Supporting text */}
              <p className="text-gray-500 mb-4">We couldn't find any products matching your search. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
