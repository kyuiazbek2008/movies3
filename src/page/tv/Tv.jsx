import { useEffect } from "react";
import { useMoviesStore } from "../../store/useMoviesStore";
import scss from "./Tv.module.scss";
import ReitingDetail from "../../ui/ReitingDetail/ReitingDetail";
import { useNavigate } from "react-router-dom";
const Tv = () => {
  const { tv, getAllTv, loader } = useMoviesStore();
  useEffect(() => {
    getAllTv();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {!loader ? (
        <div className={scss.block}>
          <div className="container">
            <h1 style={{ color: "white", fontSize: "30px" }}>
              Search results of: {name}
            </h1>
            <div style={{ paddingBlock: "20px" }} className={scss.blockContent}>
              {tv?.map((item, index) =>
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
                        {item.name.length > 15
                          ? `${item.name.slice(0, 15)}...`
                          : item.name}
                      </h1>
                      <h4>{item.name}</h4>
                    </div>
                  </div>
                )
              )}
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

export default Tv;
