import jwt from "jsonwebtoken";
import User from "../models/user.js";

const  checkAuth= async(req, res, next) =>{
  const token = req?.cookies?.token;

  if (!token) {
    return next();
  }

  try {
    const data = jwt.verify(token, process.env.JWT_KEY);
    console.log(data);
    const user = await User.findOne({ username: data.username });
    console.log(user)
    req.user = user;
    return next();
  } catch (err) {
    return res.status(403).json({ message: "Authorization error" });
  }
}

export default checkAuth;
