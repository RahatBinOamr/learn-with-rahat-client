import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdMonitor } from "react-icons/md";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
const KnowAboutE_LearnLearning = () => {
  return (
    <div className=" w-full pt-16">
      <div className=" pt-16 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold font-serif text-gray-900 mt-10 mb-8 ">
            Know About <span className="text-red-500">E-Learn</span> <br />{" "}
            Learning Platform
          </h1>
          <div className="flex text-start mt-5 items-center ">
            <div>
              <MdMonitor className="me-4 shadow-lg text-red-600 bg-red-200 text-4xl rounded-lg p-1" />
            </div>
            <div>
              <h1 className="font-bold">Nemo Enim Ipsam Voluptatem Quia.</h1>
              <p>
                No one rejects, dislikes, or avoids pleasure itself, <br />{" "}
                because it is pleasure
              </p>
            </div>
          </div>
          <div className="flex text-start mt-5 items-center ">
            <div>
              <HiOutlineVideoCamera className="me-4 shadow-lg text-red-600 bg-red-200 text-4xl rounded-lg p-1" />
            </div>
            <div>
              <h1 className="font-bold">Nemo Enim Ipsam Voluptatem Quia.</h1>
              <p>
                No one rejects, dislikes, or avoids pleasure itself, <br />{" "}
                because it is pleasure
              </p>
            </div>
          </div>
          <div className="flex text-start mt-5 items-center ">
            <div>
              <FaBook className="me-4 shadow-lg text-red-600 bg-red-200 text-4xl rounded-lg p-1" />
            </div>
            <div>
              <h1 className="font-bold">Nemo Enim Ipsam Voluptatem Quia.</h1>
              <p>
                No one rejects, dislikes, or avoids pleasure itself, <br />{" "}
                because it is pleasure
              </p>
            </div>
          </div>
          <Link to={"/blog"}>
            {" "}
            <button className="bg-red-200 px-4 py-2 rounded-lg mt-8 flex justify-center text-center items-center ">
              <p className="text-red-500">Know More</p>{" "}
              <HiOutlineArrowNarrowRight className="bg-red-400 p-2  rounded-md text-black text-4xl ms-4" />
            </button>
          </Link>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/illustration-marketing-automation-flat-concept-design_203633-1988.jpg?w=900"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default KnowAboutE_LearnLearning;
