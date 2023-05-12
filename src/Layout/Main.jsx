import { Outlet } from "react-router-dom";
import Footer from "../components/Pages/shered/Footer/Footer";
import Navbar from "../components/Pages/shered/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;