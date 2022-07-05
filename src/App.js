import Aos from "aos";
import { useEffect, useState } from "react";
import "./App.css";
import { ParticalComponent } from "./components/common/Partical";

import { MainContainer } from "./components/main/MainContainer";
import { NavBar } from "./components/nav/NavBar";
import { NavHeader } from "./components/nav/Navheader";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
    Aos.refreshHard();
  }, []);
  const [isnavOpen, setNavState] = useState(false);

  const toggleNavBar = () => {
    setNavState(!isnavOpen);
  };
  return (
    <div className="App">
      <ParticalComponent />
      <NavBar openState={isnavOpen} />
      <NavHeader onIconClicked={toggleNavBar} navState={isnavOpen} />
      <MainContainer navState={isnavOpen} />
    </div>
  );
}

export default App;
