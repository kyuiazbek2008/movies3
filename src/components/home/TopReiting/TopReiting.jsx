import { useEffect, useState } from "react";
import Carousel from "../../../ui/Carousel/Carousel";
import { useMoviesStore } from "../../../store/useMoviesStore";
import Select from "../../../ui/Select/Select";
import scss from "./TopReiting.module.scss";
const TopReiting = () => {
  const { getTopReiting, moviesTopReiting } = useMoviesStore();
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    getTopReiting(toggle);
  }, [toggle]);

  return (
    <div className={scss.caruselSelection}>
      <div className="container">
        <div className={scss.coruselTitle}>
          <h1>What`s Popular</h1>
          <div className={scss.btn}>
            <Select
              toggle={toggle}
              setToggle={setToggle}
              firstText={"Movies"}
              lastText={"Tv Show"}
            />
          </div>
        </div>
      </div>
      <Carousel data={moviesTopReiting} />
    </div>
  );
};

export default TopReiting;
