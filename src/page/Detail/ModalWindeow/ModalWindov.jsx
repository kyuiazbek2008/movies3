import { useParams } from "react-router-dom";
import { useMoviesStore } from "../../../store/useMoviesStore";
import scss from "./ModalWindov.module.scss";
import { useEffect } from "react";
import { Skeleton } from "antd";
const ModalWindov = ({ off, setOff }) => {
  const { id } = useParams();
  const { treilers, getTreilers, loading } = useMoviesStore();
  useEffect(() => {
    getTreilers(id);
  }, [id]);
  const trailer = treilers.find((video) => video.site === "YouTube");

  return (
    <div>
      {!loading ? (
        off ? (
          <div className={scss.truee}>
            <iframe
              width="700"
              height="415"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Movie Trailer"
            />
            <button
              onClick={() => setOff(false)}
              style={{
                position: "absolute",
                top: "120px",
                right: "20px",
                padding: "5px",
                background: "red",
                color: "white",
                border: "5px",
              }}
            >
              close
            </button>
          </div>
        ) : (
          ""
        )
      ) : (
        <Skeleton
          style={{ minHeight: "210px", minWidth: "230px" }}
          variant="rectangular"
          width={210}
          height={350}
        />
      )}
    </div>
  );
};

export default ModalWindov;
