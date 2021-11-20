import{
    NavLink
}from 'react-router-dom';
import './styles.css'

export const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="navbarList">
                <li>
                    <NavLink className="navSelected" to ="/">
                        Product
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navSelected" to ="/">
                        Rooms
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navSelected" to ="/">
                        Offers
                    </NavLink>
                </li>
                <li>
                    <NavLink className="greenFriday" to ="/greenFriday">
                        Green Friday
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}