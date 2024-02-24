import { React, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";

import '../../css/dashboard/dashboard.css'

import SidebarContext from "../../context/sidebar/sidebarContext";
import Menu from "./Menu/Menu";
import ErrorPage from "../ErrorPage";
import EditCategory from "./Menu/EditCategory";
import OrderHistory from "./Order/OrderHistory";
import Orders from "./Order/Orders";
import Profile from "../Profile";


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
                        <Route path="/editcategory/:id" element={<EditCategory />} />
                        <Route path="/orders/handling" element={<Orders />} />
                        <Route path="/addcategory" element={<EditCategory />} />
                        <Route path="/orders/history" element={<OrderHistory />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path='*' element={<ErrorPage />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
}