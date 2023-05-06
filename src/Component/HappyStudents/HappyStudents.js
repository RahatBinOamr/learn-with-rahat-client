import React from "react";

const HappyStudents = () => {
  return (
    <div className="w-full bg-red-500">
      <div className="px-20  py-20 mx-auto sm:max-w-xl md:max-w-full justify-center  ">
        <h1 className="text-3xl font-serif font-bold text-center text-white">
          Join Thousand Of Happy Students!
        </h1>
        <p className="text-white text-center">
          Subscribe our newsletter & get latest news and updation!
        </p>
        <div className="mt-10 mb-12 text-center mx-auto bg-white lg:w-1/3 sm:w-full">
          <div className="mt-10 flex justify-between p-1 mb-12 text-center bg-white w-1/3">
            <input
              type="email"
              className="bg-white  "
              placeholder="enter your email"
            />
            <button className="bg-red-500 text-center text-white p-3 lg:me-[-300px] sm:me-1">
              get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyStudents;
