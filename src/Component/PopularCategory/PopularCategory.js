import React from "react";
import Carousel from "./Carousel";
import { useState } from "react";
import { useEffect } from "react";

const PopularCategory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`PopularCategory.json`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="bg-gray-200 w-full pt-20 pb-12 ">
      <div className="font-serif items-center text-center mt-5 ">
        {" "}
        <p className="text-xl text-gray-400">Popular Category</p>
        <h1 className="text-3xl font-bold mt-2 mb-8 text-black">
          <span className="text-red-500">Hot & Popular</span> Category For Learn
        </h1>
      </div>
      <div className=" pt-10 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        {" "}
        <Carousel data={data} />
      </div>
    </div>
  );
};

export default PopularCategory;
