import { useEffect, useState } from "react";
import scss from "./DetailActor.module.scss";
import { useMoviesStore } from "../../../store/useMoviesStore";
import { Link, useParams } from "react-router-dom";
const DetailActor = () => {
  const { getDetailActors, DetailActor, getActor, actor, loading, getDetail } =
    useMoviesStore();
  const { id } = useParams();
  const [show, setShow] = useState(230);
  useEffect(() => {
    getDetailActors(id);
    getActor(id);
  }, [id]);

  return (
    <div className={scss.Actor}>
      {!loading ? (
        <div>
          <img
            className={scss.detailBannerimage}
            src={`https://image.tmdb.org/t/p/w500/${DetailActor.profile_path}`}
            alt=""
          />
          <div className="container">
            <div className={scss.box}>
              <img
                width="400px"
                src={`https://image.tmdb.org/t/p/w500/${DetailActor.profile_path}`}
                alt=""
              />
              <div className={scss.title}>
                <h1>Name: {DetailActor.name}</h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                  className={scss.year}
                >
                  <span style={{ fontSize: "21px" }}>
                    Was born in: {DetailActor.place_of_birth}
                  </span>
                  <h2 style={{ fontSize: "20px" }}>
                    Was in: {DetailActor.birthday}
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                  className={scss.Bigra}
                >
                  <p style={{ fontSize: "20px", color: "white" }}>
                    Biography :
                  </p>
                  <p style={{ maxWidth: "700px", color: "gray" }}>
                    {DetailActor.biography == undefined ||
                      DetailActor.biography.slice(0, show)}
                    {DetailActor.biography == undefined ||
                    DetailActor.biography.length > show ? (
                      <span
                        style={{ fontSize: "17px", color: "white" }}
                        onClick={() => setShow(DetailActor.biography.length)}
                      >
                        Read more...
                      </span>
                    ) : (
                      <span
                        style={{ fontSize: "17px", color: "white" }}
                        onClick={() => setShow(230)}
                      >
                        ...Close
                      </span>
                    )}
                  </p>
                </div>
                <div
                  className={scss.scrol}
                  style={{ display: "flex", width: "800px" }}
                >
                  {actor.map((item, ind) => (
                    <Link to={`/movie/${item.id}`}>
                      <div onClick={() => getDetail(item.id)} key={ind}>
                        <img
                          style={{
                            objectFit: "cover",
                            paddingRight: "20px",
                            objectPosition: "center",
                          }}
                          width="260px"
                          height="200px"
                          src={
                            item.backdrop_path
                              ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                              : "https://royalfurnituregallery.in/assets/images/fashion/product/55.jpg"
                          }
                          alt={item.title}
                        />
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  ))}
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

export default DetailActor;
