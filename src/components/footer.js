import React from "react";

function Footer() {
  return (
    <>
      <footer class="dark:bg-gray-800 py-6 px-16 border-t border-gray-200 dark:border-gray-500 font-light flex flex-col lg:flex-row justify-between items-center">
        <p class="dark:text-gray-100 text-gray-700 mb-6 lg:mb-0">
          Copyright © 2022{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            class="text-light-blue-500 hover:text-light-blue-700"
          >
            Creative Tim
          </a>
        </p>
        <ul class="list-unstyled flex">
          <li class="mr-6">
            <a
              class="dark:text-gray-100 text-gray-700 hover:text-gray-900 font-medium block text-sm"
              target="_blank"
              rel="noreferrer"
              href="#"
            >
              About Us
            </a>
          </li>
          <li class="mr-6">
            <a
              class="dark:text-gray-100 text-gray-700 hover:text-gray-900 font-medium block text-sm"
              target="_blank"
              rel="noreferrer"
              href="https://www.creative-tim.com/blog/?ref=mtdk"
            >
              Blog
            </a>
          </li>
          <li class="mr-6">
            <a
              class="dark:text-gray-100 text-gray-700 hover:text-gray-900 font-medium block text-sm"
              target="_blank"
              rel="noreferrer"
              href="#"
            >
              MIT License
            </a>
          </li>
          <li>
            <a
              class="dark:text-gray-100 text-gray-700 hover:text-gray-900 font-medium block text-sm"
              target="_blank"
              rel="noreferrer"
              href="#"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
