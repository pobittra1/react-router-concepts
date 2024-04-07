import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
const UserDetails = () => {
  const user = useLoaderData();
  const { name, phone } = user;
  return (
    <div>
      <p>name is: {name}</p>
      <p>phone: {phone}</p>
      <div className="flex gap-3">
        <button className="capitalize border border-green-300 px-3 py-2 mt-4 bg-gray-500 text-black">
          <NavLink to={"/"}>go to home</NavLink>
        </button>
        <button className="capitalize border border-green-300 px-3 py-2 mt-4 bg-gray-500 text-black">
          <NavLink to={-1}>go to back</NavLink>
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
