import { Route, Routes } from "react-router-dom";
import Detail from "../page/Detail/Detail";
import Movies from "../page/movies/Movies";
import Home from "../components/home/Home";
import DetailActor from "../page/Detail/DetailActors/DetailActor";
import Search from "../page/Search/Search";
const MainRoutes = () => {
  const router = [
    {
      link: <Detail />,
      element: "/movie/:id",
    },
    {
      link: <DetailActor />,
      element: "/detailActor/:id",
    },
    {
      link: <Movies />,
      element: "/movie",
    },
    {
      link: <Home />,
      element: "/",
    },
    {
      link: <Search />,
      element: "/Search/:name",
    },
  ];
  return (
    <Routes>
      {router.map((item, ind) => (
        <Route key={ind} path={item.element} element={item.link} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
