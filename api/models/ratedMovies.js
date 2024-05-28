import mongoose from "mongoose";

/**
 * Schemat Mongoose dla ocenionych filmów.
 * Definiuje tytuł, plakat, ocenę oraz informacje o osobie, która dodała film.
 */
const ratedMoviesSchema = new mongoose.Schema({
  title: { type: String, required: true},
  poster: { type: String, required: true },
  rating: { type: Number, required: true },
  who_added: { type: String, required: true },
  who_addedID: { type: String, required: true }
});

/**
 * Model Mongoose dla kolekcji ocenionych filmów.
 */
const ratedMovie = mongoose.model("ratedMovie", ratedMoviesSchema);

export default ratedMovie;
