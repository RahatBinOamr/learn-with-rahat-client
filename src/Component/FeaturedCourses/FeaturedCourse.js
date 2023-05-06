import React from "react";

const FeaturedCourse = ({ course }) => {
  const {
    img,
    title,
    price,
    view,
    duration_h,
    duration_m,
    tutor,
    tutor_name,
    tutor_avatar,
  } = course;
  return (
    <div className="max-w-xs rounded-md shadow-md">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl hover:text-red-600 font-bold mb-4 tracking-wide">
            {title}
          </h2>
          <div className="flex mb-4">
            <button className="bg-green-100  btn-xs px-5  rounded-e-full text-green-500 me-2">
              Expert
            </button>
            <button className="bg-orange-100  btn-xs px-5  rounded-e-full text-orange-700 me-2">
              Professiona
            </button>
            <button className="bg-blue-100  btn-xs px-5  rounded-e-full text-blue-700 me-2">
              Design
            </button>
          </div>
          <div className="flex justify-between mt-5 mb-8">
            <div>
              <p className="font-bold text-gray-700">{view} views</p>

              <p className="text-red-600 font-semibold">
                {" "}
                {duration_h}h-{duration_m}min
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-black">${price}</p>{" "}
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={tutor_avatar}
                alt=""
                className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
              />
              <div className="-space-y-1">
                <h2 className="text-sm font-semibold leading-none">
                  {tutor_name}
                </h2>
                <span className="inline-block text-xs leading-none dark:text-gray-400">
                  {tutor}
                </span>
              </div>
            </div>
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourse;
