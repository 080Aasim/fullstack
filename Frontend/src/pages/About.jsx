import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

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
            At FOREVER, we believe style is more than what you wear. It's how
            you express yourself. We bring together timeless essentials and
            modern trends, designed for comfort, confidence, and everyday
            living.
          </p>
          <p>Discover pieces that make your style feel uniquely yours.</p>
          <b className="text-gray-800">Our Mission</b>
          <p className="">
            At FOREVER, our mission is to make fashion simple, accessible, and
            inspiring. We aim to bring you stylish, comfortable, and quality
            clothing that fits effortlessly into everyday life. From timeless
            essentials to modern trends, we want everyone to feel confident,
            comfortable, and uniquely themselves in what they wear.
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
            At **FOREVER**, we are committed to delivering clothing that meets
            high standards of quality, comfort, and style. We carefully select
            our products and pay attention to every detail to ensure you receive
            pieces you can feel confident wearing. Your satisfaction is at the
            heart of everything we do. .
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience:</b>
          <p className="text-gray-600">
            At FOREVER, we make shopping simple and convenient. Browse our
            collection, discover your favorite styles, and order your essentials
            from the comfort of your home. With an easy-to-use shopping
            experience and hassle-free ordering, finding your perfect look is
            just a few clicks away.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            At FOREVER, our customers come first. We’re committed to providing
            friendly, reliable, and responsive support throughout your shopping
            journey. Whether you have a question about a product, an order, or
            anything else, we’re here to help make your experience smooth and
            enjoyable.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
