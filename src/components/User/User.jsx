import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
const User = ({user}) => {
  const { name, email, id } = user;
  return (
    <div className='border border-green-400 text-center p-8'>
        <p>{name}</p>
        <p>{email}</p>
        <button className='capitalize border border-green-300 px-3 py-2 mt-4 bg-gray-500 text-black'><NavLink to={`/user/${id}`}>show details</NavLink></button>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.object
};
export default User;
