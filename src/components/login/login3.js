/* eslint-disable jsx-a11y/anchor-is-valid */
function Login3() {
  return (
    <>
      <div className="bg-gradient-to-l from-purple-700 to-blue-500">
        <h1 className="max-w-lg mx-auto">
          <a href="#">
            <h1 className="text-4xl font-bold text-white text-center">
              Startup
            </h1>
          </a>
        </h1>

        <div className="bg-white text-left max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <div>
            <h3 className="font-bold text-2xl">Welcome to Startup</h3>
            <p className="text-gray-600 pt-2">Sign in to your account.</p>
          </div>

          <div className="mt-10">
            <form className="flex flex-col">
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  for="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                />
              </div>
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  for="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                />
              </div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
                >
                  Forgot your password?
                </a>
              </div>
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-lg mx-auto text-center mt-12 mb-6">
          <p className="text-white">
            Don't have an account?{" "}
            <a href="#" className="font-bold hover:underline">
              Sign up
            </a>
            .
          </p>
        </div>

        <div className="max-w-lg mx-auto flex justify-center text-white">
          <a href="#" className="hover:underline">
            Contact
          </a>
          <span className="mx-3">•</span>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </div>
      </div>
    </>
  );
}

export default Login3;
