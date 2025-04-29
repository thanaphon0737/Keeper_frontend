import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import AboutContent from "./AboutContent";
import Footer from "../../components/Footer";
function About() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-[200px_1fr]">
      <Header/>
      <Sidebar/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}
export default About