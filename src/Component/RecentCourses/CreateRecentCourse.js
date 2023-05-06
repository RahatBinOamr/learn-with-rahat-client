import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateRecentPost = () => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [prev_price, setPrev_Price] = useState("");
  const [duration_h, setDuration_h] = useState("");
  const [duration_m, setDuration_m] = useState("");
  const [view, setView] = useState("");
  const [details, setDetails] = useState("");
  const [description, setDescription] = useState("");
  const [tutor_name, setTutor_name] = useState("");
  const [tutor, setTutor] = useState("");
  const [tutor_avatar, setTutor_avatar] = useState("");
  const [Requirement1, setRequirement1] = useState("");
  const [Requirement2, setRequirement2] = useState("");
  const [Requirement3, setRequirement3] = useState("");
  const [Requirement4, setRequirement4] = useState("");
  const navigate = useNavigate();
  const handelRecentPostReset = () => {
    setImg("");
    setTitle("");
    setPrice("");
    setPrev_Price("");
    setDuration_h("");
    setDuration_m("");
    setView("");
    setDetails("");
    setDescription("");
    setTutor("");
    setTutor_avatar("");
    setTutor_name("");
    setRequirement1("");
    setRequirement2("");
    setRequirement3("");
    setRequirement4("");
  };
  const handelRecentPost = (e) => {
    e.preventDefault();
    const recentPost = {
      img,
      title,
      price,
      duration_h,
      duration_m,
      view,
      details,
      description,
      tutor,
      tutor_avatar,
      tutor_name,
      requirement: [Requirement1, Requirement2, Requirement3, Requirement4],
    };
    fetch(` https://learn-with-rahat-server.vercel.app/recent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recentPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("hello", data);
        if (data.acknowledged) {
          toast.success("Your Post successfully");
          handelRecentPostReset();
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-32 lg:px-20 ">
      <div className="font-serif items-center text-center mt-8 mb-5">
        <h1 className="text-3xl font-bold  text-black">
          Create new Recent Course post
        </h1>
      </div>
      <div>
        <form
          onSubmit={handelRecentPost}
          className=" bg-gray-100  rounded-lg px-12 py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="recent course title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder=" recent course title"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />
            <input
              name="recent course previous price"
              type="text"
              value={prev_price}
              onChange={(e) => setPrev_Price(e.target.value)}
              placeholder=" recent course previous price"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />
            <input
              name="recent course price"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder=" recent course price"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />

            <input
              name="recent course image url"
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              placeholder="recent course image url"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />
            <input
              name="recent course duration hour"
              type="text"
              value={duration_h}
              onChange={(e) => setDuration_h(e.target.value)}
              placeholder="recent course duration hour"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />
            <input
              name="recent course duration minute"
              type="text"
              value={duration_m}
              onChange={(e) => setDuration_m(e.target.value)}
              placeholder="recent course duration minute"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />
            <input
              name="recent course view"
              type="text"
              value={view}
              onChange={(e) => setView(e.target.value)}
              placeholder="recent course view"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />
          </div>
          <textarea
            name="recent course details"
            className="textarea textarea-bordered mt-8  bg-white shadow-xl mb-8 h-16 w-full"
            placeholder="recent course details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          ></textarea>
          <textarea
            name="recent course description"
            className="textarea textarea-bordered   bg-white shadow-xl mb-8 h-16 w-full"
            placeholder="recent course description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <h1 className="text-red-500 font-bold text-xl text-center">
            Tutor Data
          </h1>
          <div className="grid grid-cols-1 mt-4 lg:grid-cols-2 gap-4">
            <input
              name="recent course tutor"
              value={tutor}
              onChange={(e) => setTutor(e.target.value)}
              type="text"
              placeholder="recent course tutor"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />
            <input
              name="recent course tutor_name"
              type="text"
              value={tutor_name}
              onChange={(e) => setTutor_name(e.target.value)}
              placeholder="recent course tutor_name"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />
            <input
              name="recent course tutor_avatar"
              type="text"
              value={tutor_avatar}
              onChange={(e) => setTutor_avatar(e.target.value)}
              placeholder="recent course tutor_avatar"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />
          </div>
          <h1 className="text-red-500 font-bold text-xl text-center">
            Feature Course Requirement
          </h1>
          <div className="grid grid-cols-1 mt-4 lg:grid-cols-2 gap-4">
            <input
              name="recent course Requirement1"
              value={Requirement1}
              onChange={(e) => setRequirement1(e.target.value)}
              type="text"
              placeholder="recent course Requirement1"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />
            <input
              name="recent course Requirement2"
              type="text"
              value={Requirement2}
              onChange={(e) => setRequirement2(e.target.value)}
              placeholder="recent course Requirement2"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />
            <input
              name="recent course Requirement3"
              type="text"
              value={Requirement3}
              onChange={(e) => setRequirement3(e.target.value)}
              placeholder="recent course Requirement3"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />
            <input
              name="recent course Requirement4"
              type="text"
              value={Requirement4}
              onChange={(e) => setRequirement4(e.target.value)}
              placeholder="recent course Requirement4"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />
          </div>
          <button className=" bg-green-500 mt-5  text-white font-bold rounded-lg shadow-2xl p-3">
            Submit Your Feature Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRecentPost;
