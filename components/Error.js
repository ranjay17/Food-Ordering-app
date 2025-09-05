import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">OOPS...</h1>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          SOMETHING WENT WRONG!
        </h3>
        <h5 className="text-gray-600">
          {error.status} : {error.statusText}
        </h5>
      </div>
    </div>
  );
};

export default Error;
