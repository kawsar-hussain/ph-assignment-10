import React from "react";
import { FaFilter } from "react-icons/fa";

const Aside = ({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, selectedColor, setSelectedColor }) => {
  return (
    <div>
      <div className="">
        <label className="input h-8 rounded-full w-full lg:w-[300px] focus-within:outline-0 focus-within:border-[#ff9900]/60 ">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="placeholder-gray-500 focus:border-amber-300" />
        </label>
      </div>

      {/* filter */}
      <div className="hidden gap-2 bg-white rounded-md mt-3 p-4  self-end lg:self-auto lg:flex lg:flex-col">
        <h4 className="font-bold border-b border-b-gray-300 text-gray-800 pb-1 mb-1">Category</h4>
        <div className="flex flex-col gap-2 text-gray-700">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              value="All"
              checked={selectedCategory === "All"}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="radio radio-sm checked:radio-warning"
            />
            <span className="text-sm">All</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              value="Cat"
              checked={selectedCategory === "Cat"}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="radio radio-sm checked:radio-warning"
            />
            <span className="text-sm">Cat</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              value="Dog"
              checked={selectedCategory === "Dog"}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="radio radio-sm checked:radio-warning"
            />
            <span className="text-sm">Dog</span>
          </label>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex gap-2 text-gray-700 lg:hidden mt-3">
          <p className="flex items-center gap-1 text-sm ">
            <FaFilter /> Filter{" "}
          </p>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="h-8 select w-[180px]">
            <option>All</option>
            <option>Cat</option>
            <option>Dog</option>
          </select>
        </div>
      </div>
      <div className="hidden gap-2 bg-white rounded-md mt-3 p-4  mb-7 self-end lg:self-auto lg:flex lg:flex-col">
        <h4 className="font-bold border-b border-b-gray-300 text-gray-800 pb-1 mb-1">Color</h4>
        <div className="flex flex-col gap-2 text-gray-700">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="color" value="All" checked={selectedColor === "All"} onChange={(e) => setSelectedColor(e.target.value)} className="radio radio-sm checked:radio-warning" />
            <span className="text-sm">Any Color</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="color" value="Black" checked={selectedColor === "Black"} onChange={(e) => setSelectedColor(e.target.value)} className="radio radio-sm checked:radio-warning" />
            <span className="text-sm">Black</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="color" value="White" checked={selectedColor === "White"} onChange={(e) => setSelectedColor(e.target.value)} className="radio radio-sm checked:radio-warning" />
            <span className="text-sm">White</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Aside;
