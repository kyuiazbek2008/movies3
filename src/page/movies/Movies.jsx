import { useEffect, useState } from "react";
import { useMoviesStore } from "../../store/useMoviesStore";
import scss from "./Movies.module.scss";
import ReitingDetail from "../../ui/ReitingDetail/ReitingDetail";
import { useNavigate } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
const Movies = () => {
  const { getAllMovies, allMovies, loader } = useMoviesStore();
  const [value, setValue] = useState("all");

  useEffect(() => {
    getAllMovies(value);
  }, [value]);

  const navigate = useNavigate();

  return (
    <div className={scss.block}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "end", gap: "20px" }}>
          <select
            onChange={(e) => setValue(e.target.value)}
            style={{
              color: "white",
              background: "black",
              padding: "5px",
              border: "none",
              border: "1px solid green",
              borderRadius: "4px",
              height: "35px",
            }}
          >
            <option value="all">all</option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="9648">Mystery</option>
            <option value="878">Science Fiction</option>
            <option value="14">Fantasy</option>
            <option value="10752">War</option>
            <option value="10768">Politics</option>
            <option value="37">Western</option>
          </select>
        </div>
        {!loader ? (
          <div className={scss.block}>
            <div style={{ paddingBlock: "20px" }} className={scss.blockContent}>
              {allMovies.map((item, index) => (
                <div className={scss.cart} key={index}>
                  <div
                    onClick={() => navigate(`/movie/${item.id}`)}
                    className={scss.content}
                  >
                    <select name="" id="">
                      <option value="">{}</option>
                    </select>
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                      alt=""
                    />
                    <h1>
                      <ReitingDetail
                        className={scss.reiting}
                        number={
                          item.vote_average == undefined ||
                          item.vote_average.toFixed(1)
                        }
                      />
                    </h1>
                  </div>
                  <div className={scss.textContent}>
                    <h1>
                      {item.title.length > 15
                        ? `${item.title.slice(0, 15)}...`
                        : item.titles}
                    </h1>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgb(2%, 9%, 18%)",
              width: "100%",
              height: "100vh",
            }}
          >
            <h1 style={{ fontSize: "50px", color: "white" }}>Loading...</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
