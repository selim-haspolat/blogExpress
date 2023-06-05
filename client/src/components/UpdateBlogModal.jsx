import axios from "axios";
import React from "react";

const UpdateBlogModal = ({
  showUpdateModal,
  setShowUpdateModal,
  blogDetail,
  setBlogDetail,
  getBlog,
}) => {
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowUpdateModal(false);
    }
  };

  const handleCheckboxClick = (e) => {
    if (blogDetail.tags.includes(e.target.value)) {
      const index = blogDetail.tags.indexOf(e.target.value);
      const tags = blogDetail.tags;
      tags.splice(index, 1);
      setBlogDetail({ ...blogDetail, tags });
    } else {
      const tags = blogDetail.tags;
      tags.push(e.target.value);
      setBlogDetail({ ...blogDetail, tags });
    }
  };

  const url = "http://localhost:8080/api/";

  const updateBlog = async (id) => {
    try {
      await axios.put(`${url}blog/${id}`, blogDetail);
      getBlog(id);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog(blogDetail._id);
    setShowUpdateModal(false);
  };

  return (
    <div
      onClick={handleModalClick}
      className={`backdrop-blur-sm w-full h-[100vh] fixed z-50 left-0 top-0 ${
        showUpdateModal ? "flex" : "hidden"
      } items-center justify-center`}
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
            value={blogDetail.title}
            onChange={(e) =>
              setBlogDetail({ ...blogDetail, title: e.target.value })
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
            value={blogDetail.image}
            onChange={(e) =>
              setBlogDetail({ ...blogDetail, image: e.target.value })
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
              checked={blogDetail.tags.includes("sport")}
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
              checked={blogDetail.tags.includes("travel")}
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
              checked={blogDetail.tags.includes("food")}
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
              checked={blogDetail.tags.includes("game")}
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
              checked={blogDetail.tags.includes("software")}
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
            value={blogDetail.content}
            onChange={(e) =>
              setBlogDetail({ ...blogDetail, content: e.target.value })
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
          Update
        </button>
        <button
          type="button"
          onClick={() => setShowUpdateModal(false)}
          className="outline outline-1 outline-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded py-1 transition-colors"
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default UpdateBlogModal;
