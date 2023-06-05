import React from "react";

const CreateBlog = ({ showModal, setShowModal }) => {
  return (
    <div className="fixed bottom-10 right-10 flex items-center gap-3 flex-row-reverse group">
      <div onClick={() => setShowModal(!showModal)} className="w-16 h-16 rounded-full bg-cyan-500/70 flex items-center justify-center text-white cursor-pointer">
        <svg
          fill="#ffffff"
          height="30px"
          width="30px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 455 455"
          xmlSpace="preserve"
          stroke="#ffffff"
          strokeWidth="15"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 455,242.5 " />
          </g>
        </svg>
      </div>
      <span className="text-gray-700 text-xl opacity-0 group-hover:opacity-100 transition-opacity">
        Create Blog
      </span>
    </div>
  );
};

export default CreateBlog;
