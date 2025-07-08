import { useNavigate, useParams } from "react-router-dom";
import { useMoviesStore } from "../../store/useMoviesStore";
import ReitingDetail from "../../ui/ReitingDetail/ReitingDetail";
import scss from "./Search.module.scss";
import { useEffect } from "react";
const Search = () => {
  const { getSearch, search } = useMoviesStore();
  const { name } = useParams();
  useEffect(() => {
    getSearch(name);
  }, [name]);
  console.log(name);

  const navigate = useNavigate();
  return (
    <div className={scss.block}>
      <div className="container">
        <h1 style={{ color: "white", fontSize: "30px" }}>
          Search results of: {name}
        </h1>
        <div style={{ paddingBlock: "20px" }} className={scss.blockContent}>
          {search.map((item, index) =>
            item.poster_path == null ? (
              ""
            ) : (
              <div className={scss.cart} key={index}>
                <div
                  onClick={() => navigate(`/movie/${item.id}`)}
                  className={scss.content}
                >
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
                  <h4>{item.release_date || item.first_air_date}</h4>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
