import express from "express";
import checkAuth from "../middleware/checkAuth.js";
import { get_user } from "../services/usersServices.js";
import ratedMovie from "../models/ratedMovies.js";

const router = express.Router();

/**
 * Route dodawania nowego filmu.
 * Sprawdza uwierzytelnienie użytkownika, pobiera informacje o użytkowniku,
 * tworzy nowy dokument filmu i zapisuje go w bazie danych.
 */

router.post("/addMovie", checkAuth, async (req, res) => {
  try {
    const user = await get_user(req.username);
    if (user == undefined) {
      return res.json({ message: "Cannot add movie" });
    }

      const newRatedMovie = new ratedMovie({
        title: req.body.title,
        poster: req.body.poster,
        rating: req.body.rating,
        who_added: user.username,
        who_addedID: user._id,
      });
    
    await newRatedMovie.save();
    res.status(201).json({ message: "Created movie" });

  } catch (error) {
    res.status(500).json(error);
  }
});

/**
 * Route pobierania listy ocenionych filmów.
 * Zwraca listę wszystkich ocenionych filmów z bazy danych.
 */
router.get("/getMoviesList", async (req, res) => {
  try {
    const movies = await ratedMovie.find();
    res.status(201).json({ message: "Got movies list", movies: movies});
  } catch (error) {
    res.status(500).json(error);
  }
});

/**
 * Route usuwania filmu.
 * Sprawdza uwierzytelnienie i uprawnienia użytkownika, a następnie usuwa film o podanym ID.
 */
router.delete("/deleteMovie/:id", checkAuth, async (req, res) => {
  try {
    const user = await get_user(req.username);
    if (user == undefined) {
      return res.json({ message: "Cannot delete movie" });
    }

    if (!user.isAdmin) {
      return res.json({ message: "Cannot delete movie" });
    }

    await ratedMovie.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: "Deleted movie" });
  } catch (error) {
    res.status(500).json(error);
  }
});



export default router;
