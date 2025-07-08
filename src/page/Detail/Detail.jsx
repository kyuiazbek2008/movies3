import { useState } from "react";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import CastPage from "./Cast/CastPage";
import ModalWindov from "./ModalWindeow/ModalWindov";

const Detail = () => {
  const [off, setOff] = useState(false);
  return (
    <div>
      <DetailsBanner off={off} setOff={setOff} />
      <ModalWindov off={off} setOff={setOff} />
      <CastPage />
    </div>
  );
};

export default Detail;
