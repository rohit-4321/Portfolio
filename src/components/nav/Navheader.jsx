import { GiHamburgerMenu } from "react-icons/gi";
import { Navheader } from "../styled/NavHeader.styled";
import Burger from "../../resources/burger.svg";

export const NavHeader = (props) => {
  const burgerIconStyle = {
    color: "#C4C4C4",
    fontSize: "2.5rem",
    float: "right",
    marginRight: "10px",
    marginTop: "3px",
  };

  return (
    <Navheader>
      {/* <img
        class="profilePic"
        src={require("../../resources/R_icon.png")}
        alt="UserImage"
      ></img> */}
      <img src={Burger} alt="icon" onClick={props.onIconClicked} />
    </Navheader>
  );
};
