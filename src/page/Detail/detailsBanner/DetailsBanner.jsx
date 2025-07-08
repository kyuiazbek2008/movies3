import { useEffect } from "react";
import { useMoviesStore } from "../../../store/useMoviesStore";
import scss from "./Details.module.scss";
import { useParams } from "react-router-dom";
import ReitingDetail from "../../../ui/ReitingDetail/ReitingDetail";
const DetailsBanner = ({ setOff }) => {
  const { detail, getDetail, loading } = useMoviesStore();
  const { id } = useParams();
  useEffect(() => {
    getDetail(id);
  }, [id]);
  return (
    <div className={scss.Detail_title}>
      {!loading ? (
        <div>
          <img
            className={scss.detailBannerimage}
            src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
            alt=""
          />
          <div className="container">
            <div className={scss.Detail}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
                alt=""
              />
              <div className={scss.Title}>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    flexDirection: "column",
                  }}
                >
                  <h1>
                    {detail.title || detail.original_title} (
                    {detail.release_date == undefined ||
                      detail.release_date.slice(0, 4)}
                    )
                  </h1>
                  <p style={{ color: "rgb(52%, 55%, 60%)", fontSize: "20px" }}>
                    {detail.tagline}
                  </p>
                </div>
                <div className={scss.btn_Detail}>
                  {detail.genres == undefined ||
                    detail.genres.map((item, ind) => (
                      <h5 key={ind}>{item.name}</h5>
                    ))}
                </div>
                <div className={scss.reiting_Detail}>
                  <ReitingDetail
                    className={scss.reiting}
                    number={
                      detail.vote_average == undefined ||
                      detail.vote_average.toFixed(1)
                    }
                  />
                  <div
                    onClick={() => setOff(true)}
                    style={{ cursor: "pointer" }}
                    className={scss.playbtn}
                  >
                    <svg viewBox="0 0 213.7 213.7">
                      <polygon
                        className={scss.triangle}
                        points="73.5,62.5 148.5,105.8 73.5,149.1"
                      />
                      <circle
                        style={{ cursor: "pointer" }}
                        className={scss.circle}
                        cx="106.8"
                        cy="106.8"
                        r="103.3"
                      />
                    </svg>

                    <span className={scss.textTriler}>Watch Trailer</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <h2>Overview</h2>
                  <p
                    style={{
                      maxWidth: "750px",
                      fontSize: "18px",
                      fontWeight: "300",
                    }}
                  >
                    {detail.overview}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "600px",
                    borderBottom: "1px solid gray",
                    paddingBlock: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    className={scss.status}
                  >
                    <h3 style={{ fontSize: "19px" }}>Status:</h3>
                    <span
                      style={{ color: "rgb(52%, 55%, 60%)", fontSize: "16px" }}
                    >
                      {detail.status}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    className={scss.status}
                  >
                    <h3 style={{ fontSize: "19px" }}>Release Date:</h3>
                    <span
                      style={{ color: "rgb(52%, 55%, 60%)", fontSize: "16px" }}
                    >
                      {detail.release_date}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    className={scss.status}
                  >
                    <h3 style={{ fontSize: "19px" }}>Runtime:</h3>
                    <span
                      style={{ color: "rgb(52%, 55%, 60%)", fontSize: "16px" }}
                    >
                      {detail.runtime}m
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DetailsBanner;
