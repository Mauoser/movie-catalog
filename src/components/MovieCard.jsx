import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <p key={movie.id} className="text-white">
        {movie.title}
      </p>
    </div>
  );
};

export default MovieCard;
