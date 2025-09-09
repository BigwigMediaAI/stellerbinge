// app/banquet/page.tsx
"use client";

import Image from "next/image";
import banquetHero from "../../../assets/banq.webp";
import { banquetImages } from "../../../src/data/data";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import {
  MapPin,
  Users,
  Utensils,
  Sparkles,
  Car,
  Headphones,
  Wine,
  Briefcase,
  Building,
} from "lucide-react";
import upwards from "../../../assets/upwards.png";
import downwards from "../../../assets/downwards.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import ScrollToTopButton from "../../../components/ScrollToTopButton";

export default function BanquetPage() {
  const banquetsRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false, // whether animation should happen only once
      easing: "ease-in-out",
    });
  }, []);

  const scrollToNext = () => {
    if (banquetsRef.current) {
      const yOffset = -70;
      const y =
        banquetsRef.current.getBoundingClientRect().top +
        window.scrollY +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar />
      <main className="bg-white text-black font-raleway mt-28">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[90vh] flex items-center justify-center">
          <Image
            src={banquetHero}
            alt="Banquet Hall"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="relative z-10 text-center text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold" data-aos="fade-up">
              Gather & Celebrate
            </h1>
            <p className="mt-4 text-lg md:text-xl" data-aos="fade-up">
              The Ideal Space for Corporate Meets & Cozy Get-Togethers
            </p>
            <button
              onClick={scrollToNext}
              className="mt-10 animate-bounce border rounded-full w-fit px-1 py-2 mx-auto cursor-pointer"
            >
              <span className="text-3xl">↓</span>
            </button>
          </div>
        </section>

        {/* Intro Section */}
        <section
          className="w-11/12 md:w-5/6 mx-auto py-12 text-center space-y-6"
          data-aos="fade-up"
          ref={banquetsRef}
        >
          <h2 className="text-2xl md:text-4xl font-semibold  text-[var(--primary-color)]">
            Host Your Special Moments at{" "}
            <span className="text-[var(--primary-color)]">Stellar Binge</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Whether it’s a birthday party, kitty party, corporate meet, or a
            cozy family gathering <br /> Stellar Binge offers the perfect
            banquet hall with elegant interiors, premium ambience, and tailored
            service.
          </p>
        </section>

        {/* Why Choose Section */}
        <section
          className="relative bg-[var(--secondary-color)] pt-12 pb-20"
          data-aos="fade-up"
        >
          <div className="absolute top-0 left-0">
            <Image src={upwards} alt="upwards" />
          </div>
          <div className="absolute bottom-0 left-0">
            <Image src={downwards} alt="downwards" />
          </div>
          <div className="w-11/12 md:w-5/6 mx-auto">
            <h3 className="text-2xl md:text-4xl text-white font-semibold text-center mb-12">
              Experience the Difference
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <MapPin className="w-8 h-8 text-[var(--primary-color)]" />
                  ),
                  title: "Prime Location",
                  desc: "Located in Steller IT Park, Sector 62, Noida, easily accessible from all parts of the city.",
                },
                {
                  icon: (
                    <Users className="w-8 h-8 text-[var(--primary-color)]" />
                  ),
                  title: "Perfect Size",
                  desc: "Ideal for up to 150 guests – small corporate events, birthdays & kitty parties.",
                },
                {
                  icon: (
                    <Utensils className="w-8 h-8 text-[var(--primary-color)]" />
                  ),
                  title: "Lavish Food",
                  desc: "Multi-cuisine menu with Indian, Chinese & Continental delicacies.",
                },
                {
                  icon: (
                    <Sparkles className="w-8 h-8 text-[var(--primary-color)]" />
                  ),
                  title: "Elegant Ambience",
                  desc: "Modern interiors with stylish décor & flexible seating.",
                },
                {
                  icon: (
                    <Building className="w-8 h-8 text-[var(--primary-color)]" />
                  ),
                  title: "Lounge ",
                  desc: "Spacious lounge  designed for corporate events, and private gatherings.",
                },
                {
                  icon: (
                    <Headphones className="w-8 h-8 text-[var(--primary-color)]" />
                  ),
                  title: "Event Support",
                  desc: "Audio-visual setup & technical support available on request.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  {item.icon}
                  <h4 className="mt-4 font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="w-11/12 md:w-5/6 mx-auto py-16 space-y-20">
          {/* Dining */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div
              className="overflow-hidden rounded-xl shadow-md"
              data-aos="zoom-in"
            >
              <Image
                src={banquetImages[0].src}
                alt="Dining at Binge"
                width={600}
                height={400}
                className="w-full h-[350px] md:h-[400px] object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div data-aos="fade-up">
              <h3 className="text-3xl font-semibold mb-4">
                Celebrate at Binge Banquet & Events
              </h3>
              <p className="text-gray-900  text-base mb-8 mt-4 text-justify font-light">
                Discover the perfect venue for corporate events, family
                gatherings, and celebrations at Binge Banquet & Lounge. Our
                versatile spaces combine elegance with a warm, welcoming
                ambiance for every occasion.
              </p>
              <p className="text-gray-900  dark:text-gray-300 text-base mb-8 mt-4 text-justify font-light">
                From meetings and client lunches to birthdays and anniversaries,
                we offer tailored solutions with effortless planning and
                flawless execution.
              </p>
              <p className="text-gray-900  dark:text-gray-300 text-base  text-justify font-light">
                Savor gourmet menus crafted by expert chefs, featuring Indian,
                Continental, and Oriental delicacies with premium beverages.
                Every detail—décor, seating, lighting, and service—is customized
                to your theme.
              </p>
            </div>
          </div>

          {/* Conferences */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1" data-aos="fade-up">
              <h3 className="text-3xl font-semibold mb-4">
                Elegant Spaces for Conferences & Celebrations
              </h3>
              <p className="text-gray-900 dark:text-gray-300 text-base mb-8 mt-4 text-justify font-light">
                Our banquet and conference rooms are purpose-built to provide
                the perfect balance of professionalism and style. With a seating
                capacity of up to 150 guests, these versatile spaces adapt
                easily to host board meetings, training sessions, product
                launches, and celebratory banquets.
              </p>
              <p className="text-gray-900 dark:text-gray-300 text-base mb-8 mt-4 text-justify font-light ">
                Designed with modern interiors and flexible layouts, every
                detail has been thought of to enhance your event. From
                comfortable seating to elegant lighting, the ambience elevates
                both corporate and social gatherings.
              </p>
              <p className="text-gray-900 dark:text-gray-300 text-base mb-8 mt-4 text-justify font-light">
                A wide range of state-of-the-art audio-visual equipment is
                available on request, ensuring your presentations, speeches, and
                entertainment are delivered flawlessly. Our dedicated staff is
                always on hand to ensure your event runs smoothly from start to
                finish.
              </p>
            </div>
            <div
              className="overflow-hidden rounded-xl shadow-md order-1 md:order-2"
              data-aos="zoom-in"
            >
              <Image
                src={banquetImages[1].src}
                alt="Conference Hall"
                width={600}
                height={400}
                className="w-full h-[350px] md:h-[400px] object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>

          {/* Lounge Bar */}
          {/* <div className="grid md:grid-cols-2 gap-10 items-center">
            <div
              className="overflow-hidden rounded-xl shadow-md"
              data-aos="zoom-in "
            >
              <Image
                src={banquetImages[2].src}
                alt="Lounge Bar"
                width={600}
                height={400}
                className="w-full h-[350px] md:h-[400px] object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div data-aos="fade-up">
              <h3 className="text-3xl font-semibold mb-4">The Lounge Bar</h3>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-8 mt-4 text-justify font-thin">
                The Lounge Bar is the heartbeat of our banquet experience,
                offering an exclusive selection of premium spirits, fine wines,
                and handcrafted cocktails. It is designed to add an indulgent
                touch to your events.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-8 mt-4 text-justify font-thin">
                Guests can unwind in a chic, vibrant setting that perfectly
                complements both formal and informal occasions. Whether you’re
                entertaining clients, hosting a cocktail evening, or simply
                celebrating with friends, the Lounge Bar sets the stage for
                unforgettable memories.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-8 mt-4 text-justify font-thin">
                From rare whiskies to signature blends, every sip is curated for
                sophistication. Combined with our personalized service, the
                Lounge Bar is more than just a place to drink - it’s an
                experience to savor.
              </p>
            </div>
          </div> */}
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
