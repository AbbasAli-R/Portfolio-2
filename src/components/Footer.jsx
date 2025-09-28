import React from "react";
import Logo from "../assets/images/logo.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      {/* divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white opacity-10"></div>
      <footer className="main-container grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
        <img src={Logo} alt="" />
        <div>
          <h5 className="font-medium mb-5">Services & accessibility</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="">Web developmet</a>
            </li>
            <li>
              <a href="">Mon-Fri: 9:00 to 5:00</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-5">Contact</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="">abbas.ali252001@gmail.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-5">Social Links</h5>
          <ul className="flex gap-4 text-base lg:text-lg">
            <li>
             <Link to='https://github.com/AbbasAli-R' target="_blank"><FaGithub size={25}/></Link>
            </li>
            <li>
             <Link to='https://www.linkedin.com/in/abbasali-r/' target="_blank"><FaLinkedin size={25}/></Link>
            </li>
          </ul>
        </div>
      </footer>
    {/* divider */}
       <div className="max-w-[1500px] m-auto h-[1px] bg-white opacity-10"></div>

       <div className="main-container text-center p-4 text-sm text-gray-400">
        <div>© 2025 AbbasAli | All rights reserved</div>
       </div>
    </>
  );
};

export default Footer;
