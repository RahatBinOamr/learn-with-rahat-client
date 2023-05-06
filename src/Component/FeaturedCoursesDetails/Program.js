import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { BsPersonCheckFill } from "react-icons/bs";
const Program = ({ course }) => {
  return (
    <div className="w-full shadow-md">
      <div className=" pt-[+100px] pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl grid gap-10 sm:grid-cols-1 lg:grid-cols-3 ">
        <div>
          <img src={course.img} alt="" className="rounded-xl" />
        </div>
        <div className="col-span-2">
          <div className="flex mt-5 mb-5">
            <button className="text-green-500 btn-xs px-5 bg-green-100  rounded-e-full me-5">
              SEO
            </button>
            <button className="text-blue-500 btn-xs px-5 bg-blue-100  rounded-e-full">
              Design
            </button>
          </div>
          <h1 className="text-2xl font-bold text-black">{course.title}</h1>
          <div className="flex mt-2 mb-3">
            <p className="flex me-4 items-center">
              <AiOutlineCalendar className="me-1" />
              <span>10 - 20 weeks</span>
            </p>
            <p className="flex me-4 items-center">
              <FiBookOpen className="me-1" />
              <span>102 Lectures</span>
            </p>
            <p className="flex me-4 items-center">
              <BsPersonCheckFill className="me-1" />
              <span>502 Student Enrolled</span>
            </p>
          </div>
          <p className="mb-3">{course.descriptions}</p>
          <div className="flex items-center">
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="flex items-center text-center">
              <p className="text-xl font-bold font-serif text-lime-700 ms-3 me-2">
                4.7
              </p>
              <p>3572 Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
