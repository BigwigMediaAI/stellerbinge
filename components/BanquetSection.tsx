"use client";

import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import BanquetImg from "../assets/banqutes/img1.webp"; // replace with your banquet image
import Link from "next/link";
import upwards from "../assets/upwards.png";
import downwards from "../assets/downwards.png";

const BanquetSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [events, setEvents] = useState(0);
  const [capacity, setCapacity] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateValue(setEvents, 497, 1000); // total events hosted
          animateValue(setCapacity, 150, 1000); // max capacity
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
      className="bg-[var(--secondary-color)] text-black font-raleway font-light dark:font-thin relative overflow-hidden pt-10 pb-16"
    >
      <div className="absolute top-0 left-0">
        <Image src={upwards} alt="upwards" />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image src={downwards} alt="downwards" />
      </div>
      <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
        {/* Image Left */}
        <div className="relative w-full h-full z-10 order-1 md:order-1">
          <div className="hidden md:block absolute top-10 left-6 w-full h-full bg-[radial-gradient(var(--primary-color)_2.5px,transparent_2.5px)] bg-[length:28px_28px] z-0" />
          <div className="hidden md:block absolute left-10 top-24 md:bottom-0 md:left-0 w-[90%] h-[90%] md:w-[90%] md:h-[80%] bg-[var(--primary-color)] z-0"></div>
          <Image
            src={BanquetImg}
            alt="Banquet Hall"
            width={600}
            height={400}
            className="relative z-10 w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>

        {/* Text Content Right */}
        <div className="z-10 order-2 md:order-2">
          <div className="mb-2">
            <p
              className="uppercase tracking-widest font-semibold mt-2 text-xs text-white"
              data-aos="fade-left"
            >
              Celebrate at Stellar binge
            </p>
          </div>
          <h2
            className="text-2xl md:text-4xl font-semibold text-white mt-2"
            data-aos="fade-left"
          >
            Elegant Banquet Hall For All Your Special Occasions
          </h2>
          <p
            className="text-gray-100 dark:text-gray-300 text-base mb-8 mt-4"
            data-aos="fade-left"
          >
            From corporate gatherings to small family celebrations, our banquet
            hall provides the perfect ambiance. With elegant interiors, premium
            service, and customized catering, we make every event unforgettable.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x border-t border-gray-300 mb-8">
            <div className="py-4 sm:pr-6">
              <p className="text-xs font-semibold text-gray-200 dark:text-gray-300 uppercase mb-1">
                Events Hosted
              </p>
              <p className="text-gray-200 dark:text-gray-300 text-4xl font-sans font-semibold">
                {events}
              </p>
              <p className="text-gray-200 dark:text-gray-300 text-md">
                Memorable celebrations & corporate gatherings.
              </p>
            </div>
            <div className="py-4 sm:pl-6">
              <p className="text-xs font-semibold text-gray-200 dark:text-gray-300 uppercase mb-1">
                Guest Capacity
              </p>
              <p className="text-gray-200 dark:text-gray-300 text-4xl font-semibold font-sans">
                {capacity}
              </p>
              <p className="text-gray-200 dark:text-gray-300 text-md">
                Guests can be accommodated with comfort & elegance.
              </p>
            </div>
          </div>

          {/* Call Us Button */}
          <a href="tel:+919599816865">
            <button className="relative group px-6 py-3 text-sm uppercase border border-white text-white overflow-hidden transition-all duration-300 hover:text-[var(--primary-color)] cursor-pointer">
              <span className="relative z-10"> Call Us</span>
              <span
                className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                style={{ backgroundColor: "#FFFFFF" }}
              ></span>
            </button>
          </a>
          <Link href="/banquet">
            <button className="relative group px-6 py-3 mx-4 text-sm uppercase border border-white text-white overflow-hidden transition-all duration-300 hover:text-[var(--primary-color)] cursor-pointer">
              <span className="relative z-10">Know More</span>
              <span
                className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                style={{ backgroundColor: "#FFFFFF" }}
              ></span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BanquetSection;
