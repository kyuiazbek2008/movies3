import { useEffect } from "react";
import { useMoviesStore } from "../../store/useMoviesStore";
import scss from "./Movies.module.scss";
import ReitingDetail from "../../ui/ReitingDetail/ReitingDetail";
import { useNavigate } from "react-router-dom";
const Movies = () => {
  const { getAllMovies, allMovies, loader } = useMoviesStore();
  useEffect(() => {
    getAllMovies();
  }, []);
  console.log(allMovies);

  const navigate = useNavigate();
  return (
    <>
      {!loader ? (
        <div className={scss.block}>
          <div className="container">
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
    </>
  );
};

export default Movies;
