import React from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <>
      <div className="relative">
        <div class="mb-8 lg:mb-0 w-full lg:w-1/4 px-3 absolute top-0 right-0">
          <div class="py-4 px-6 bg-black-600 shadow rounded">
            <h4 class="mb-4 text-stone-500 font-bold uppercase">Categories</h4>
            <ul>
              <h1 className="text-stone-400 text-xl text-center">
               
              </h1>

              <li>
                <p className="block cursor-pointer py-2 px-3 mb-4 rounded text-stone-500  bg-zinc-900 hover:bg-cyan-400 font-bold leading-loose transition duration-200"> Food</p>
              </li>
              <li>
                <p className="block cursor-pointer py-2 px-3 mb-4 rounded text-stone-500  bg-zinc-900 hover:bg-cyan-400 font-bold leading-loose transition duration-200"> Adventure</p>
              </li>
              <li>
                <p className="block cursor-pointer py-2 px-3 mb-4 rounded text-stone-500  bg-zinc-900 hover:bg-cyan-400 font-bold leading-loose transition duration-200"> Events</p>
              </li>
              <li>
                <p className="block cursor-pointer py-2 px-3 mb-4 rounded text-stone-500  bg-zinc-900 hover:bg-cyan-400 font-bold leading-loose transition duration-200"> Development</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
