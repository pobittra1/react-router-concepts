import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
        <p>posts length is: {posts.length}</p>
        <div className="boorder border-green-500 max-w-5xl mx-auto grid grid-cols-4 gap-4">
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    </div>
  );
};

export default Posts;
