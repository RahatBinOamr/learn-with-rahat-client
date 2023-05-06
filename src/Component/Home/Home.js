import React from "react";
import HomeBanner from "./HomeBanner";
import FeaturedCourses from "../FeaturedCourses/FeaturedCourses";
import PopularCategory from "../PopularCategory/PopularCategory";
import KnowAboutE_LearnLearning from "../KnowAboutE-LearnLearning/KnowAboutE_LearnLearning";
import RecentCourses from "../RecentCourses/RecentCourses";
import Reviews from "../Reviews/Reviews";
import HappyStudents from "../HappyStudents/HappyStudents";
import { Team } from "../Team/Team";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <FeaturedCourses />
      <PopularCategory />
      <KnowAboutE_LearnLearning />
      <RecentCourses />
      <Reviews />
      <Team />
      <HappyStudents />
    </div>
  );
};

export default Home;
