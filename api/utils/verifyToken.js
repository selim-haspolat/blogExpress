import jwt from "jsonwebtoken";
import { createError } from "./error.js";
import Blog from "../models/Blog.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(404, "Token not found"));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(401, "Token is invalid"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(401, "You are not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user) {
      if (req.user.isAdmin) next();
      else return next(createError(403, "You are not authorized"));
    } else {
      return next(createError(403, "You are not authorized"));
    }
  });
};

export const verifyBlogUsers = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user) {
      next();
    } else {
      return next(createError(401, "Token not found"));
    }
  });
};

export const verifyBlogOnlyUser = (req, res, next) => {
  verifyToken(req, res, async () => {
    if (req.user) {
      try {
        const blog = await Blog.findById(req.params.id);
        if (req.user.id === blog.userId) next();
        else return next(createError(403, "You are not authorized"));
      } catch (error) {
        return next(error);
      }
    } else {
      return next(createError(401, "Token not found"));
    }
  });
};
