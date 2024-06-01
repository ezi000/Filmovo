import mongoose from "mongoose";

/**
 * Schemat Mongoose dla użytkowników.
 * Definiuje nazwę użytkownika, hasło oraz status administratora.
 */
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

export default User;
