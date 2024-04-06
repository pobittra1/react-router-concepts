import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <ul className=".headingStyle border bg-green-500">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>about</NavLink></li>
            <li><NavLink to={'/contact'}>contact</NavLink></li>
        </ul>
    );
};

export default Header;