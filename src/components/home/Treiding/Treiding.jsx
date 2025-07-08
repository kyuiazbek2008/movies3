import { useEffect, useState } from "react";
import Carousel from "../../../ui/Carousel/Carousel";
import Select from "../../../ui/Select/Select";
import scss from "./Trei.module.scss";
import { useMoviesStore } from "../../../store/useMoviesStore";
const Trending = () => {
  const { getTrending, moviesTrending } = useMoviesStore();
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    getTrending(toggle);
  }, [toggle]);
  useEffect(() => {
    getTrending();
  }, []);

  return (
    <div className={scss.caruselSelection}>
      <div className="container">
        <div className={scss.coruselTitle}>
          <h1>What`s Popular</h1>
          <div className={scss.btn}>
            <Select
              toggle={toggle}
              setToggle={setToggle}
              firstText={"Day"}
              lastText={"Week"}
            />
          </div>
        </div>
      </div>
      <Carousel data={moviesTrending} />
    </div>
  );
};

export default Trending;
