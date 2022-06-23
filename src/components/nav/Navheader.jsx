
import { GiHamburgerMenu } from 'react-icons/gi';
import { Navheader } from '../styled/NavHeader.styled';


export const NavHeader = (props) => {
    const burgerIconStyle={
        color : '#C4C4C4',
        fontSize: '2.5rem',
        float:'right',
        marginRight:'10px',
        marginTop:'3px'
    }

    return (
    <Navheader>
        <img id="navHeaderProfilePic" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt = "UserImage"></img>
        <GiHamburgerMenu style={burgerIconStyle} onClick = {props.onIconClicked}/>
    </Navheader>
    )
}