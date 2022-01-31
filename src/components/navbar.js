/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Sidebar from "./sidebar";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("DarkTheme") !== null) {
      setDarkTheme(JSON.parse(window.localStorage.getItem("DarkTheme")));
    }
  }, []);

  useEffect(() => {
    if (darkTheme === true) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }

    window.localStorage.setItem("DarkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);
  return (
    <Disclosure
      as="nav"
      className="bg-white dark:bg-gray-800 fixed top-0 z-10 sticky shadow-md transition delay-150 duration-300"
    >
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 ml-2 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <div className="ml-6 md:ml-0 w-auto md:w-64">
                    <img
                      className="block lg:hidden h-8 w-auto mx-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto mx-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                      alt="Workflow"
                    />
                  </div>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-white"
                            : "text-gray-900 dark:text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 mr-2 flex items-center pr-2 sm:static sm:inset-auto sm:mr-6 sm:pr-0">
                <span class="relative inline-flex">
                  <button
                    type="button"
                    className="transition delay-150 duration-300 bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 dark:text-gray-400 focus:outline-none focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full dark:bg-white bg-sky-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 dark:bg-white bg-sky-500"></span>
                  </span>
                </span>

                <button
                  type="button"
                  onClick={() => setDarkTheme(!darkTheme)}
                  className="ml-3 transition delay-150 duration-300 bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 dark:text-gray-400 focus:outline-none focus:ring-offset-gray-800 focus:ring-white"
                >
                  {darkTheme ? (
                    <BsFillSunFill className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <BsMoonStarsFill className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div
              className={`w-72 block h-screen fixed top-0 md:left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white dark:bg-gray-800 z-10 py-4 px-6 transition-all duration-300 mt-16 transition delay-150 duration-300`}
            >
              <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative pt-3">
                <div className="flex flex-col">
                  <ul className="flex-col min-w-full flex list-none">
                    {navigation.map((item) => (
                      <li className="rounded-lg mb-4">
                        <a
                          key={item.name}
                          className={classNames(
                            item.current
                              ? "bg-gradient-to-r from-blue-500 to-blue-700 shadow-md rounded-lg"
                              : "",
                            "flex text-md text-gray-900 dark:text-white px-4 py-3 font-semibold"
                          )}
                          href={item.href}
                        >
                          {item.icon}
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
