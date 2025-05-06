import { useState,useEffect } from "react";
import { useNavigate } from "react-router";
import { getUserProfile,logoutUser } from "../../services/api";
function DashboardContent() {
  const [userProfile, setUserProfile] = useState(null);
  let navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");
  const handleLogout = async () => {
    await logoutUser();
    console.log("logout success.");
    sessionStorage.removeItem("userId");
    navigate("/login");
  };
  useEffect(() => {
    console.log(userId);
    if (userId) {
      const fecthProfile = async () => {
        try {
          const userProfile = await getUserProfile(userId);
          // console.log(userProfile)
          setUserProfile(userProfile);
        } catch (error) {
          console.error(error);
        }
      };
      fecthProfile();
    }
  }, []);
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col">
        <h2>Dashboard</h2>
        <div className="flex gap-2">
          <span>account: </span>
          {userProfile?.username}
        </div>
        <div className="flex gap-2">
          <span>email: </span>
          {userProfile?.email}
        </div>
        <button onClick={handleLogout} className="cursor-pointer shadow-xl rounded-lg bg-[#6366f1] text-white">
          Logout
        </button>
      </div>
    </div>
  );
}
export default DashboardContent;
