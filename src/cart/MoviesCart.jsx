import scss from "./MoviesCart.module.scss";
import CircleReiting from "../ui/СircleReiting/CircleReiting";
import { Skeleton } from "antd";
import { useMoviesStore } from "../store/useMoviesStore";
import { useNavigate } from "react-router-dom";
const MoviesCart = ({ item }) => {
  const { loading } = useMoviesStore();

  const navigate = useNavigate();
  function getChapterFirst(title) {
    if (title.length >= 20) {
      return title.slice(0, 20) + "...";
    }
    return title;
  }

  return (
    <div style={{ paddingBlock: "20px" }} className={scss.cart}>
      <div className="container">
        <div className={scss.content}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/movie/${item.id}`)}
            className={scss.imgBorder}
          >
            {loading ? (
              <Skeleton
                style={{ minHeight: "210px", minWidth: "230px" }}
                variant="rectangular"
                width={210}
                height={350}
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  flexDirection: "column",
                }}
              >
                <img
                  style={{
                    width: 210,
                    height: 350,
                  }}
                  alt={item.title}
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
                <div className={scss.title}>
                  <CircleReiting
                    className={scss.reiting}
                    number={+item.vote_average.toFixed(1)}
                  />

                  <h1
                    style={{
                      fontSize: "18px",
                      color: "white",
                    }}
                  >
                    {getChapterFirst(
                      item.title ? item.title : item.original_name
                    )}
                  </h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCart;
