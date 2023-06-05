import React, { useState } from "react";
import axios from "axios";

const CreateBlogModal = ({ showModal, setShowModal, getBlogs }) => {
  const [postData, setPostData] = useState({
    title: "",
    image: "",
    tags: [],
    content: "",
  });
  const closeModal = () => {
    setShowModal(false);
  };
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleCheckboxClick = (e) => {
    if (postData.tags.includes(e.target.value)) {
      const index = postData.tags.indexOf(e.target.value);
      const tags = postData.tags;
      tags.splice(index, 1);
      setPostData({ ...postData, tags });
    } else {
      const tags = postData.tags;
      tags.push(e.target.value);
      setPostData({ ...postData, tags });
    }
  };

  const instance = axios.create({
    baseURL: "http://localhost:8080/api",
    withCredentials: true,
  });

  const postBlog = async (data) => {
    try {
      await instance.post(`/blog`, data);
      getBlogs();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postBlog(postData);
    setPostData({
      title: "",
      image: "",
      tags: [],
      content: "",
    });
    closeModal();
  };

  return (
    <div
      onClick={handleModalClick}
      className={`backdrop-blur-sm w-[100vw] h-[100vh] fixed top-0 left-0 z-50 ${
        showModal ? "flex" : "hidden"
      } flex-col justify-center items-center`}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-[500px] px-10 py-5 bg-blue-100/50"
      >
        <h1 className="text-5xl uppercase text-center font-light pb-5 mb-5 border-b">
          Create Blog
        </h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-gray-600 text-xl">
            Title
          </label>
          <input
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            type="text"
            id="title"
            className="px-4 py-2 outline-none border w-full focus:border-gray-400"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="image" className="text-gray-600 text-xl">
            Image
          </label>
          <input
            value={postData.image}
            onChange={(e) =>
              setPostData({ ...postData, image: e.target.value })
            }
            type="text"
            id="image"
            className="px-4 py-2 outline-none border w-full focus:border-gray-400"
            required
          />
        </div>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
          <div>
            <input
              onChange={handleCheckboxClick}
              type="checkbox"
              id="sport"
              value="sport"
              name="tag"
            />
            <label className="pl-1" htmlFor="sport">
              Sport
            </label>
          </div>
          <div>
            <input
              onChange={handleCheckboxClick}
              type="checkbox"
              id="travel"
              value="travel"
              name="tag"
            />
            <label className="pl-1" htmlFor="travel">
              Travel
            </label>
          </div>
          <div>
            <input
              onChange={handleCheckboxClick}
              type="checkbox"
              id="food"
              value="food"
              name="tag"
            />
            <label className="pl-1" htmlFor="food">
              Food
            </label>
          </div>
          <div>
            <input
              onChange={handleCheckboxClick}
              type="checkbox"
              id="game"
              value="game"
              name="tag"
            />
            <label className="pl-1" htmlFor="game">
              Game
            </label>
          </div>
          <div>
            <input
              onChange={handleCheckboxClick}
              type="checkbox"
              id="software"
              value="software"
              name="tag"
            />
            <label className="pl-1" htmlFor="software">
              Software
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="content" className="text-gray-600 text-xl">
            Content
          </label>
          <textarea
            value={postData.content}
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
            }
            name="content"
            id="content"
            className="outline-none border h-32 max-h-80 focus:border-gray-400 px-4 py-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="outline outline-1 outline-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded py-1 transition-colors"
        >
          Create
        </button>
        <button
          onClick={closeModal}
          className="outline outline-1 outline-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded py-1 transition-colors"
        >
          close
        </button>
      </form>
    </div>
  );
};

export default CreateBlogModal;
