import scss from "./Header.module.scss";
import ProhileMenu from "../../../authentication/prohileMenu/ProhileMenu";
import { Badge, Input } from "antd";
import { SearchOutlined, StarFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <a>
              <h1>CineWave</h1>
            </a>
            <nav className={scss.nav}>
              <Link to={"/"}>
                <p>Home</p>
              </Link>
              <Link to={"/movie"}>
                <p>Movies</p>
              </Link>
              <Link to={"/tvShow"}>
                <p>TV Show</p>
              </Link>
              <Link to={"/series"}>
                <p>Series</p>
              </Link>
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
