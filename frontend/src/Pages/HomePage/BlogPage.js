import React from "react";
import CategoryList from "../../Components/Category/CategoryList";
import FeedsComp from "../../Components/Posts/FeedsComp";

import ProfileBar from "../../Components/User/ProfileBar";
import ProfileBarNew from "../../Components/User/ProfileBarNew";
const BlogPage = () => {
  return (
    <>
      <div className="">
        <div className="">
          <ProfileBarNew />
        </div>
        <div className="" >
          <FeedsComp />
        </div>
        <div className="">
          <CategoryList />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
