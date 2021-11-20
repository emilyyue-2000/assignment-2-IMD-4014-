import logo from "../../images/logo.svg"
import{NavLink} from 'react-router-dom';
import './styles.css';

export const IkeaLogo = () => {
    return(
        <NavLink to ='/' className = "HomeImage">
            <img className= "LogoImage" src={logo} alt="Ikea Logo">
            </img>
        </NavLink>
    );
}