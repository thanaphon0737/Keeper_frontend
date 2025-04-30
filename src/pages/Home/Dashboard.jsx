import { useEffect, useState } from "react";
import { getUserProfile, logoutUser } from "../../services/api";
import { useNavigate } from "react-router";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import DashboardContent from "./DashboardContent";
function Dashboard() {
  
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-[200px_1fr]">
      <Header/>
      <Sidebar/>
      <DashboardContent/>
      <Footer/>
    </div>

    // <div className="flex h-screen justify-center items-center">
    //   <div className="flex flex-col">
    //   <h2>Dashboard</h2>
    //     <div className="flex gap-2">
    //     <span>account: </span>
    //     {userProfile?.username}
    //     </div>
    //     <div className="flex gap-2">
    //     <span>email: </span>
    //     {userProfile?.email}
    //     </div>
    //     <button onClick={handleLogout} className="cursor-pointer">Logout</button>

    //   </div>
    // </div>
  );
}
export default Dashboard;
