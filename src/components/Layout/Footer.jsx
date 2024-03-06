import React, { useState }  from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";
import { FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { server } from "../../server";

const Footer = () => {

        const [email, setEmail] = useState("");

        const handleSubmit = async (e) => {
          e.preventDefault();

          axios
            .post(`${server}/newsletter/newsletter`, { email })
            .then((res) => {
              toast.success(res.data.message);
              setEmail("");
            })
            .catch((error) => {
              toast.error(error.response.data.message);
            });
        };
  return (
    <div className="bg-[#000435] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#000435] py-7" style={{borderBottom:".1rem solid yellow "}}>
        <h1 className="lg:text-2xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#fff] flex gap-2"><FaEnvelope size={24}/> Subscribe to get our newsletters</span> </h1>
        <div>
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email..."
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#fff] hover:bg-yellow-500 duration-300 px-5 py-2.5  rounded-md text-[#000] md:w-auto w-full">
            Submit
          </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
        <Link to="/">
            <h1 className="font-bold  text-2xl pl-3 text-[#fff] text-center border-b-4 border-yellow-500">KIAN OPTIC</h1>
            <p className="pb-1 font-[700] text-[#fff] text-center bg-[#000080]">- since 2020 -</p>
            </Link>
          <br />
          <p>An Optic that cares for not only your vision but also your eyes health.</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-[#ffff00] duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-[#ffff00] duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-[#ffff00] duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 kian optic. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
