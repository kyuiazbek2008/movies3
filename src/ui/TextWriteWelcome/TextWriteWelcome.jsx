import scss from "./TextWriteWelcom.module.scss";
import { Typewriter } from "react-simple-typewriter";

const TextWriteWelcome = () => {
  return (
    <span className={scss.text}>
      <Typewriter
        words={[
          "Welcome to TmdbMovie - Enjoy the Show!",
          "Discover Movie Magic at TmdbMovie",
          "Get Ready for Cinematic Bliss",
        ]}
        loop={true}
        cursor={true}
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={10}
        delaySpeed={2700}
      />
    </span>
  );
};

export default TextWriteWelcome;
