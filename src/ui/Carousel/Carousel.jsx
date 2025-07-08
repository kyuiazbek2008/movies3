import { useRef, useState } from "react";
import scss from "./Carousel.module.scss";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Cart from "../../cart/MoviesCart";

const Carousel = ({ data }) => {
  const carouselRef = useRef();
  const [show, setShow] = useState(0);
  const scroll = (value) => {
    const container = carouselRef.current;
    const amount =
      value === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);
    container.scrollTo({ left: amount, behavior: "smooth" });
    setShow(amount);
  };

  return (
    <div className={scss.carousel}>
      <div className={scss.wrapper}>
        {show > 0 ? (
          <NavigateBeforeIcon
            className={`${scss.arrow} ${scss.left}`}
            onClick={() => scroll("left")}
          />
        ) : (
          ""
        )}
        {show < 3000 ? (
          <NavigateNextIcon
            className={`${scss.arrow} ${scss.right}`}
            onClick={() => scroll("right")}
          />
        ) : (
          ""
        )}
        <div ref={carouselRef} className={scss.carouselItems}>
          {data?.map((item, index) => (
            <Cart item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
