import scss from "./Header.module.scss";
import ProhileMenu from "../../../authentication/prohileMenu/ProhileMenu";
import { Badge, Input } from "antd";
import { SearchOutlined, StarFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useMoviesStore } from "../../../store/useMoviesStore";
import { useEffect, useState } from "react";
const Header = () => {
  const [value, setValue] = useState("all");
  const { getAllMovies } = useMoviesStore();
  const { getAllTv } = useMoviesStore();
  useEffect(() => {
    getAllTv(value);
  }, [value]);
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <a>
              <h1>CineWave</h1>
            </a>
            <nav className={scss.nav}>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? scss.active : "")}
              >
                Home
              </NavLink>

              <NavLink
                to="/movie"
                className={({ isActive }) => (isActive ? scss.active : "")}
              >
                Movies
              </NavLink>

              <NavLink
                to="/tv"
                className={({ isActive }) => (isActive ? scss.active : "")}
              >
                TV Show
              </NavLink>

              <span></span>
            </nav>
            <div className={scss.search}>
              <Input
                style={{
                  cursor: "pointer",
                  background: "black",
                  color: "white",
                }}
                placeholder="Search"
                prefix={<SearchOutlined />}
                onChange={(e) => {
                  setValue(e.target.value);
                  getAllMovies(e.target.value);
                }}
              />
              <Badge count={5}>
                <StarFilled
                  className={scss.star}
                  style={{ color: "red", cursor: "pointer" }}
                />
              </Badge>
              <ProhileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
