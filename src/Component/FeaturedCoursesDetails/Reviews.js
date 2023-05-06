import React from "react";
import Review from "./Review";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://learn-with-rahat-server.vercel.app/comment`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const handelDeleteComment = (_id) => {
    fetch(`https://learn-with-rahat-server.vercel.app/comment/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const remaining = reviews.filter((user) => user._id !== _id);
          setReviews(remaining);
          toast.success(" Data deleted successfully");
          console.log(data);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full bg-slate-200 pt-14 pb-24">
      <div className="font-serif items-center text-center mt-8 mb-10">
        <h1 className="text-3xl font-bold  text-black">What people say</h1>
      </div>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {reviews.map((review) => (
          <Review
            review={review}
            handelDeleteComment={handelDeleteComment}
            key={review._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
