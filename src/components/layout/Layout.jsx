import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
const Layout = ({ children }) => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
