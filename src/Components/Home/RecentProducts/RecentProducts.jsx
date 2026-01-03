import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const RecentProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://server-a10-six.vercel.app/add-product-form")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className="lg:px-20 py-15 lg:pb-10 p-3 bg-base-200">
      <div className="text-center">
        <h2 className="lg:text-4xl text-2xl font-bold primary-text mb-5 lg:mb-12">
          Recent <span className="secondary-text">Products</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-3">
        {[...products].reverse().map((item) => (
          <div key={item._id} className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md">
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
    </div>
  );
};

export default RecentProducts;
