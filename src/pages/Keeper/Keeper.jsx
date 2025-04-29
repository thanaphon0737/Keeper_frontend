import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import KeeperContent from "./KeeperContent";
import Footer from "../../components/Footer";
function Keeper() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-[200px_1fr]">
      <Header/>
      <Sidebar/>
      <KeeperContent/>
      <Footer/>
    </div>
  )
}
export default Keeper