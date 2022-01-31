/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaUserAlt, FaLock } from "react-icons/fa";

function Login1() {
  return (
    <>
      <div
        className="h-screen flex justify-center items-center bg-gray-300"
        style={{ fontFamily: "Roboto" }}
      >
        <div className="bg-white rounded-lg w-11/12 sm:w-1/2 lg:w-2/5 p-10 sm:p-16">
          <form>
            <div className="flex font-bold justify-center">
              <img
                className="h-20 w-20"
                src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"
              />
            </div>
            <h2 className="text-3xl text-center text-gray-700 mb-4">
              Login Form
            </h2>
            <div className="relative pt-3">
              <div className="absolute inset-y-0 left-0 flex items-center pt-2">
                <FaUserAlt className="text-gray-300 focus:text-sky-400" />
              </div>
              <input
                type="text"
                className="text-gray-600 block pr-10 border-b-2 pl-6 w-full py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-sky-400 transition duration-500 ease-in-out"
                placeholder="Username"
              />
            </div>
            <div className="relative pt-3">
              <div className="absolute inset-y-0 left-0 flex items-center pt-2">
                <FaLock className="text-gray-300 focus:text-sky-400" />
              </div>
              <input
                type="password"
                className="text-gray-600 block pr-10 border-b-2 pl-6 w-full py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-sky-400 transition duration-500 ease-in-out"
                placeholder="Password"
              />
            </div>
            <a
              href="#"
              className="text-xs text-green-400 hover:text-green-500 float-right mb-4"
            >
              Forgot Password?
            </a>
            <button
              type="submit"
              className="w-full py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none"
            >
              Button
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login1;
