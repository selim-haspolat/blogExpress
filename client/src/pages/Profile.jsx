import React from "react";
import { Link, useLocation } from "react-router-dom";

const Profile = () => {
  const { state } = useLocation();
  return (
    <div className="flex mt-20 items-center justify-center gap-5">
      {state?.user ? (
        <img
          className="w-24 rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt="user Image"
        />
      ) : (
        <Link to="/" className="underline text-2xl">
          Home
        </Link>
      )}

      <div>
        <p>{state?.user?.username}</p>
        <p>{state?.user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
