import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoutes from "./api/routes/users.js";
import movieRoutes from "./api/routes/movies.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

// Połączenie z bazą danych MongoDB
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.ihmeufb.mongodb.net/`
);

const app = express(); // Tworzenie instancji aplikacji express
app.use(cors({
  origin: 'https://localhost:5173', 
  credentials: true, 
}));
app.use(cookieParser());
app.use(express.json());

// Dodanie tras dla endpointów użytkowników i filmów
app.use("/users", userRoutes);
app.use("/movies", movieRoutes);

// Obsługa żądań dla nieznalezionych ścieżek
app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
