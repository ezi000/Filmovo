import user from "../models/user.js";

/**
 * Funkcja pobierająca użytkownika na podstawie nazwy użytkownika.
 */
export const get_user = async (username) => {
  return await user.findOne({ username: username }).exec();
};
