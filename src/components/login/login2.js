/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

function Login2() {
  return (
    <>
      <div
        className="h-screen flex justify-center items-center bg-gray-300"
        style={{ fontFamily: "Roboto" }}
      >
        <div class="relative flex flex-col min-w-0 break-words w-11/12 sm:w-1/2 lg:w-2/5 mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-gray-500 text-sm font-bold">Sign in with</h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img
                  alt="..."
                  class="w-5 mr-1"
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/github.svg"
                />
                Github
              </button>
              <button
                class="bg-white active:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img
                  alt="..."
                  class="w-5 mr-1"
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/google.svg"
                />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-gray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-gray-400 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form className="text-left">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox border-0 rounded text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-gray-600">
                    Remember me
                  </span>
                </label>
              </div>
              <div class="text-center mt-6">
                <button
                  class="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login2;
