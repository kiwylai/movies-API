import "./App.css";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";

interface Movie {
  imdbId: string;
  title: string;
  poster: string;
  backdrops: string[];
  trailerLink: string;
  reviews: Review[];
}

interface Review {
  body: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[] | undefined>(undefined);
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [reviews, setReviews] = useState<Review[]>([]);

  const getMovies = async () => {
    try {
      const response = await api.get<{ data: Movie[] }>("/api/v1/movies");
      setMovies(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getMovieData = async (movieId: string) => {
    try {
      const response = await api.get<{ data: Movie }>(
        `/api/v1/movies/${movieId}`
      );
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviews);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route index element={<Home movies={movies} />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route
            path="/Reviews/:movieId"
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
