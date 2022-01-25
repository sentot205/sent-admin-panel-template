import React from "react";
// import LogoMobile from "../../assets/minibus.webp";
import { RiDashboardFill } from "react-icons/ri";
import { BsTable } from "react-icons/bs";
import { MdFingerprint } from "react-icons/md";

function Sidebar() {
  return (
    <>
      <div class="h-screen fixed top-0 md:left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300">
        <div class="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            href="##"
            target="_blank"
            rel="noreferrer"
            class="mt-2 text-center w-full inline-block"
          >
            <h1 class="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
              Sent Admin Panel
            </h1>
          </a>
          <div class="flex flex-col">
            <hr class="my-4 min-w-full" />
            <ul class="flex-col min-w-full flex list-none">
              <li class="rounded-lg mb-4">
                <a
                  class="flex text-md text-white px-4 py-3 font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 shadow-md"
                  href="##"
                >
                  <RiDashboardFill className="my-auto mr-3" size={20} />Dashboard
                </a>
              </li>
              <li class="rounded-lg mb-4">
                <a
                  class="flex text-md text-gray-900 px-4 py-3 font-semibold"
                  href="##"
                >
                  <BsTable className="my-auto mr-3" size={20} />Table
                </a>
              </li>
              <li class="rounded-lg mb-4">
                <a
                  class="flex text-md text-gray-900 px-4 py-3 font-semibold"
                  href="##"
                >
                  <MdFingerprint className="my-auto mr-3" size={20} />Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
