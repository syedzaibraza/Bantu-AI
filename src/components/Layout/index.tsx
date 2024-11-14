import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-vh bg-black text-white">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="max-screen">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
