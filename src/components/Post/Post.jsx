import PropTypes from 'prop-types';

const Post = ({post}) => {
    const {title} = post;
    return (
        <div className='border border-green-500 p-4'>
            <p>title is : {title}</p>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
  };
export default Post;