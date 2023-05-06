import React from "react";
import Program from "./Program";
import ProgramDetails from "./ProgramDetails";
import CourseCircullum from "./CourseCircullum";
import SaySomethiing from "./SaySomethiing";
import Reviews from "./Reviews";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const FeaturedCoursesDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    fetch(`https://learn-with-rahat-server.vercel.app/feature/${id}`)
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

export default FeaturedCoursesDetails;
