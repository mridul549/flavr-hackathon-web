import { React, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";

import '../../css/dashboard/dashboard.css'

import SidebarContext from "../../context/sidebar/sidebarContext";


export default function Dashboard() {
    const { sidebarOpen } = useContext(SidebarContext)

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 sidebar">
                    <Sidebar />
                </div>
                
            </div>
        </div>
    );
}