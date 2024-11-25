import React from "react";
import Hero from "../hero/Hero";

const Home: React.FC = ({ movies }) => {
  return <Hero movies={movies} />;
};

export default Home;
