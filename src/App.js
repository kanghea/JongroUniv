import React, { useEffect, useState,Component } from "react";
import HeaderBenner from './components/HeaderBenner';
import Title from './components/Title';
import Act from './components/Act';
import Header from './components/Header';
import HeaderFixed from './components/HeaderFixed';

function App() {
  const [navbar, setNavbar] = useState(true);
  const [all, setAll] = useState(true);
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
        {all 
        ?  <div>
            <HeaderBenner />
            {navbar ? <Header /> : <HeaderFixed />}
            <Title />
            <Act />
          </div>
        : <div></div>}
      </div>
  );
}

export default App;all;
