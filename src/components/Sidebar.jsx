import { Link } from "react-router"
function Sidebar() {
  return (
    <aside className="bg-gray-100 p-4 flex flex-col">
        <Link to="/dashboard" className="place-self-start text-gray-400">Home</Link>
        <Link to="/dashboard/about" className="place-self-start text-gray-400">About</Link>
        <Link to="/dashboard/keeper" className="place-self-start text-gray-400">Keeper</Link>
    </aside>
  )
}
export default Sidebar