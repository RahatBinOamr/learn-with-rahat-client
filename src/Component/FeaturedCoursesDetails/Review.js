import React from "react";
import { MdDelete } from "react-icons/md";

const Review = ({ review, handelDeleteComment }) => {
  return (
    <div className="container flex flex-col w-64 max-w-lg   divide-y rounded-md divide-gray-700 bg-gray-100 shadow-lg">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <div className="flex ">
              <h4 className="font-bold me-3">{review.name}</h4>
              <MdDelete onClick={() => handelDeleteComment(review._id)} />
            </div>
            <span className="text-xs dark:text-gray-400">
              {review.type ? (
                <>{review.type}</>
              ) : (
                <>
                  <h1>Nothing</h1>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm dark:text-gray-400">
        <p>{review.message}</p>
      </div>
    </div>
  );
};

export default Review;
