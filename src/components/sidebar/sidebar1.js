import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { BsTable } from "react-icons/bs";
import { AiOutlineForm } from "react-icons/ai";
import { FcBiohazard } from "react-icons/fc";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaElementor } from "react-icons/fa";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <RiDashboardFill size={24} />,
    current: true,
  },
  {
    name: "UI Elements",
    href: "/uielements",
    icon: <FaElementor size={24} />,
    current: false,
  },
  {
    name: "Tables",
    href: "/tables",
    icon: <BsTable size={24} />,
    current: false,
  },
  {
    name: "Forms",
    href: "/forms",
    icon: <AiOutlineForm size={24} />,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Sidebar1() {
  return (
    <>
      <div className="flex h-screen bg-gray-200">
        <div class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 -translate-x-full ease-in">
          <div class="flex items-center justify-center mt-8">
            <div class="flex items-center">
              <FcBiohazard size={34} />
              <span class="text-white text-2xl mx-2 font-semibold">
                Dashboard
              </span>
            </div>
          </div>
          <nav class="mt-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                className={classNames(
                  item.current
                    ? "bg-gradient-to-r from-blue-500 to-blue-700 shadow-md rounded-lg"
                    : "",
                  "flex text-md text-gray-100 dark:text-white px-4 py-4 font-semibold mx-2"
                )}
                href={item.href}
              >
                {item.icon}
                <span class="mx-3">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
        <div class="flex-1 flex flex-col overflow-hidden">
          <header class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
            <div class="flex items-center">
              <HiMenuAlt1 size={30} />
            </div>

            {/* <div class="flex items-end">
              <div x-data="{ notificationOpen: false }" class="relative">
                <button class="flex mx-4 text-gray-600 focus:outline-none">
                  <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>

                <div
                  x-show="notificationOpen"
                  class="fixed inset-0 h-full w-full z-10"
                ></div>

                <div
                  x-show="notificationOpen"
                  class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-10"
                >
                  <a
                    href="#"
                    class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
                  >
                    <img
                      class="h-8 w-8 rounded-full object-cover mx-1"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                      alt="avatar"
                    />
                    <p class="text-sm mx-2">
                      <span class="font-bold" href="#">
                        Sara Salah
                      </span>{" "}
                      replied on the{" "}
                      <span class="font-bold text-indigo-400" href="#">
                        Upload Image
                      </span>{" "}
                      artical . 2m
                    </p>
                  </a>
                  <a
                    href="#"
                    class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
                  >
                    <img
                      class="h-8 w-8 rounded-full object-cover mx-1"
                      src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                      alt="avatar"
                    />
                    <p class="text-sm mx-2">
                      <span class="font-bold" href="#">
                        Slick Net
                      </span>{" "}
                      start following you . 45m
                    </p>
                  </a>
                  <a
                    href="#"
                    class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
                  >
                    <img
                      class="h-8 w-8 rounded-full object-cover mx-1"
                      src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                      alt="avatar"
                    />
                    <p class="text-sm mx-2">
                      <span class="font-bold" href="#">
                        Jane Doe
                      </span>{" "}
                      Like Your reply on{" "}
                      <span class="font-bold text-indigo-400" href="#">
                        Test with TDD
                      </span>{" "}
                      artical . 1h
                    </p>
                  </a>
                  <a
                    href="#"
                    class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
                  >
                    <img
                      class="h-8 w-8 rounded-full object-cover mx-1"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=398&amp;q=80"
                      alt="avatar"
                    />
                    <p class="text-sm mx-2">
                      <span class="font-bold" href="#">
                        Abigail Bennett
                      </span>{" "}
                      start following you . 3h
                    </p>
                  </a>
                </div>
              </div>

              <div x-data="{ dropdownOpen: false }" class="relative">
                <button class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                  <img
                    class="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                    alt="Your avatar"
                  />
                </button>

                <div
                  x-show="dropdownOpen"
                  class="fixed inset-0 h-full w-full z-10"
                ></div>

                <div
                  x-show="dropdownOpen"
                  class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >
                    Products
                  </a>
                  <a
                    href="/login"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div> */}
          </header>
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200"></main>
        </div>
      </div>
    </>
  );
}

export default Sidebar1;
// SC = https://tailwindcomponents.com/component/dashboard-template
// https://tailwindcomponents.com/component/free-tailwind-css-vertical-navigation-component
