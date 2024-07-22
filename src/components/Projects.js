import React from 'react'
import sdh from '../assests/sdh.png'
import travel from '../assests/travel.png'
import food from '../assests/food.png'
import pw from '../assests/pw.png'

export default function Projects() {
    const cardItem = [
        {
            id: 1,
            logo: sdh,
            name: "StayDineHeal",
            tagline: `A platform specifically for the people of Gandhinagar.
             It aims to provide a guide for accommodation, dining, and hospitals for locals & tourists.`,
            link: "https://github.com/Garimasingh1283/STAY.DINE.HEAL",
        },
        {
            id: 2,
            logo: food,
            name: "Food-Waste Management",
            tagline: `This is a group project made in a hackathon "HACKIITV", which is
            a solution for minimizing food waste and promoting sustainability. My contribution was towards Backend.`,
            link: "https://github.com/Garimasingh1283/IIITV",
        },
        {
            id: 3,
            logo: pw,
            name: "Password Generator",
            tagline: `This is a React project which generates strong, secure passwords with ease. I learned about
            various React hooks through this project.`,
            link: "https://github.com/Garimasingh1283/Password-Generator",
        },
        {
            id: 4,
            logo: travel,
            name: "Travel-Guide",
            tagline: `This website is an ultimate guide for exploring and planning travel
            adventures. I am currently working on this website for better results and advancements.`,
            link: "https://github.com/Garimasingh1283/Travel-Guide",
        }
    ];

    return (
        <div
            name="Portfolio"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 bg-[#EBF4F6] text-[#071952]"
        >
            <div>
                <h1 className="text-4xl font-bold mb-5 text-center text-[#071952]">Projects</h1>
                <p className="font-semibold text-center text-[#071952]">
                    Here are some projects designed & built by me.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
                    {cardItem.map(({ id, logo, name, tagline, link }) => (
                        <div
                            className="border-2 border-[#071952] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300 bg-[#F4F4F4]"
                            key={id}
                        >
                            <div className="flex justify-center mb-4">
                                <img
                                    src={logo}
                                    className="w-[150px] h-[150px] object-contain"
                                    alt={name}
                                />
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-xl mb-2 text-[#088395]">{name}</div>
                                <p className="text-[#071952] mb-4">{tagline}</p>
                                <div className="text-center">
                                    <a href={link} target="_blank" rel="noopener noreferrer">
                                        <button className="bg-[#37B7C3] hover:bg-[#088395] text-white font-bold px-4 py-2 rounded transition duration-300">
                                            Source code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}