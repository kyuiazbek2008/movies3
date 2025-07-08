import scss from "./HomeBanner.module.scss";
import TextWriteWelcome from "../../ui/TextWriteWelcome/TextWriteWelcome";
import Img from "../../ui/LazyLoadingImage/Img";
import { useMoviesStore } from "../../store/useMoviesStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Key } from "@mui/icons-material";
const HomeBanner = () => {
  const { getSearch } = useMoviesStore();
  const [show, useShow] = useState("");
  const navigeta = useNavigate();
  return (
    <div className={scss.content}>
      <Img />
      <div className={scss.contentTitle}>
        <TextWriteWelcome />
        <div className={scss.int}>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className={scss.btn} style={{ display: "flex" }}>
            <input
              onChange={(e) => useShow(e.target.value)}
              onKeyDown={({ key }) =>
                key === "Enter"
                  ? (getSearch(show), navigeta(`/Search/${show}`))
                  : ""
              }
              placeholder="Search for a movie or tv show...."
              type="text"
              name=""
              id=""
            />
            <button
              onClick={() => {
                getSearch(show);
                navigeta(`/Search/${show}`);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
