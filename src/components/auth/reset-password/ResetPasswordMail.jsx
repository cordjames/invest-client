import React from "react";
import { Link } from "react-router-dom";
export default function () {
    return (
        <section className="bg-inherit mt-16 lg:mt-0">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h3 className="text-center mb-10">
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                            Exam
                            <span className="text-blue-900">Quest</span>
                        </span>
                    </h3>

                    <p className="font-light text-gray-500 dark:text-gray-400">Type in your email and We’ll email you instructions to reset your password.</p>
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                        <div className=" mb-10 lg:mb-10">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                        </div>

                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send reset password email</button>
                    </form>

                </div>
            </div>
        </section>
    )
}
