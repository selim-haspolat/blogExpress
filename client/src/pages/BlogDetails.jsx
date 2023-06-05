import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import UpdateBlogModal from "../components/UpdateBlogModal";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [blogDetail, setBlogDetail] = useState({
    title: "",
    image: "",
    content: "",
    tags: [],
  });
  const [userInfo, setUserInfo] = useState({});
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const url = "http://localhost:8080/api/";

  const getUserInfo = async (userId) => {
    try {
      const { data } = await axios.get(`${url}users/${userId}`);
      setUserInfo(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getBlog = async (id) => {
    try {
      const { data } = await axios.get(`${url}blog/${id}`);
      setBlogDetail(data.data);
      getUserInfo(data.data.userId);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`${url}blog/${id}`);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBlog(id);
  }, []);

  return (
    <div className="container flex flex-col items-center mx-auto gap-10 mt-10 mb-32">
      <h1 className="text-9xl font-light text-center break-all">{blogDetail?.title}</h1>
      <div className="flex justify-between items-end w-[80%] max-w-[1200px] border-b pb-3">
        <div>
          <p className="self-start">{userInfo?.username}</p>
          <p className="self-start">{userInfo?.email}</p>
        </div>
        <p>{blogDetail?.tags.join(", ")}</p>
      </div>
      <img
        className="w-[80%] max-w-[1200px]"
        src={blogDetail?.image}
        alt={blogDetail?.title}
      />
      <p className="w-[80%] max-w-[1200px] indent-10 text-gray-700">
        {blogDetail.content}
      </p>
      {user?._id === userInfo?._id && (
        <div className="flex gap-5 mt-5">
          <button
            onClick={() => setShowUpdateModal(true)}
            className="outline outline-1 outline-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded py-1 px-5  transition-colors"
          >
            Update
          </button>
          <button
            onClick={() => deleteBlog(id)}
            className="outline outline-1 outline-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded py-1 px-5  transition-colors"
          >
            Delete
          </button>
        </div>
      )}
      <UpdateBlogModal
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        blogDetail={blogDetail}
        setBlogDetail={setBlogDetail}
        getBlog={getBlog}
      />
    </div>
  );
};

export default BlogDetails;
