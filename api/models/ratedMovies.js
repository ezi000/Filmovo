import mongoose from "mongoose";

const ratedMoviesSchema = new mongoose.Schema({
  title: { type: String, required: true},
  poster: { type: String, required: true },
  rating: { type: Number, required: true },
  who_added: { type: String, required: true },
  who_addedID: { type: String, required: true }
});

const ratedMovie = mongoose.model("ratedMovie", ratedMoviesSchema);

export default ratedMovie;
