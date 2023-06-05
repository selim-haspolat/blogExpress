import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import { useState } from "react";
import PrivateRouter from "./PrivateRouter";
import BlogDetails from "../pages/BlogDetails";
import Profile from "../pages/Profile";

const AppRouter = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home loading={loading} setLoading={setLoading} />}
        />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/:id" element={<BlogDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default AppRouter;
