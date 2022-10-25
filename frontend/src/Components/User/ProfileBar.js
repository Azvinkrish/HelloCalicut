import React from "react";
import "./Profilebar.css";

const SideBar = () => {
  return (
    <div className="profile-body pt-6 shadow-2xl min-h-0 `  2xl:py-40 bg-zinc-50 overflow-hidden">
      <div className="rounded-full relative">
        <img
          src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
          alt="profile"
          className="rounded-full"
        />
      </div>
      <div className="profile-data">
        <div className="profile-name">
          <h3 className="profile-name text-center font-bold text-slate-600 pt-3">
            {" "}
            MUHAMMED MUBASHIR
          </h3>
        </div>
        <div className="flex justify-around pt-3">
          <div className=" text-center">
            0<h5>Posts</h5>
          </div>
          <div className=" text-center">
            {" "}
            0<h5>Followers</h5>{" "}
          </div>
          <div className=" text-center">
            0 <h5>Following</h5>{" "}
          </div>
        </div>
        <div className="text-center m-10">
          <button
            type="submit"
            className="py-4 w-full bg-teal-500  to-blue-500  hover:bg-indigo-500  text-white font-bold rounded-full transition duration-200"
          >
            VIEW PROFILE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
