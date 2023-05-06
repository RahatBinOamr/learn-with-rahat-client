import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { CgGames } from "react-icons/cg";
import { RiTimeLine } from "react-icons/ri";
import { HiOutlineChevronRight } from "react-icons/hi";
import {
  BsBookmarkCheck,
  BsFillBrightnessHighFill,
  BsFlag,
  BsPersonCheck,
} from "react-icons/bs";
import { GrCopy } from "react-icons/gr";

const ProgramDetails = ({ course }) => {
  return (
    <div className="w-full bg-slate-200">
      <div className=" pt-[+100px] pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  grid gap-10 lg:grid-cols-3 sm:grid-cols-1  ">
        <div className="lg:col-span-2 sm:col-span-1 bg-slate-50 px-5 py-8 shadow-md rounded-md">
          {" "}
          <div>
            <h1 className="text-black font-bold mb-4">Course Overview</h1>
            <p>{course.details}</p>
            <h1 className="text-black font-bold mt-2 mb-3">Requirements</h1>
            {course.Requirements?.map((data, i) => (
              <p key={i} className="flex items-center mt-2">
                {" "}
                <FaHandPointRight className="me-3" /> <span>{data}</span>{" "}
              </p>
            ))}
          </div>
        </div>
        <div className="">
          <div className="bg-slate-50 p-4 shadow-md rounded-md mb-2">
            <div className="flex items-center space-x-2">
              <img
                src={course.tutor_avatar}
                alt=""
                className="object-cover object-center w-14 h-14 rounded-lg shadow-sm dark:bg-gray-500 dark:border-gray-700"
              />
              <div className="-space-y-1">
                <h2 className="text-sm font-semibold leading-none">
                  {course.tutor_name}
                </h2>
                <span className="inline-block text-xs leading-none dark:text-gray-400">
                  {course.tutor}
                </span>
              </div>
            </div>
            <div className="divider"></div>
            <div className="text-sm">
              <p>Acctual Price</p>
              <p className="text-3xl font-bold text-red-700">
                $ {course.price}
              </p>
              <p className="font-semibold mt-3 mb-3">Course Features</p>
              <div>
                <p className="flex items-center mt-2">
                  <IoMdArrowDroprightCircle className="me-2 text-gray-300" />{" "}
                  <span>Fully Programming</span>
                </p>
                <p className="flex items-center mt-2">
                  <IoMdArrowDroprightCircle className="me-2 text-gray-300" />{" "}
                  <span>Help Code to Code</span>
                </p>
                <p className="flex items-center mt-2">
                  <IoMdArrowDroprightCircle className="me-2 text-gray-300" />{" "}
                  <span>Free Trial 7 Days</span>
                </p>
                <p className="flex items-center mt-2">
                  <IoMdArrowDroprightCircle className="me-2 text-gray-300" />{" "}
                  <span>Unlimited Videos</span>
                </p>
                <p className="flex items-center mt-2 mb-6">
                  <IoMdArrowDroprightCircle className="me-2 text-gray-300" />{" "}
                  <span>24x7 Support</span>
                </p>
                <button className="flex items-center w-full rounded-2xl text-center bg-red-700 text-white px-6 py-4 mx-auto font-bold justify-center">
                  Enroll Now <HiOutlineChevronRight className="ms-4 text-3xl" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-4 shadow-md rounded-md mt-4">
            <h1 className="font-bold text-black">Course Features</h1>
            <div className="flex items-center justify-between mt-3">
              <p className="flex items-center ">
                <BsPersonCheck className="me-2 " />{" "}
                <span>Student Enrolled:</span>
              </p>
              <p className="font-semibold">1740</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="flex items-center ">
                <GrCopy className="me-2 " /> <span>Lectures:</span>
              </p>
              <p className="font-semibold">10</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="flex items-center ">
                <CgGames className="me-2 " /> <span>Quizzes:</span>
              </p>
              <p className="font-semibold">7</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="flex items-center ">
                <RiTimeLine className="me-2 " /> <span>Duration:</span>
              </p>
              <p className="font-semibold">60 hours</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="flex items-center ">
                <BsBookmarkCheck className="me-2 " /> <span>Skill Level:</span>
              </p>
              <p className="font-semibold">Beginner</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="flex items-center ">
                <BsFlag className="me-2 " /> <span>Language:</span>
              </p>
              <p className="font-semibold">English</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="flex items-center ">
                <BsFillBrightnessHighFill className="me-2 " />{" "}
                <span>Assessment:</span>
              </p>
              <p className="font-semibold">Yes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
