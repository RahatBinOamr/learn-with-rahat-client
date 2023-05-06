import React from "react";
import Slider from "react-slick";

const ReviewsCarousel = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
      <Slider {...settings}>
        {data?.map((item, index) => (
          <div className="px-2">
            <div key={index} className="card-body items-center text-center">
              <img
                src={item.img}
                alt=""
                className="object-cover object-center w-20 h-20 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
              />
              <h2 className="card-title">{item.name}</h2>
              <h1 className="font-serif italic">{item.job}</h1>
              <p className="font-serif italic">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsCarousel;
