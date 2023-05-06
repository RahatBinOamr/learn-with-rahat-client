import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

import { toast } from "react-toastify";
const ContactCollection = () => {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    fetch(`https://learn-with-rahat-server.vercel.app/contact`)
      .then((res) => res.json())
      .then((data) => setContact(data));
  }, []);
  const handelDeleteContact = (_id) => {
    fetch(`https://learn-with-rahat-server.vercel.app/contact/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const remaining = contact.filter((user) => user._id !== _id);
          setContact(remaining);
          toast.success(" Data deleted successfully");
          console.log(data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full h-full bg-slate-200 pt-14 pb-24">
      <div className="font-serif items-center text-center mt-8 mb-10">
        <h1 className="text-3xl font-bold  text-black">What people say</h1>
      </div>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-5">
        {contact.length === 0 ? (
          <>
            <h1 className="text-2xl font-bold text-red-500">
              No contact found !!!
            </h1>
          </>
        ) : (
          <>
            {contact.map((data) => (
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
                      <div className="flex">
                        <h4 className="font-bold me-3">{data.name}</h4>
                        <MdDelete
                          onClick={() => handelDeleteContact(data._id)}
                        />
                      </div>
                      <span className="text-xs dark:text-gray-400">
                        {data.email}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                  <p>{data.message}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ContactCollection;
