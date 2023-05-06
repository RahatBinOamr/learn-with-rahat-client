import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Program from "./Program";
import ProgramDetails from "./ProgramDetails";
import CourseCircullum from "../../FeaturedCoursesDetails/CourseCircullum";
import Reviews from "../../FeaturedCoursesDetails/Reviews";
import SaySomethiing from "../../FeaturedCoursesDetails/SaySomethiing";

const RecentCoursesDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    fetch(`https://learn-with-rahat-server.vercel.app/recent/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <div>
      <Program course={course} />
      <ProgramDetails course={course} />
      <CourseCircullum />
      <Reviews />
      <SaySomethiing />
    </div>
  );
};

export default RecentCoursesDetails;
