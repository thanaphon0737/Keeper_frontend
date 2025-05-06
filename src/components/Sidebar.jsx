import { Link,NavLink } from "react-router";
import { House, CircleAlert, NotebookPen } from "lucide-react";
function Sidebar() {
  const activeLink = "place-self-start text-white flex gap-2 items-center p-2 w-full bg-white/10 rounded-lg ";
  const normalLink = "place-self-start text-gray-200 flex gap-2 items-center p-2 w-full hover:bg-white/10 rounded-lg";
  return (
    <aside className="bg-[#6366f1] text-gray-900 p-4 flex flex-col ">
      <div className="sidebar-header flex justify-start mb-2 p-[1.5rem] text-white">
        {/* <!-- SVG Icon --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round "
          className="place-self-center"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <h1 className="font-[700] text-[1.75rem] text-white">Keeper</h1>
      </div>
      <NavLink
        to="/dashboard"
        // className={`place-self-start text-gray-200 flex gap-2 items-center p-2 w-full`  }
        end
        className={({ isActive }) =>
          isActive
            ? activeLink
            : normalLink
        }
        
      >
        <House size={16}/> Home
      </NavLink>
      <NavLink
        to="/dashboard/about"
        className={({ isActive }) =>
          isActive
            ? activeLink
            : normalLink
        }
      >
        <CircleAlert size={16}/>
        About
      </NavLink>
      <NavLink
        to="/dashboard/keeper"
        className={({ isActive }) =>
          isActive
            ? activeLink
            : normalLink
        }
      >
        <NotebookPen size={16}/>
        Keeper
      </NavLink>
    </aside>
  );
}
export default Sidebar;
