import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex  flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div className="">
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            At FOREVER, we believe style is more than what you wear. It's how
            you express yourself. We bring together timeless essentials and
            modern trends, designed for comfort, confidence, and everyday
            living. Discover pieces that make your style feel uniquely yours
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="">
          <p className=" text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-XXXXX XXXXX</li>
            <li>foreversupport@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className=" py-5 text-sm text-center">
          Copyright 2025@ forever.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
