import React, {useState} from "react";
import HeaderBenner from './components/HeaderBenner';
import Title from './components/Title';
import Act from './components/Act';
import Header from './components/Header';
import HeaderFixed from './components/HeaderFixed';
import Last from "./components/last";

function Main() {
    const [navbar, setNavbar] = useState(true);
    const changeheight = () => {
      if(window.scrollY > 0){
        setNavbar(false);
      }else{
        setNavbar(true);
      }
    }
    window.addEventListener('scroll', changeheight)
    return (
        <div>
            <HeaderBenner />
            { navbar ? <Header /> : <HeaderFixed /> }
            <Title />
            <Act />
            <Last/>
        </div>
    );
  }
  
  export default Main;