import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";


const Main = () => {
    return (
      <div>
        <div className="container   mx-auto">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        <hr />
        <Footer></Footer>
      </div>
    );
};

export default Main;