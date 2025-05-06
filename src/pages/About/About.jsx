import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import AboutContent from "./AboutContent";
import Footer from "../../components/Footer";
function About() {
  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto] grid-cols-[240px_1fr]">
      {/* <Header/> */}
      <Sidebar/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}
export default About