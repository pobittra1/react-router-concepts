import { useRouteError ,NavLink } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  const { data, status, statusText } = err;
  return (
    <div className="max-w-3xl bg-yellow-500 py-4 mx-auto mt-48 flex flex-col gap-4 justify-center items-center">
      <h3 className="text-3xl text-red-500">{data}</h3>
      <h3 className="text-3xl text-red-500 px-3 py-2 bg-black">{status}</h3>
      <h2>{statusText}</h2>
      <NavLink to={"/"} className="capitalize border border-green-300 px-3 py-2 mt-4 bg-gray-500 text-black">go to home</NavLink>
    </div>
  );
};

export default ErrorPage;
