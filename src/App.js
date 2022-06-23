import { useState } from "react";
import "./App.css";
import { MainContainer } from "./components/main/MainContainer";
import { NavBar } from "./components/nav/NavBar";
import { NavHeader } from "./components/nav/Navheader";
import { BackGroundStyled } from "./components/styled/BackGround.styled";

function App() {
  const [isnavOpen, setNavState] = useState(false);

  const toggleNavBar = () => {
    setNavState(!isnavOpen);
  };
  return (
    <div className="App">
      <BackGroundStyled />
      <NavBar openState={isnavOpen} />
      <NavHeader onIconClicked={toggleNavBar} />
      <MainContainer />
    </div>
  );
}

export default App;
