import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div className="">
      <div className="tex-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-5 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            nemo repellendus. Quasi aliquam dicta temporibus repellendus,
            reiciendis nesciunt. Tempore, maxime!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
            quis.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quo
            quisquam quos deserunt animi nam.
          </p>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            totam omnis deserunt excepturi atque voluptatem.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            totam omnis deserunt excepturi atque voluptatem.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            totam omnis deserunt excepturi atque voluptatem.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
