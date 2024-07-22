import React from 'react'
import c from '../assests/c.png'
import html from '../assests/html.png'
import css from '../assests/css.png'
import javascript from '../assests/js.png'
import java from '../assests/java.png'
import python from '../assests/python.png'
import pandas from '../assests/pandas.png'
import numpy from '../assests/numpy.png'
import matplotlib from '../assests/matplotlib.png'
import mongodb from '../assests/mongodb.png'
import express from '../assests/express.png'
import react from '../assests/react.png'
import nodejs from '../assests/nodejs.png'
import mysql from '../assests/mysql.png'
import tailwind from '../assests/tailwind.png'

export default function Skills() {
    const cardItem = [
        { id: 1, logo: c, name: "C" },
        { id: 2, logo: java, name: "Java" },
        { id: 3, logo: python, name: "Python" },
        { id: 4, logo: javascript, name: "JavaScript" },
        { id: 5, logo: html, name: "HTML" },
        { id: 6, logo: css, name: "CSS" },
        { id: 7, logo: tailwind, name: "Tailwind CSS" },
        { id: 8, logo: mongodb, name: "MongoDB" },
        { id: 9, logo: express, name: "Express.js" },
        { id: 10, logo: react, name: "React.js" },
        { id: 11, logo: nodejs, name: "Node.js" },
        { id: 12, logo: pandas, name: "Pandas" },
        { id: 13, logo: numpy, name: "Numpy" },
        { id: 14, logo: matplotlib, name: "Matplotlib" },
        { id: 15, logo: mysql, name: "MySQL" }
    ];

    return (
        <div
            name="Technical Skills"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 bg-[#EBF4F6] text-[#071952]"
        >
            <h1 className="text-4xl font-bold text-center mb-8 text-[#071952]">Technical Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-7">
                {cardItem.map(({ id, logo, name }) => (
                    <div
                        key={id}
                        className="flex flex-col items-center justify-center border-2 border-[#071952] rounded-lg shadow-md p-4 cursor-pointer hover:bg-[#37B7C3] hover:scale-105 transition-transform duration-300"
                    >
                        <img src={logo} className="w-24 h-24 mb-4 object-contain" alt={name} />
                        <span className="text-lg font-semibold text-[#071952]">{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}