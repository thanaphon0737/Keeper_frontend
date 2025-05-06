import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getUserProfile, logoutUser } from "../services/api";
function AccountDisplay() {
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
    <div className="border-1 w-[250px] flex justify-between rounded-lg p-2">
      <div className="flex flex-col">
        <img src="" alt="img" className="rounde-full w-[50px] h-[30px]" />
        <div>Account Name: {userProfile?.username}</div>
        <div>Email: {userProfile?.email}</div>
      </div>
      <button
        onClick={handleLogout}
        className="cursor-pointer shadow-xl rounded-lg bg-[#6366f1] text-white p-2 text-sm"
      >
        Logout
      </button>
    </div>
  );
}
export default AccountDisplay;
