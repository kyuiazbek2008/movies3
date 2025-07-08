import { useEffect } from "react";
import { useMoviesStore } from "../../../store/useMoviesStore";
import { useNavigate, useParams } from "react-router-dom";
import scss from "./CastPaage.module.scss";
const CastPage = () => {
  const { MoviesActor, getActors, loading } = useMoviesStore();

  const { id } = useParams();
  useEffect(() => {
    getActors(id);
  }, [id]);

  const navigate = useNavigate();
  return (
    <div style={{ paddingBlock: "30px" }} className={scss.Cast_actors}>
      {!loading ? (
        <div className="container">
          <div
            style={{ display: "flex", gap: "20px " }}
            className={scss.actors}
          >
            {MoviesActor.map((item, ind) => (
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                }}
                key={ind}
              >
                <img
                  onClick={() => navigate(`/detailActor/${item.id}`)}
                  style={{
                    width: "220px",
                    height: "220px",
                    objectPosition: "top",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                  src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                  alt=""
                />
                <h3 style={{ color: "white" }}>{item.character}</h3>
                <span style={{ color: "white" }}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CastPage;
