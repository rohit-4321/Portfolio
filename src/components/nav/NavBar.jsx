import { Navbar, NavLinksConatiner } from "../styled/NavBar.styled";

export const NavBar = (props) => {
  return (
    <Navbar isOpen={props.openState}>
      <img
        class="profilePic"
        src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
        alt="UserImage"
      ></img>
      <NavLinksConatiner isOpen={props.openState}>
        <a href="#e" className="navLinks">
          About Me
        </a>
        <a href="#e" className="navLinks">
          Skills
        </a>
        <a href="#e" className="navLinks">
          Projects
        </a>
        <a href="#e" className="navLinks">
          Contact
        </a>
      </NavLinksConatiner>
    </Navbar>
  );
};
