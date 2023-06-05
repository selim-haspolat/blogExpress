import express from "express";
import User from "../models/User.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/", verifyAdmin, async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const { isAdmin, password, ...otherDetails } = user._doc;
    res.status(200).json({ success: true, data: otherDetails });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", verifyUser, async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", verifyUser, async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({ success: true, msg: "User deleted" });
  } catch (error) {
    next(error);
  }
});

export default router;
