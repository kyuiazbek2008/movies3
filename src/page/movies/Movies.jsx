import React, { useEffect } from "react";
import { useMoviesStore } from "../../store/useMoviesStore";
import { useParams } from "react-router-dom";

const Movies = () => {
  const { getPopular, movies } = useMoviesStore();
  const name = useParams();
  useEffect(() => {
    getPopular(name.name);
  }, [name.name]);

  return (
    <div>
      {movies.map((item, ind) => (
        <div key={ind}>
          <h1>{item.original_name}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Movies;
