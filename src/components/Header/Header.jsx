import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <ul className=" flex gap-4 border bg-green-500 py-3">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/contact'}>contact</NavLink></li>
            <li><NavLink to={'/about'}>about</NavLink></li>
            <li><NavLink to={'/users'}>users</NavLink></li>
            <li><NavLink to={'/posts'}>posts</NavLink></li>
        </ul>
    );
};

export default Header;