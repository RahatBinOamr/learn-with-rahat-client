import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogPagination from "./BlogPagination";
import BlogLoading from "./BlogLoading";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  useEffect(() => {
    fetch(`https://learn-with-rahat-server.vercel.app/blog`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  const getUniqueData = (data, property) => {
    let newValue = data.map((curElement) => {
      return curElement[property];
    });
    return (newValue = ["All", ...new Set(newValue)]);
  };
  const onlyCategoryData = getUniqueData(blogs, "category");

  const categoryData = (data) => {
    blogs.filter((currentElement) => {
      if (currentElement.category === "All") {
        return currentElement;
      } else {
        return currentElement.category === data;
      }
    });
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  <BlogLoading />;
  return (
    <div className="w-full pt-14 pb-10 bg-slate-200 text-black">
      <section className=" sm:py-12   pt-10 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <input
          type="text"
          placeholder="Search "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="  w-full text-gray-700  py-1 px-2 border border-gray-800 mb-4 leading-tight "
        />
        <div>
          {onlyCategoryData.map((currentElement, i) => {
            return (
              <button
                key={i}
                className="bg-red-300 text-white font-bold p-2 me-2 rounded-xl"
                onClick={() => categoryData(currentElement)}
              >
                {currentElement}
              </button>
            );
          })}
        </div>
        <div className="container pt-10  mx-auto space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {currentPosts
              .filter((data) => data.title.toLowerCase().includes(searchTerm))
              .map((blog, i) => (
                <>
                  <article key={i} className="flex flex-col shadow-lg ">
                    <Link
                      rel="noopener noreferrer"
                      to={`/blog/${blog._id}`}
                      aria-label="Te nulla oportere reprimique his dolorum"
                    >
                      <img
                        alt=""
                        className=" w-full h-52 dark:bg-gray-500"
                        src={blog.imgUrl}
                      />
                    </Link>
                    <div className="flex flex-col flex-1 p-6">
                      <Link
                        rel="noopener noreferrer"
                        to={`/blog/${blog._id}`}
                        aria-label="Te nulla oportere reprimique his dolorum"
                      ></Link>
                      <Link
                        rel="noopener noreferrer"
                        to={`/blog/${blog._id}`}
                        className="text-lg tracking-wider  uppercase hover:underline dark:text-violet-900"
                      >
                        {blog.title}
                      </Link>
                      <Link to={`/blog/${blog._id}`}>
                        <h2 className="flex-1 py-2 text-sm font-semibold ">
                          {blog.summary?.length > 100 ? (
                            <> {blog.summary?.slice(0, 100) + "..."} </>
                          ) : (
                            blog.summary
                          )}
                        </h2>
                      </Link>
                      <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                        <span>June 1, 2020</span>
                        <span>2.1K views</span>
                      </div>
                    </div>
                  </article>
                </>
              ))}
          </div>
        </div>
      </section>
      <div className=" mx-auto text-center mt-10 ">
        <BlogPagination
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          totalPosts={blogs.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Blogs;
