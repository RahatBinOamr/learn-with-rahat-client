import React, { useEffect, useState } from "react";
import FeaturedCourse from "./FeaturedCourse";
import { Link } from "react-router-dom";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [dataToShow, setDataToShow] = useState(6);
  useEffect(() => {
    fetch(`https://learn-with-rahat-server.vercel.app/feature`)
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error(err));
  }, []);
  const showData = courses.slice(0, dataToShow);
  return (
    <div className=" pt-10 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
      <div className="font-serif items-center text-center mt-5 mb-5">
        {" "}
        <p className="text-xl text-gray-400">New & Trending</p>
        <h1 className="text-3xl font-bold mt-2 mb-8 text-black">
          <span className="text-red-500">Featured</span> Courses By Professional{" "}
          <br /> Instructor
        </h1>
      </div>
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {showData.map((course, i) => (
          <Link to={`/FeaturedCoursesDetails/${course._id}`}>
            <FeaturedCourse course={course} key={i} />
          </Link>
        ))}
      </div>
      {dataToShow >= courses.length ? (
        <div className="mt-10 text-center items-center mx-auto">
          <button
            className="bg-red-200  text-gray-700 font-bold py-2 px-8 rounded-xl"
            onClick={() => setDataToShow(dataToShow + 10)}
          >
            No More
          </button>
        </div>
      ) : (
        <>
          <div className="mt-10 text-center items-center mx-auto  ">
            <button
              className="bg-red-600   text-white font-bold py-2 px-8 rounded-xl"
              onClick={() => setDataToShow(dataToShow + 10)}
            >
              Load More
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedCourses;
