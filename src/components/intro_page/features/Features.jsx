import React from "react";
import { RxStarFilled } from "react-icons/rx"
import { FaScrewdriverWrench } from "react-icons/fa6"
import { IoLogoBuffer } from "react-icons/io"
export default function () {
    return (

        <div className="bg-inherit pb-24 sm:pb-32" id="features">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our <span className="text-blue-900">Features</span></p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Introducing our advanced computer-based testing platform, poised to modernize exam processes. With a strong focus on excellence, security, and user-friendliness, our platform enhances testing for all stakeholders.</p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <RxStarFilled color="white" />
                                </div>
                                Intuitive Interface
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">Our platform offers a clean and user-friendly interface, streamlining navigation and minimizing test-related stress for students.</dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <FaScrewdriverWrench color="white" />
                                </div>
                                Personalized Evaluation Solutions
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">Tailor assessments to your institution's unique needs with our versatile creation tools, offering various question formats for aligned evaluations.</dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                </div>
                                Commitment to Assessment Security
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">Our platform employs advanced encryption, authentication, and guaranteeing the secure and reliable delivery of examinations while upholding their integrity.</dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <IoLogoBuffer color="white" />
                                </div>
                                Flexibility
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">Test-takers can often choose from multiple test dates and times, making it more convenient for scheduling.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>


    )
}