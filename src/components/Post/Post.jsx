import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Post = ({post}) => {
    const {title , id} = post;
    return (
        <div className='border border-green-500 p-4'>
            <p>title is : {title}</p>
            <button className='border border-green-400 bg-slate-300 text-black px-4 py-2 mt-2'><NavLink to={`/post/${id}`}>show details</NavLink></button>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
  };
export default Post;