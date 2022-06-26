import React from 'react';
 import { PhoneIcon, SupportIcon, NewspaperIcon  } from "@heroicons/react/solid";
 import Food from "../img/food.jpg";

export default function ContactUs() {

    const supportLinks = [
        {
            name: 'Connect',
            href: '#',
            description:
                'Eatmore enables direct connect between buyers & sellers which allows one-on-one discussions to negotiate terms of trade between transacting parties.',
               icon: PhoneIcon,
        },
        {
            name: 'Grow',
            href: '#',
            description:
                'Eatmore provides access to new markets with a fast, low-cost, low-wastage, highly-reliable shipping & delivery system across India for its buyers and sellers.',
              icon: SupportIcon,
        },
        {
            name: 'Discover',
            href: '#',
            description:
                'Businesses can reach out to buyers and sellers across the country. Whayn facilitates efficient and convenient transactions by offering low and best price, good quality and best selection to its retailers.',
              icon: NewspaperIcon,
        },
    ]

    return (
        <div className="bg-white mt-5">
            {/* Header */}
            <div className="relative pb-32 bg-gray-800 ">
                <div className="absolute inset-0">
                <img src={Food}  alt="" className="h-5/6 w-full"/>
                    <div className="absolute inset-0 bg-gray-800 mix-blend-hard-light" aria-hidden="true" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">About Us</h1>
                    <p className="mt-6 max-w-3xl text-xl text-gray-300">
                    For over a decade now, we’ve been empowering our users in discovering new tastes and experiences across countries. By putting together meticulous information for our users, we enable them to make an informed choice.
                    </p>
                </div>
            </div>

            {/* Overlapping cards */}
            <section
                className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <h2 className="sr-only" id="contact-heading">
                    Contact us
                </h2>
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    {supportLinks.map((link) => (
                        <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div className="absolute top-0 p-5 inline-block bg-red-500 rounded-xl shadow-lg transform -translate-y-1/2">
                                    <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                                <p className="mt-4 text-base text-gray-500">{link.description}</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                                    Contact us<span aria-hidden="true"> &rarr;</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>


    )
}
