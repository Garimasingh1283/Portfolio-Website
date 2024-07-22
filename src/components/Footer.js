import React from "react";
import { FaLinkedin, FaInstagramSquare, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <hr className="border-[#088395]" />
      <footer className="py-12 bg-[#071952] text-[#EBF4F6]">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4 mb-8">
              <a href="https://www.linkedin.com/in/garima-singh-a69ab2256/" target="_blank" rel="noopener noreferrer" className="text-[#EBF4F6] hover:text-[#37B7C3] transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/garimazz._128?igsh=MW05d2hteWFwYnFuOQ==" target="_blank" rel="noopener noreferrer" className="text-[#EBF4F6] hover:text-[#37B7C3] transition-colors">
                <FaInstagramSquare size={24} />
              </a>
              <a href="https://github.com/Garimasingh1283" target="_blank" rel="noopener noreferrer" className="text-[#EBF4F6] hover:text-[#37B7C3] transition-colors">
                <FaGithub size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-[#37B7C3] pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm"> ❤️ GARIMA SINGH</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
