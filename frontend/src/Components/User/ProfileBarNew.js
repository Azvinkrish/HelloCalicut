import React from "react";

const   ProfileBarNew = () => {
  return (
    <>
      <div className="relative">
        <div class="pt-6 mb-8 lg:mb-0 w-full shadow-2xl lg:w-1/4 px-3 absolute ">
          
            <div className=" absolute p-5 rounded-lg shadow-2xl " >
              <img
                src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                alt="profile"
                className="rounded-full"
              />
              <h4 class="mb-4 text-slate-800 text-center p-5 font-bold uppercase">
                MUHAMMED MUBASHIR
              </h4>
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
        </div>
      
    </>
  );
};

export default ProfileBarNew;
