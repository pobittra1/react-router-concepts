import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import User from "../User/User";


const Home = () => {

    const headingStyle = {
        fontSize: "30px",
        color:"red"
        
    }

    return (
        <div> 
            <h2 style={headingStyle}>this is home</h2>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;