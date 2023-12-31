import React from "react";
import NewsLetter from "../news_leter/NewsLetter";

export default function () {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 border-t  shadow  md:p-6 bg-gray-800 border-gray-600">
      <NewsLetter />
      <section className="md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
          <a href="/" className="hover:underline">
            {" "}
            Exam<span className="text-blue-900">Quest</span>™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
