import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  const location = useLocation();
  const navigation = useNavigation();
  console.log(location);
  const headingStyle = {
    fontSize: "30px",
    color: "red",
  };

  return (
    <div>
      <h2 style={headingStyle}>this is home</h2>
      <Header></Header>
      <p>this is home</p>
      {navigation.state === "loading" ? (
        <p>loading......</p>
      ) : (
        <Outlet></Outlet>
      )}
    </div>
  );
};

export default Home;
