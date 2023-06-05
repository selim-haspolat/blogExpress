import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import Filter from "../components/Filter";
import Loading from "../helper/Load";
import { useSelector } from "react-redux";
import CreateBlog from "../components/CreateBlog";
import CreateBlogModal from "../components/CreateBlogModal";

const Home = ({ loading, setLoading }) => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("all");
  const [limit, setLimit] = useState(NaN);
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const BASE_URL = "http://localhost:8080/api";

  const getBlogs = async () => {
    setLoading(true);
    try {
      const endPoint = { tag: "", title: "", limit: "" };
      if (tag !== "all") {
        endPoint.tag = `tag=${tag}`;
      }
      if (title) {
        endPoint.title = `title=${title}`;
      }
      if (limit) {
        endPoint.limit = `limit=${limit}`;
      }
      const { data } = await axios(
        `${BASE_URL}/blog?${Object.values(endPoint)
          .filter((x) => x.length > 0)
          .join("&")}`
      );
      setBlogs(data.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, [title, tag, limit]);

  return (
    <div className="grid grid-cols-6 mt-20">
      {user ? (
        <Filter
          tag={tag}
          setTag={setTag}
          title={title}
          setTitle={setTitle}
          limit={setLimit}
          setLimit={setLimit}
        />
      ) : (
        ""
      )}

      {loading ? (
        <Loading />
      ) : blogs.length > 0 ? (
        <div
          className={`container ${
            user ? "col-span-5" : "col-span-6"
          } mx-auto flex justify-center gap-10 flex-wrap`}
        >
          {blogs.map((b) => (
            <BlogCard key={b?._id} blog={b} />
          ))}
        </div>
      ) : (
        <div className="mx-auto col-span-5 mt-20 text-3xl ">
          There is no Blog
        </div>
      )}
      <CreateBlogModal
        showModal={showModal}
        setShowModal={setShowModal}
        getBlogs={getBlogs}
      />
      {user ? (
        <CreateBlog showModal={showModal} setShowModal={setShowModal} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
