import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const HomeBanner = () => {
  return (
    <div className="bg-gray-100 w-full pt-16">
      <div className=" pt-16 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-5xl font-semibold font-serif text-blue-900 mt-10 mb-8 ">
            Limitless Learning At Your Fingertips
          </h1>
          <p>
            {" "}
            Best Online learning and teaching platform with 7K+ courses & 17M
            students. Taught by experienced to help you acquire new skills.
          </p>
          <button className="bg-red-500 px-4 py-2 rounded-lg mt-8 flex justify-center text-center items-center ">
            <p className="text-white">Enroll Now</p>{" "}
            <HiOutlineArrowNarrowRight className="bg-white p-2  rounded-md text-black text-4xl ms-4" />
          </button>
        </div>
        <div>
          <img
            src="https://themezhub.net/learnup-demo-2/learnup/assets/img/edu_1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
