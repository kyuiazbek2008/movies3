import HomeBanner from "./HomeBanner";
import Popular from "./Popular/Popular";
import TopReiting from "./TopReiting/TopReiting";
import Trending from "./Treiding/Treiding";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Trending />
      <Popular />
      <TopReiting />
    </div>
  );
};

export default Home;
