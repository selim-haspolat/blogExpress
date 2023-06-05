import express from "express";
import Blog from "../models/Blog.js";
import {
  verifyAdmin,
  verifyBlogUsers,
  verifyBlogOnlyUser,
} from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", verifyBlogUsers, async (req, res, next) => {
  try {
    const blog = new Blog(req.body);
    blog.userId = req.user.id;
    await blog.save();
    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  const { title, tag, limit } = req.query;

  const query = {};

  if (title) query.title = { $regex: title, $options: "i" };

  if (tag) {
    query.tags = { $in: tag.split(",") };
  }

  try {
    const blogs = await Blog.find(query).limit(parseInt(limit)).exec();

    res.status(200).json({ success: true, length: blogs.length, data: blogs });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", verifyBlogUsers, async (req, res, next) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", verifyBlogOnlyUser, async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ success: true, data: updatedBlog });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", verifyBlogOnlyUser, async (req, res, next) => {
  const { id } = req.params;
  try {
    await Blog.findByIdAndDelete(id);
    res.status(204).json({ success: true, msg: "Successfully deleted" });
  } catch (error) {
    next(error);
  }
});

export default router;
