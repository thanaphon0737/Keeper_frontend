import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import KeeperContent from "./KeeperContent";
import Footer from "../../components/Footer";
function Keeper() {
  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto] grid-cols-[240px_1fr]">
      {/* <Header/> */}
      <Sidebar/>
      <KeeperContent/>
      <Footer/>
    </div>
  )
}
export default Keeper