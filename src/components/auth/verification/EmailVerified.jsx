import React from 'react';
import { FaRegThumbsUp } from "react-icons/fa6";

export default function ({ email }) {
    console.log(email);

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-inherit">
            <div className="max-w-xl px-5 flex flex-col items-center text-center"> {/* Updated flex properties */}
                <FaRegThumbsUp color='#013220 ' size="45" className='mb-4' />
                <p className="mb-2 text-lg text-zinc-500">You've successfully verified your account <span className="font-medium text-indigo-500">{email}</span>.</p>
                <a href="/auth/sign-in/" className="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700">Login →</a>
            </div>
        </div>
    );
}
