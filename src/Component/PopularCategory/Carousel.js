import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiOpenBook } from "react-icons/gi";
import { RiVideoLine } from "react-icons/ri";
const Carousel = ({ data }) => {
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
        {data.map((item) => (
          <div key={item.id} className="px-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img className="w-full" src={item.image} alt={item.title} />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="flex ">
                  <h1 className="flex text-center me-4 items-center ">
                    <RiVideoLine className="me-1" /> <span>{item.videos}</span>
                    Videos
                  </h1>
                  <h1 className="flex text-center items-center ">
                    <GiOpenBook className="me-1" /> <span>{item.lesson}</span>
                    Lesson
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
