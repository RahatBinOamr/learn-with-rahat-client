import { createBrowserRouter } from "react-router-dom";
import Main from "../Layou/Main";
import Home from "../Component/Home/Home";
import FeaturedCoursesDetails from "../Component/FeaturedCoursesDetails/FeaturedCoursesDetails";
import Login from "../Shared/Login";
import Register from "../Shared/Register";
import Error from "../Shared/Error";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Dashboard/Dashboard/DashboardLayout";

import Blogs from "../Blog/Blog/Blogs";
import BlogDetails from "../Blog/Blog/BlogDetails";
import Contact from "../Component/Contact/Contact";
import CreatePost from "../Blog/CreateBlogPost/CreatePost";
import CreateFeaturePost from "../Component/FeaturedCourses/CreateFeaturePost";
import CreateRecentPost from "../Component/RecentCourses/CreateRecentCourse";
import ContactCollection from "../Component/Contact/ContactCollection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blog", element: <Blogs /> },
      { path: "/blog/:id", element: <BlogDetails /> },
      {
        path: "/FeaturedCoursesDetails/:id",
        element: (
          <PrivateRoute>
            <FeaturedCoursesDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard/CreateBlogPost", element: <CreatePost /> },
      { path: "/dashboard/CreateFeaturePost", element: <CreateFeaturePost /> },
      { path: "/dashboard/CreateRecentPost", element: <CreateRecentPost /> },
      { path: "/dashboard/ContactCollection", element: <ContactCollection /> },
    ],
  },
]);
export default router;
