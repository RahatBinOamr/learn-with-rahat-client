import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const reset = () => {
    setEmail("");
    setMessage("");
    setType("");
    setName("");
  };
  const handelContact = (e) => {
    e.preventDefault();
    const contact = {
      name,
      email,
      message,
      type,
    };
    console.log(contact);
    fetch(` https://learn-with-rahat-server.vercel.app/contact`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("hello", data);
        if (data.acknowledged) {
          toast.success("Your contact successfully");
          reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <section className="pt-24 dark:bg-gray-200 dark:text-gray-900">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Fake address, 9999 City</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>123456789</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>contact@business.com</span>
            </p>
          </div>
        </div>
        <form
          onSubmit={handelContact}
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
    </section>
  );
};

export default Contact;
