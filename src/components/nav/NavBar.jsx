import { Navbar, NavLinksConatiner } from "../styled/NavBar.styled";

export const NavBar = (props) => {
  return (
    <Navbar isOpen={props.openState}>
      <img
        class="profilePic"
        src={require("../../resources/R_icon.png")}
        alt="UserImage"
      ></img>
      <NavLinksConatiner isOpen={props.openState}>
        <a href="#e" className="navLinks">
          About Me
        </a>
        <a href="#e" className="navLinks">
          Skills
        </a>
        <a href="#projects" className="navLinks">
          Projects
        </a>
        <a href="#e" className="navLinks">
          Contact
        </a>
      </NavLinksConatiner>
    </Navbar>
  );
};
