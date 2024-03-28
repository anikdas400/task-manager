import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const MainLayout = () => {
    return (
        <div className="flex">
            <div className="w-[80px]">
                <Sidebar></Sidebar>
            </div>
            <div className="w-full">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;