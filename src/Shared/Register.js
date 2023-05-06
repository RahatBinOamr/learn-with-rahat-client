import React, { useContext, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { AuthContext } from "../Context/UserContext";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { createUser, updateName, verifyEmail, signInWithGoogle } =
    useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();

    //1. Create Account
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        //2. Update Name
        updateName(name)
          .then(() => {
            toast.success("Name Updated");

            //3. Email verification
            verifyEmail()
              .then(() => {
                toast.success("Please check your email for verification link");
                navigate(from, { replace: true });
              })
              .catch((error) => {
                toast.error(error.message);
              });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => console.log(error));
  };

  // Google Signin
  const handleGoogleSignin = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
      navigate(from, { replace: true });
    });
  };
  return (
    <div className=" p-20">
      <div className="  w-full mx-auto  max-w-md p-8 space-y-3 rounded-xl bg-gray-300 shadow-2xl">
        <h1 className="text-3xl font-bold text-orange-400 text-center">
          Sign Up
        </h1>
        <form
          onSubmit={handleSubmit}
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block dark:text-gray-400">
              You Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter Your name"
              className="input input-ghost w-full bg-white shadow-2xl input-bordered"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="email" className="block dark:text-gray-400">
              You Email
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter Your Email Address"
              className="input input-ghost w-full bg-white shadow-2xl input-bordered"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="input input-ghost w-full bg-white shadow-2xl input-bordered"
            />
            <div className="flex justify-end text-xs dark:text-gray-400">
              <Link rel="noopener noreferrer">Forgot Password?</Link>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm bg-orange-500 text-white">
            Sign Up
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 "></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 "></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleSignin}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <FcGoogle className="text-2xl font-bold" />
          </button>
          <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
            <FaTwitter className="text-2xl font-bold text-orange-400" />
          </button>
          <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <BsGithub className="text-2xl font-bold text-orange-400" />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          have an account?
          <Link
            rel="noopener noreferrer"
            to={"/login"}
            className="underline text-orange-400"
          >
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
