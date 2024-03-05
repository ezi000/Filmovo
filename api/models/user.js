import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: String,
  isAdmin: Boolean,
});

const User = mongoose.model("User", userSchema);

export default User;
