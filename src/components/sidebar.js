import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { BsTable } from "react-icons/bs";
import { MdFingerprint } from "react-icons/md";
import { BiWindow } from "react-icons/bi";
import { FaFileInvoice } from "react-icons/fa";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <RiDashboardFill className="my-auto mr-3" size={20} />,
    current: true,
  },
  {
    name: "Table",
    href: "/table",
    icon: <BsTable className="my-auto mr-3" size={20} />,
    current: false,
  },
  {
    name: "Login",
    href: "/login",
    icon: <MdFingerprint className="my-auto mr-3" size={20} />,
    current: false,
  },
  {
    name: "Modal",
    href: "/modal",
    icon: <BiWindow className="my-auto mr-3" size={20} />,
    current: false,
  },
  {
    name: "Invoice",
    href: "/invoice",
    icon: <FaFileInvoice className="my-auto mr-3" size={20} />,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Sidebar() {
  return (
    <>
      <div className="hidden md:block h-screen fixed top-0 md:left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white dark:bg-gray-800 w-64 z-10 py-4 px-6 transition-all duration-300 mt-16 transition delay-150 duration-300">
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
    </>
  );
}

export default Sidebar;
