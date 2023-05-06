import React from "react";

import { NavLink, Outlet } from "react-router-dom";
import Header from "../../Shared/Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <div className="drawer drawer-mobile pt-24">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            <li className="shadow-2xl bg-gray-100 mb-3 text-orange-400 font-bold text-xl">
              <NavLink
                to="/dashboard/CreateBlogPost"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 text-xl  font-bold"
                    : " text-red-400 text-xl  font-bold "
                }
              >
                Add New Blog
              </NavLink>
            </li>
            <li className="shadow-2xl bg-gray-100 mb-3 text-orange-400 font-bold text-xl">
              <NavLink
                to="/dashboard/CreateFeaturePost"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 text-xl  font-bold"
                    : " text-red-400 text-xl  font-bold "
                }
              >
                Add New Feature Course
              </NavLink>
            </li>
            <li className="shadow-2xl bg-gray-100 mb-3 text-orange-400 font-bold text-xl">
              <NavLink
                to="/dashboard/CreateRecentPost"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 text-xl  font-bold"
                    : " text-red-400 text-xl  font-bold "
                }
              >
                Add New Recent Course
              </NavLink>
            </li>
            <li className="shadow-2xl bg-gray-100 mb-3 text-orange-400 font-bold text-xl">
              <NavLink
                to="/dashboard/ContactCollection"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 text-xl  font-bold"
                    : " text-red-400 text-xl  font-bold "
                }
              >
                Contact Collection
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
