import React from 'react';

import { FB, google, forbes,monitor,ey,techtime,testio,revolut } from '../../../assets';
import { Link } from 'react-router-dom';
export default function () {
    return (
        <section className="bg-gray-900 lg:bg-transparent pt-12 z-10" id='home'>
            <div className=" px-2 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
                <h1 className="mt-8 lg:mt-0  mb-4 text-3xl font-semibold tracking-tight leading-none md:text-5xl lg:text-6xl text-white  lg:text-gray-900">Equip educators with  advanced technology.</h1>
                <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray- lg:dark:text-gray-700">Here at ExamQuest! Transform education with our user-friendly platform. Customize computer-based tests, elevate teaching standards, and empower student success. Join us in shaping the future of learning.</p>
                <div className="flex flex-col  lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link to="/auth/create-account">
                        <span className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white lg:text-gray-900 rounded-lg border border-indigo-900  hover:bg-blue-900 hover:lg:text-white">
                            Get Started
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </span>
                    </Link>
                    <div></div>
                </div>
            </div>

            <div className="bg-inherit">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-lg font-semibold leading-8  text-gray-900 dark:text-white lg:dark:text-gray-900">Trusted Partner's</h2>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={google} alt="Transistor" width="158" height="48" />
                        <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={FB} alt="Reform" width="158" height="48" />
                        <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={monitor} alt="Tuple" width="158" height="48" />
                        <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={forbes} alt="Tuple" width="158" height="48" />
                        <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={ey} alt="Transistor" width="158" height="48" />
                        <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={techtime} alt="Reform" width="158" height="48" />
                        <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={revolut} alt="Tuple" width="158" height="48" />
                        <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={testio} alt="Tuple" width="158" height="48" />
                    </div>
                </div>
            </div>
        </section>
    );
}