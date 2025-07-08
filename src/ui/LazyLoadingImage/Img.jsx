import { useEffect, useMemo } from "react";
import { useMoviesStore } from "../../store/useMoviesStore";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Img = () => {
  const { img, getImg } = useMoviesStore();
  useEffect(() => {
    getImg();
  }, []);
  const randomIndex = useMemo(() => {
    if (img.length === 0) return;
    const randomIndex = Math.floor(Math.random() * img.length);
    return img[randomIndex];
  }, [img]);
  if (!randomIndex) return null;

  return (
    <div>
      <LazyLoadImage
        style={{
          objectFit: "cover",
        }}
        alt=""
        height="700px"
        src={`https://image.tmdb.org/t/p/original${randomIndex.backdrop_path}`}
        width="100%"
      />
    </div>
  );
};

export default Img;
