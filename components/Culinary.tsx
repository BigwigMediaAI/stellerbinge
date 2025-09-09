import Image from "next/image";
import React from "react";
import upwards from "../assets/upwards.png";
import downwards from "../assets/downwards.png";
import foodImage from "../assets/food.webp";

const Culinary = () => {
  return (
    <section className="pt-12 pb-24 bg-[var(--secondary-color)] relative">
      <div className="absolute top-0 left-0">
        <Image src={upwards} alt="upwards" />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image src={downwards} alt="downwards" />
      </div>
      <div className="w-11/12 md:w-5/6 mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
        {/* Left - Text */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">
            Our Culinary Philosophy
          </h2>
          <p className="text-lg text-gray-200 dark:text-gray-300 font-thin">
            At our restaurant, food is not just about taste , it’s about
            passion, freshness, and authenticity. We believe in sourcing the
            finest local ingredients and crafting every dish with love, care,
            and tradition.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-semibold text-gray-200 ">
                🌱 Fresh Ingredients
              </h4>
              <p className="text-gray-300  text-md font-thin">
                Curated with care to bring freshness and flavor to every dish.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-200 dark:text-white">
                👨‍🍳 Crafted with Love
              </h4>
              <p className="text-gray-300 dark:text-gray-400 text-md font-thin">
                Every dish tells a story of our passion for food.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative w-full h-full z-10">
          <div className="hidden md:block absolute top-16 right-6 w-full h-full bg-[radial-gradient(var(--primary-color)_2.5px,transparent_2.5px)] bg-[length:28px_28px] z-0" />
          <div className="hidden md:block absolute right-16 top-24 md:bottom-0 md:right-0 w-[90%] h-[90%] md:w-[90%] md:h-[80%] bg-[var(--primary-color)] z-0"></div>
          <Image
            src={foodImage}
            alt="foodImage"
            width={600} // you can adjust based on actual image ratio
            height={400}
            className="relative z-10 w-full h-[300px] md:h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Culinary;
