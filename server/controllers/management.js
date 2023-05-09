import mongoose from "mongoose";
import User from "../models/User,js";

const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    req.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
