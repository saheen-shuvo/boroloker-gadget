import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";


const MainLayout = () => {
    const {pathname} = useLocation();
    console.log(pathname)
    const isHome = pathname === "/" ? true : false;
    return (
        <div>
            <Navbar isHome={isHome}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;