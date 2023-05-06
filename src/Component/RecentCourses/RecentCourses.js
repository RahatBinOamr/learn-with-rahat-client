import React, { useEffect, useState } from "react";
import RecentCoursesCarousel from "./RecentCoursesCarousel";

const RecentCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://learn-with-rahat-server.vercel.app/recent")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  });

  return (
    <div className="bg-gray-200 pt-24 pb-14 w-full">
      <div className="font-serif items-center text-center mt-5 mb-5">
        <p className="text-xl text-gray-400">Hot & Trending</p>
        <h1 className="text-3xl font-bold mt-2 mb-8 text-black">
          <span className="text-red-500">Recent</span> Courses By Professional{" "}
          <br /> Instructor
        </h1>
      </div>
      <div className=" pt-10 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <RecentCoursesCarousel data={courses} />
      </div>
    </div>
  );
};

export default RecentCourses;
