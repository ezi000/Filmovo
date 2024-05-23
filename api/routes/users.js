import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
const router = express.Router();

router.post("/signup", async (req, res, _next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
      isAdmin: false,
    });
    await user.save();
    res.status(201).json({ message: "Created user" });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res, _next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(403).json({ message: "Authorization error" });
    }

    const bcryptResult = await bcrypt.compare(req.body.password, user.password);

    if (!bcryptResult) {
      return res.status(403).json({ message: "Authorization error" });
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_KEY, {
      expiresIn: "3h",
    });


    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json({
        message: "Logged in",
        token,
        user: { userId: user._id, username: user.username, isAdmin: user.isAdmin } ,
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token",{httpOnly: true, secure: true});
  return res.json({ message: "Logged out" });
});

export default router;
