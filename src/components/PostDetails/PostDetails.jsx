import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
const PostDetails = () => {
  const post = useLoaderData();
  const { title, body } = post;
  return (
    <div className="border border-green-400 p-6 mt-12 mx-auto max-w-3xl">
      <h2 className="text-3xl text-center ">
        <span
          className="text-4xl text-green-500"
        >
          title is:
        </span>{" "}
        {title}
      </h2>
      <p className="text-xl text-center">
        <span
          className="text-4xl text-green-500"
        >
          body data is:
        </span>{" "}
        {body}
      </p>
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

export default PostDetails;
