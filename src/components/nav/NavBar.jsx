import { Navbar, NavLinksConatiner } from "../styled/NavBar.styled";

export const NavBar = (props) => {
  return (
    <Navbar isOpen={props.openState}>
      <img
        className="profilePic"
        src={require("../../resources/R_icon.png")}
        alt="UserImage"
      ></img>
      <NavLinksConatiner isOpen={props.openState}>
        <a
          href="#about"
          className="navLinks"
          onClick={() => {
            props.onTabClick();
          }}
        >
          About Me
        </a>
        <a
          href="#projects"
          className="navLinks"
          onClick={() => {
            props.onTabClick();
          }}
        >
          Projects
        </a>
        <a
          href="#skills"
          className="navLinks"
          onClick={() => {
            props.onTabClick();
          }}
        >
          Skills
        </a>

        <a
          href="#contacts"
          className="navLinks"
          onClick={() => {
            props.onTabClick();
          }}
        >
          Contact
        </a>
      </NavLinksConatiner>
    </Navbar>
  );
};
