import React from 'react';
import { FaLinkedin, FaInstagramSquare, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiPandas, SiNumpy } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa6';
import pic from '../assests/homepage.png';

export default function Home() {
    return (
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-2 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row border-2 border-[#071952] bg-[#EBF4F6] p-6 rounded-lg">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-6 order-2 md:order-1">
            <div className="text-center">
              <span className="font-bold text-4xl text-[#071952]">Welcome To My Portfolio!</span>
            </div>
            <br />
            <p className="text-sm md:text-md font-semibold text-center text-[#071952]">
              I specialize in developing user-friendly and accessible web applications. I am passionate about leveraging AI and machine learning to solve complex problems and create innovative solutions.
            </p>
            <br />
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="font-bold text-center text-xl text-[#088395]">Social Handles</h1>
                <ul className="flex justify-center space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/garima-singh-a69ab2256/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer text-[#071952] hover:text-[#088395]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Garimasingh1283"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-2xl cursor-pointer text-[#071952] hover:text-[#088395]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/garimazz._128?igsh=MW05d2hteWFwYnFuOQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagramSquare className="text-2xl cursor-pointer text-[#071952] hover:text-[#088395]" />
                    </a>
                  </li>
                </ul>
              </div>
  
              <div className="space-y-2">
                <h1 className="font-bold text-center text-xl text-[#088395]">Passionately Working on</h1>
                <div className="flex flex-wrap justify-center space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-[#071952] cursor-pointer text-[#071952]" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-[#071952] cursor-pointer text-[#071952]" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-[#071952] cursor-pointer text-[#071952]" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-[#071952] cursor-pointer text-[#071952]" />
                  <SiMysql className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-[#071952] cursor-pointer text-[#071952]" />
                  <SiPandas className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-[#071952] cursor-pointer text-[#071952]" />
                  <SiNumpy className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-[#071952] cursor-pointer text-[#071952]" />
                </div>
              </div>
            </div>
          </div>
  
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 flex justify-center">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }