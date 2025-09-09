"use client";

import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Hero2 from "../assets/hero2.webp";
import Link from "next/link";
import { PartyPopper, Utensils } from "lucide-react";

const DiningExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [dishes, setDishes] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateValue(setDishes, 120, 1000); // total signature dishes
          animateValue(setYears, 8, 1000); // years of serving
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const animateValue = (
    setter: (value: number) => void,
    target: number,
    duration: number
  ) => {
    const start = 0;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setter(Math.floor(current));
    }, stepTime);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white text-black font-raleway font-light dark:font-thin relative overflow-hidden"
    >
      <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
        {/* Text Content */}
        <div className="z-10 ">
          <div className="mb-2">
            <p
              className="uppercase tracking-widest font-semibold mt-2 text-xs text-[var(--primary-color)]"
              data-aos="fade-right"
            >
              Welcome to Stellar Binge restaurant and lounge bar
            </p>
          </div>
          <h2
            className="text-2xl md:text-4xl font-semibold text-black mt-2"
            data-aos="fade-right"
          >
            Your destination for flavors, finesse, and unforgettable moments.
          </h2>
          <p
            className="text-gray-700 dark:text-gray-300 text-base mb-8 mt-4 text-justify"
            data-aos="fade-right"
          >
            At Stellar Binge, every dish is a masterpiece, crafted with passion,
            plated with precision. We go beyond dining to create moments that
            last beyond the last bite. From signature cocktails to chef-curated
            delicacies, experience luxury dining in the heart of Noida. Our
            elegant banquet hall accommodates up to 150 guests, perfect for
            corporate events, kitty parties, birthdays, and intimate
            celebrations. With bespoke décor, impeccable service, and gourmet
            menus, we ensure every occasion is unforgettable. <br />
          </p>
          <span>
            <i>
              Stellar Binge – Where Taste, Luxury, and Hospitality come
              together.
            </i>
          </span>

          {/* Stats */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x border-t border-gray-300 mb-8">
            <div className="py-4 sm:pr-6">
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1">
                Signature Creations
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-4xl font-sans font-semibold">
                {dishes}+
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Handcrafted dishes & drinks designed to impress.
              </p>
            </div>
            <div className="py-4 sm:pl-6">
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1">
                Serving Since
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-4xl font-semibold font-sans">
                {years}+
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Years of creating memorable dining experiences.
              </p>
            </div>
          </div> */}

          {/* Buttons */}
          <div className="flex flex-nowrap gap-3 mt-8 overflow-x-auto">
            <Link href="/contact">
              <button className="relative group px-4 py-2 text-xs md:text-sm uppercase border border-[var(--primary-color)] text-[var(--primary-color)] whitespace-nowrap overflow-hidden transition-all duration-300 hover:text-white cursor-pointer rounded-md">
                <span className="relative z-10 flex items-center gap-2">
                  <Utensils className="w-5 h-5" />
                  Restaurant
                </span>
                <span
                  className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                  style={{ backgroundColor: "#B10203" }}
                ></span>
              </button>
            </Link>

            <Link href="/banquet">
              <button className="relative group px-4 py-2 text-xs md:text-sm uppercase border border-[var(--primary-color)] text-[var(--primary-color)] whitespace-nowrap overflow-hidden transition-all duration-300 hover:text-white cursor-pointer rounded-md">
                <span className="relative z-10 flex items-center gap-2">
                  <PartyPopper className="w-5 h-5" />
                  Banquet
                </span>
                <span
                  className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                  style={{ backgroundColor: "#B10203" }}
                ></span>
              </button>
            </Link>

            {/* <a href="tel:+919599816865">
              <button className="relative group px-4 py-2 text-xs md:text-sm uppercase border border-[var(--primary-color)] text-[var(--primary-color)] whitespace-nowrap overflow-hidden transition-all duration-300 hover:text-white cursor-pointer rounded-md">
                <span className="relative z-10">📞 Call Us</span>
                <span
                  className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                  style={{ backgroundColor: "#B10203" }}
                ></span>
              </button>
            </a> */}
          </div>
        </div>

        {/* Image with dotted background */}
        <div className="relative w-full h-full z-10">
          <div className="hidden md:block absolute top-16 right-8 w-full h-full bg-[radial-gradient(var(--primary-color)_2.5px,transparent_2.5px)] bg-[length:28px_28px] z-0" />
          <div className="hidden md:block absolute right-10 top-28 md:bottom-0 md:right-0 w-[90%] h-[90%] md:w-[90%] md:h-[80%] bg-[var(--primary-color)] z-0"></div>
          <Image
            src={Hero2}
            alt="Dining"
            width={600}
            height={400}
            className="relative z-10 w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DiningExperienceSection;
