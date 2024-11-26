import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const Hero: React.FC = ({ movies }) => {
  return (
    <div className="movie-carousel-sontainer">
      <Carousel>
        {movies?.map((movie) => {
          return (
            <Paper>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{ "--img": `url(${movie.backdrops[0]})` }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} />
                    </div>
                    <div className="movie-title">
                      <h4></h4>
                      {movie.title}
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
