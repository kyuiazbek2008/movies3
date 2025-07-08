import React from "react";
import scss from "./Footer.module.scss";
import {
  DiscordFilled,
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitchFilled,
} from "@ant-design/icons";
import { IconButton } from "@mui/material";
const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <nav className={scss.nav_footer}>
            <p>Terms Of Use</p>
            <p>Privacy-Policy</p>
            <p>About</p>
            <p>Blog</p>
            <p>FAQ</p>
          </nav>
          <p>
            EcoMovie - a unique website providing fascinating information about
            movies and TV shows. Here you can discover all the necessary details
            about your favorite films, actors, directors, ratings, and much
            more. EcoMovie boasts a stylish and intuitive interface that makes
            your search for cinematic masterpieces as convenient and enjoyable
            as possible.
          </p>
          <div className={scss.icon}>
            <IconButton
              style={{
                color: "white",
                padding: "15px",
                border: "1px solid white",
              }}
            >
              <DiscordFilled style={{ color: "white" }} />
            </IconButton>
            <IconButton
              style={{
                color: "white",
                padding: "15px",
                border: "1px solid white",
              }}
            >
              <InstagramFilled style={{ color: "white" }} />
            </IconButton>
            <IconButton
              style={{
                color: "white",
                padding: "15px",
                border: "1px solid white",
              }}
            >
              <TwitchFilled style={{ color: "white" }} />
            </IconButton>
            <IconButton
              style={{
                color: "white",
                padding: "15px",
                border: "1px solid white",
              }}
            >
              <LinkedinFilled style={{ color: "white" }} />
            </IconButton>
            <IconButton
              style={{
                color: "white",
                padding: "15px",
                border: "1px solid white",
              }}
            >
              <GithubFilled style={{ color: "white" }} />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
