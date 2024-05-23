import user from "../models/user.js";

export const get_user = async (username) => {
  return await user.findOne({ username: username }).exec();
};
