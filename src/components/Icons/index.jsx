import heart from "../../images/heartIcon.png"
import basket from "../../images/basketIcon.png"
import map from "../../images/mapIcon.png"
import person from "../../images/personIcon.png"
import truck from "../../images/truckIcon.jpg"
import{NavLink} from 'react-router-dom';
import "./styles.css"

export const Icons = () => {
    return(
        <ul className= "iconList">
        <NavLink to ='/' className = "mapIcon">
            <img className= "map" src={map} alt="map icon">
            </img>
        </NavLink>

        <NavLink to ='/' className = "truckIcon">
            <img className= "truck" src={truck} alt="truck icon">
            </img>
        </NavLink>

        <NavLink to ='/' className = "personIcon">
            <img className= "person" src={person} alt="person icon">
            </img>
        </NavLink>
        
        <NavLink to ='/' className = "heartIcon">
            <img className= "heart" src={heart} alt="heart icon">
            </img>
        </NavLink>

        <NavLink to ='/' className = "basketIcon">
            <img className= "basket" src={basket} alt="basket icon">
            </img>
        </NavLink>

        </ul>

    );
}