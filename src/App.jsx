import { useEffect} from "react";
import './App.css'
import {Routes,Route,useLocation } from "react-router-dom";
import Topbar from "./Components/Main/Topbar"
import Landing from "./Pages/Landing"
import Contact from "./Pages/Contactus"
import Abouts from "./Pages/Abouts"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import Footer from "./Components/Main/Footer"
import Men from "./Pages/Men"; 
import Women from "./Pages/Women";
import Kides from "./Pages/Kides"
import House from "./Pages/HouseHold"
import Uniform from "./Pages/Uniform"
import Notfound from "./Pages/Notfound";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; 
}

function App() {
  return (
<div className="overflow-x-hidden bg-[#ECEFF1]">
<Topbar />
   <ScrollToTop/>
<Routes>
<Route path="/" element={<Landing/>} />
<Route path="/policy" element={< PrivacyPolicy/>} />
<Route path="/about" element={< Abouts/>} />
<Route path="/contact" element={< Contact/>} />
<Route path="/*" element={< Notfound/>} />
<Route path="/men" element={<Men />} />
<Route path="/women" element={<Women />}/>
<Route path="/kids" element={<Kides />}/> 
<Route path="/house" element={<House />}/> 
<Route path="/uniform" element={<Uniform />}/> 

</Routes>

<Footer/>
</div>
  )

}

export default App;
