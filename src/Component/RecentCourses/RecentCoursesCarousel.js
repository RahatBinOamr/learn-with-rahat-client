import React from "react";
import { GiOpenBook } from "react-icons/gi";
import { RiVideoLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const RecentCoursesCarousel = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      {" "}
      <Slider {...settings}>
        {data?.map((item) => (
          <Link to={`/RecentCoursesDetails/${item._id}`}>
            <div key={item.id} className="px-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img className="w-full" src={item.img} alt={item.title} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <div className="flex ">
                    <h1 className="flex text-center me-4 items-center ">
                      <RiVideoLine className="me-1" />{" "}
                      <span>{item.videos}</span>
                      Videos
                    </h1>
                    <h1 className="flex text-center items-center me-4 ">
                      <GiOpenBook className="me-1" /> <span>{item.lesson}</span>
                      Lesson
                    </h1>
                    <h1 className="flex text-center items-center  ">
                      <FiClock className="me-1" />{" "}
                      <span className="me-1">{item.duration_h}h</span>
                      <span>{item.duration_m}min</span>
                    </h1>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        src={item.tutor_avatar}
                        alt=""
                        className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
                      />
                      <div className="-space-y-1">
                        <h2 className="text-sm font-semibold leading-none">
                          {item.tutor_name}
                        </h2>
                        <span className="inline-block text-xs leading-none dark:text-gray-400">
                          {item.tutor}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="flex items-center justify-center my-6 space-x-2 font-bold">
                        <span className="text-lg line-through dark:text-gray-300">
                          ${item.prev_Price}
                        </span>
                        <span className="pb-2 font-bold text-4xl">
                          ${item.price}{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default RecentCoursesCarousel;
