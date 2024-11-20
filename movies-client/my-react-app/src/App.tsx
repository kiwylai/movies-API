import "./App.css";
import apiClient from "./api/axiosConfig";
import { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[] | undefined>(undefined);

  const getMovies = async () => {
    try {
      const response = await apiClient.get("api/v1/movies");

      console.log(response.data);

      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <></>;
}

export default App;
