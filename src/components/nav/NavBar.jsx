import { Navbar, NavLinksConatiner } from "../styled/NavBar.styled";

export const NavBar = (props) => {
  return (
    <Navbar isOpen={props.openState}>
      <img
        class="profilePic"
        src={require("../../resources/r_icon.png")}
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
          href="#skills"
          className="navLinks"
          onClick={() => {
            props.onTabClick();
          }}
        >
          Skills
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
