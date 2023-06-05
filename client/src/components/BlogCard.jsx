import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleContent = (content) => {
    if (content.length > 30) return content.slice(0, 30) + "...";
    else return content;
  };

  return (
    <div className="rounded-xl overflow-hidden w-80 h-56">
      <img
        onClick={() => navigate(`/${blog._id}`)}
        src={blog?.image}
        alt="blog_img"
        className="h-40 border w-full object-cover cursor-pointer"
      />
      <h2 className="text-lg text-center uppercase">{blog?.title}</h2>
      <p className="indent-5 border-b pb-2">{handleContent(blog?.content)}</p>
    </div>
  );
};

export default BlogCard;
