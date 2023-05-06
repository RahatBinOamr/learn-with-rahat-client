import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    fetch(`https://learn-with-rahat-server.vercel.app/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error(err));
  }, [id]);
  console.log(blog, id);
  return (
    <div className="w-full pt-14 pb-10 bg-slate-200 text-black">
      <div className="sm:py-12  px-4 pt-10 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div>
          <img src={blog.imgUrl} alt="" className="bg-gray-600" />
        </div>
        <div className="mt-8">
          <h1 className="text-xl font-bold ">{blog.title} </h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
};

export default BlogDetails;
