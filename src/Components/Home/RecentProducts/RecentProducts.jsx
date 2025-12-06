import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const RecentProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/add-product-form")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className="lg:p-20 lg:pb-10 p-3 pt-5">
      <div className="text-center">
        <h2 className="lg:text-4xl text-2xl font-bold primary-text mb-5 lg:mb-12">
          Recent <span className="secondary-text">Products</span>
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        {[...products]
          .reverse()
          .slice(0, 6)
          .map((item) => (
            <div key={item._id} className="bg-base-200 rounded-md overflow-hidden hover:scale-[1.01] duration-75 shadow-md">
              <div className="w-full aspect-4/3">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.category}</p>
                <p className=" font-semibold py-2 primary-text">Price: {item.price === 0 ? "Free for Adoption" : `$${item.price}`}</p>
                <p className="text-gray-600 text-sm">
                  Location: <br /> {item.location}
                </p>
                {/* button */}
                <Link to={`/product-details/${item?._id}`} className="bg-linear-to-tr from-[#ff6f00] to-[#ffb03a] btn w-full text-white py-1.5 font-bold text-md text-center mt-4">
                  See Details
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentProducts;
