import React from "react";
import ReviewsCarousel from "./ReviewsCarousel";

const Reviews = () => {
  const data = [
    {
      id: 1,
      name: "Rout Millancer",
      job: "web developer",
      img: "https://themezhub.net/learnup-demo-2/learnup/assets/img/user-1.jpg",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error praesentium architecto consequatur vitae, obcaecati eos nostrum quod sed sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error praesentium architecto consequatur vitae, obcaecati eos nostrum quod sed sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error praesentium architecto consequatur vitae, obcaecati eos nostrum quod sed sint. ",
    },
    {
      id: 2,
      name: "Virat Kholic",
      job: "MERN Developer ",
      img: "https://themezhub.net/learnup-demo-2/learnup/assets/img/user-2.jpg",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error praesentium architecto consequatur vitae, obcaecati eos nostrum quod sed sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error praesentium architecto consequatur vitae, obcaecati eos nostrum quod sed sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error praesentium architecto consequatur vitae, obcaecati eos nostrum quod sed sint. ",
    },
    {
      id: 3,
      name: "Hierarchical",
      job: "project manager",
      img: "https://themezhub.net/learnup-demo-2/learnup/assets/img/user-3.jpg",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error praesentium architecto consequatur vitae, obcaecati eos nostrum quod sed sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error praesentium architecto consequatur vitae, obcaecati eos nostrum quod sed sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error praesentium architecto consequatur vitae, obcaecati eos nostrum quod sed sint. ",
    },
    {
      id: 4,
      name: "pllukh mollik",
      job: "software engineer",
      img: "https://themezhub.net/learnup-demo-2/learnup/assets/img/user-4.jpg",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error praesentium architecto consequatur vitae, obcaecati eos nostrum quod sed sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error praesentium architecto consequatur vitae, obcaecati eos nostrum quod sed sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error praesentium architecto consequatur vitae, obcaecati eos nostrum quod sed sint. ",
    },
    {
      id: 5,
      name: "huamkijh jumaja",
      job: "laravel developer",
      img: "https://themezhub.net/learnup-demo-2/learnup/assets/img/user-1.jpg",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error praesentium architecto consequatur vitae, obcaecati eos nostrum quod sed sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error praesentium architecto consequatur vitae, obcaecati eos nostrum quod sed sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error praesentium architecto consequatur vitae, obcaecati eos nostrum quod sed sint. ",
    },
  ];
  return (
    <div
      className="w-full mt-[-30px]"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/geometric-dot-mesh-gradient-background-hexagon-white-light-gradient-your-text-grey-color-backdrop-with-dynamic-square-halftone-abstract-monochrome-graphic-design-vector-illustration_599740-725.jpg?w=996')",
      }}
    >
      <div className="font-serif items-center pt-32  text-center mt-5 mb-5">
        {" "}
        <p className="text-xl text-gray-400">What People Say?</p>
        <h1 className="text-3xl font-bold mt-2 mb-8 text-black">
          <span className="text-red-500">Reviews</span> By Our Success & <br />
          Top Students
        </h1>
      </div>
      <div className="px-4 pb-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <ReviewsCarousel data={data} />
      </div>
    </div>
  );
};

export default Reviews;
