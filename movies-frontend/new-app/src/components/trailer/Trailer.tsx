import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Trailer.css";
import React from "react";

// interface TrailerParams {
//   ytTrailerId?: string;
// }

const Trailer: React.FC = () => {
  const params = useParams<Record<string, string | undefined>>();
  const key = params.ytTrailerId;
  console.log("useParams output:", params);

  return (
    <div className="react-player-container">
      {key ? (
        <ReactPlayer
          controls={true}
          playing={true}
          url={`https://www.youtube.com/watch?v=${key}`}
          width="100%"
          height="100%"
        />
      ) : (
        <div>Invalid trailer link or trailer ID not found.</div>
      )}
    </div>
  );
};

export default Trailer;
