import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
const CreatePost = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("");
  const resetBlog = () => {
    setContent("");
    setImgUrl("");
    setSummary("");
    setTitle("");
    setCategory("");
  };
  const handelBlogPost = (e) => {
    e.preventDefault();
    const blog = { content, title, imgUrl, summary, category };
    fetch(` https://learn-with-rahat-server.vercel.app/blog`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("hello", data);
        if (data.acknowledged) {
          toast.success("blog added successfully");
          resetBlog();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-32 lg:px-20 ">
      <div className="font-serif items-center text-center mt-8 mb-5">
        <h1 className="text-3xl font-bold  text-black">Create new post</h1>
      </div>
      <div>
        <form
          onSubmit={handelBlogPost}
          className=" bg-gray-100  rounded-lg px-12 py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="blog title"
              type="text"
              placeholder=" blog title"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              name="blog Category"
              type="text"
              placeholder=" blog Category"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <input
              name="blog image url"
              type="text"
              placeholder="blog image url"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>
          <textarea
            name="blog summary"
            className="textarea textarea-bordered mt-8  bg-white shadow-xl mb-8 h-16 w-full"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="blog summary"
            required
          ></textarea>
          <ReactQuill theme="snow" value={content} onChange={setContent} />
          <button className=" bg-green-500 mt-5  text-white font-bold rounded-lg shadow-2xl p-3">
            Submit Your Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
/* 01787062915 */
