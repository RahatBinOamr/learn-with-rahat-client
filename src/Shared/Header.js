import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import logo from "../Images/logo.png";
const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const handleMenuToggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scroll
          ? "backdrop-brightness-200 shadow-md text-gray-700 hover:text-black"
          : "backdrop-brightness-200 text-black"
      }  fixed w-full z-50 transition  duration-500`}
    >
      <div className=" px-2 py-3 flex items-center justify-between max-w-screen-xl mx-auto">
        {" "}
        <div className="flex items-center justify-center">
          {" "}
          <Link to={"/"}>
            <img src={logo} alt="" className="w-14 h-14 rounded-full me-3" />
          </Link>
          <Link to="/">
            <h1 className=" text-black font-bold ">LearnWith </h1>
            <p className="text-red-400 font-bold">RAHAT </p>
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center">
          <NavLink
            to={"/home"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 text-xl me-3 font-bold"
                : "text-xl me-3 font-bold"
            }
          >
            Home
          </NavLink>

          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 text-xl me-3 font-bold"
                : "text-xl me-3 font-bold"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 text-xl me-3 font-bold"
                : "text-xl me-3 font-bold"
            }
          >
            Contact
          </NavLink>
          {user ? (
            <>
              <NavLink
                to={"/dashboard"}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 text-xl me-3 font-bold"
                    : "text-xl me-3 font-bold"
                }
              >
                Dashboard
              </NavLink>
              <button
                onClick={logout}
                className="btn btn-outline btn-error btn-sm "
              >
                log out
              </button>
            </>
          ) : (
            <>
              <Link to={"/Login"} className="me-3 font-medium">
                <button className="btn btn-outline btn-error btn-sm ">
                  sign in
                </button>
              </Link>
              <Link to={"/register"} className="me-3 font-medium">
                <button className="btn btn-sm">sign up</button>
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            className={`${
              open ? "text-black" : "text-black"
            } focus:outline-none hover:text-gray-400`}
          >
            {open ? (
              <ImCross size={20} className="me-5" />
            ) : (
              <FiMenu size={20} className="me-5" />
            )}
          </button>
        </div>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <div className={`${open ? "block" : "hidden"} md:hidden text-black `}>
        <Link to="/" className="me-3 font-medium">
          Home
        </Link>

        <Link to="/" className="me-3 font-medium">
          Blog
        </Link>
        <Link to="/" className="me-3 font-medium">
          Contact
        </Link>
        <Link className="me-3 font-medium">
          <button className="btn btn-outline btn-error btn-sm ">sign in</button>
        </Link>
        <Link className="me-3 font-medium">
          <button className="btn btn-sm">sign up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
