import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ContactUpdate = () => {
  const { id } = useParams();
  const [contact, setContact] = useState({});
  useEffect(() => {
    fetch(`https://learn-with-rahat-server.vercel.app/contact/${id}`)
      .then((res) => res.json())
      .then((data) => setContact(data));
  }, [id]);
  console.log(contact);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [message, setMessage] = useState(contact.message);
  const [type, setType] = useState(contact.type);
  const reset = () => {
    setEmail("");
    setMessage("");
    setType("");
    setName("");
  };
  const handelCommentUpdate = (e) => {
    e.preventDefault();
    const comment = {
      name,
      email,
      message,
      type,
    };
    console.log(comment);
  };
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  ">
      <div className="font-serif items-center text-center mt-8 mb-5">
        <h1 className="text-3xl font-bold  text-black">Say Something</h1>
      </div>
      <div>
        <form
          onSubmit={handelCommentUpdate}
          className=" bg-gray-100  rounded-lg px-12 mb-5 py-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="firstName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" Name"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />

            <input
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
            />
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered mt-8  bg-white shadow-xl mb-8 h-32 w-full"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <div className="text-gray-700  mt-5 mb-5 text-center justify-center mx-auto">
            <div className="flex">
              <span className="me-4"> Subject:</span>
              <span className="me-3">
                <input
                  type="radio"
                  name="General"
                  value={type === "General"}
                  onChange={() => setType("General")}
                  id="General"
                  className="text-7xl"
                />{" "}
                General
              </span>
              <span className="me-3">
                <input
                  type="radio"
                  name="SayHi"
                  value={type === "SayHi"}
                  onChange={() => setType("SayHi")}
                  id="General"
                  className="text-7xl "
                />{" "}
                Say Hi
              </span>
              <span>
                <input
                  type="radio"
                  name="other"
                  id="other"
                  value={type === "other"}
                  onChange={() => setType("other")}
                  className="text-7xl"
                />{" "}
                Other
              </span>
            </div>{" "}
            <button className=" bg-red-500 mt-4  text-white font-bold rounded-lg shadow-2xl p-3">
              Submit Your Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUpdate;
