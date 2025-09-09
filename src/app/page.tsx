"use client";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import DiningExperienceSection from "../../components/DineWithUs";
import About from "../../components/About";
import Footer from "../../components/Footer";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero1 from "../../assets/ab11.webp";
import hero3 from "../../assets/ab8.webp";
import hero4 from "../../assets/ab9.webp";
import hero5 from "../../assets/ab10.webp";
import hero6 from "../../assets/ab6.jpg";
import hero7 from "../../assets/ab7.jpg";
import ReviewSection from "../../components/Testimonial";
import FoodPanoramaSlider from "../../components/FoodShowcase";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import MobileContactBar from "../../components/MobileContactBar";
// import WhatsAppButton from "../../components/floatingBtn";
import BanquetSection from "../../components/BanquetSection";
import Special from "../../components/Special";
import Culinary from "../../components/Culinary";
import BlogPreview from "../../components/Blogs";

const fundamentals = [
  { poster: hero6 },
  { poster: hero3 },
  { poster: hero4 },
  { poster: hero5 },
  { poster: hero1 },
  { poster: hero7 },
];

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <DiningExperienceSection />
      <About />
      <FoodPanoramaSlider />
      <Culinary />
      <Special />
      <ReviewSection />
      {/* Section */}
      <section className="bg-white dark:bg-black font-raleway font-light dark:font-thin">
        <div className="w-11/12 md:w-5/6 mx-auto py-10">
          {/* Small Label */}
          <p className="text-[var(--primary-color)] text-xs tracking-widest mt-1 uppercase font-semibold">
            Redefining Dining Through Signature Experiences
          </p>

          {/* Heading */}
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-white mt-2">
              Journey of Taste, Ambience, and Indulgence
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
            {fundamentals.map((creation, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-sm bg-cover bg-center h-96 ${
                  index === 0 || index === 5 ? "md:col-span-2" : ""
                }`}
                style={{ backgroundImage: `url(${creation.poster.src})` }}
                data-aos="zoom-in"
              ></div>
            ))}
          </div>
        </div>
      </section>
      <BanquetSection />

      <BlogPreview />
      <Footer />
      <ScrollToTopButton />
      <MobileContactBar />
      {/* <WhatsAppButton /> */}
    </div>
  );
}
