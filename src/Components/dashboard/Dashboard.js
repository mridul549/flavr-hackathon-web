import { React, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";

import '../../css/dashboard/dashboard.css'

import SidebarContext from "../../context/sidebar/sidebarContext";
import Menu from "./Menu/Menu";


export default function Dashboard() {
    const { sidebarOpen } = useContext(SidebarContext)

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 sidebar">
                    <Sidebar />
                </div>
                <div className={`col-lg-10 container-fluid div-2 ${sidebarOpen ? 'sidebaropen' : 'sidebarclose'}`}>
                    <Routes>
                        <Route path="/" element={<Menu />} />
                        <Route path="/menu" element={<Menu />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}