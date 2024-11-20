import "./App.css";
import apiClient from "./api/axiosConfig";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";

interface Movie {
  id: number;
  title: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[] | undefined>(undefined);

  const getMovies = async () => {
    try {
      const response = await apiClient.get("api/v1/movies");

      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={Layout}></Route>
      </Routes>
    </>
  );
}

export default App;
