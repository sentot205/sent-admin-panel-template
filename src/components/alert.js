import React from "react";
// import Icon from "@material-tailwind/react/Icon";

export default function Alert({ message, type, close }) {
  return (
    <>
      <div
        className={`transition-all duration-200 text-white px-6 py-4 border-0 rounded relative mb-4 ${
          type === "success"
            ? "bg-green-500"
            : type === "error"
            ? "bg-red-500"
            : null
        }`}
      >
        <span className="text-xl inline-block mr-5 align-middle text-right">
          {/* <Icon name="announcement" size="2xl" /> */}
        </span>
        <span className="inline-block align-middle mr-8">
          <b className="capitalize">{type}</b> {message}
        </span>
        <button
          onClick={close}
          className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
        >
          <span>×</span>
        </button>
      </div>
    </>
  );
}
