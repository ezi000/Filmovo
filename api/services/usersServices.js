import User from "../models/user.js";

export const get_user = async (username) => {
  return await User.findOne({ username: username }).exec();
};
