import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import scss from "./CircleReiting.module.scss";
const CircleReiting = ({ number }) => {
  return (
    <div>
      <CircularProgressbar
        className={scss.reitin}
        value={number}
        maxValue={10}
        text={number}
        styles={buildStyles({
          pathColor: number < 5 ? "red" : number < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default CircleReiting;
