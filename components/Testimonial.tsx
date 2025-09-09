"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import upwards from "../assets/upwards.png";
import downwards from "../assets/downwards.png";
import Image from "next/image";

// 👉 Import review source logos
import zomatoLogo from "../assets/Zomato-Logo.png";
import swiggyLogo from "../assets/Swiggy-Symbol.png";
import googleLogo from "../assets/pngimg.com - google_PNG19644.png";

interface Review {
  name: string;
  content: string;
  rating: number;
  source: "zomato" | "swiggy" | "google";
}

const reviews: Review[] = [
  {
    name: "ANUJ SAHU",
    content:
      "Stellar Binge is hands down the best restaurant in Noida! The food was absolutely delicious, and the service was warm and welcoming. Perfect place for family dinners.",
    rating: 5,
    source: "google",
  },
  {
    name: "PRIYA SINGH",
    content:
      "✨ Vibe check = Passed 💯 | Food = Even Better 😍From the quirky interiors to the drool-worthy dishes, Stellar Binge is a totalmood!Perfect for brunch, date nights, or just bingeing with your besties 💛🍝🍸",
    rating: 5,
    source: "zomato",
  },
  {
    name: "RAHUL SINGH",
    content:
      "As a foodie, I’m very picky about taste, but Stellar Binge exceeded all my expectations. The variety on the menu and the presentation of dishes were excellent.",
    rating: 5,
    source: "swiggy",
  },
  {
    name: "MAYNK KUMAR",
    content:
      "Stellar Binge has truly outdone itself with the recent renovation! The revamped look and feel of the restaurant are absolutely stunning. The new decor is modern yet cozy, with a perfect blend of vibrant colors and elegant lighting that... ",
    rating: 5,
    source: "google",
  },
  {
    name: "RAHUL",
    content:
      "it was great experience food and service is amazing polite staff and well professional tnx Binge team to treat us very well we come again soon",
    rating: 5,
    source: "zomato",
  },
];

// Utility: map source to logo
const getSourceLogo = (source: Review["source"]) => {
  switch (source) {
    case "zomato":
      return zomatoLogo;
    case "swiggy":
      return swiggyLogo;
    case "google":
      return googleLogo;
    default:
      return googleLogo;
  }
};

export default function ReviewSection() {
  return (
    <section className="w-full py-16 font-raleway bg-[var(--secondary-color)] text-black relative">
      <div className="absolute top-0 left-0">
        <Image src={upwards} alt="upwards" />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image src={downwards} alt="downwards" />
      </div>
      <div className="w-11/12 md:w-5/6 mx-auto">
        {/* Section Label */}
        <p className="text-white text-xs tracking-widest mt-1 uppercase font-semibold text-start">
          Testimonials
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-white mt-2 text-start mb-4">
          From Our Kitchen to Their
          <span className="text-white"> Hearts</span>
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white rounded-2xl border border-neutral-200 p-6 shadow-md h-80 flex flex-col justify-between hover:shadow-lg transition duration-300">
                {/* Source Logo - Top Right */}
                <div className="absolute top-4 right-8">
                  <Image
                    src={getSourceLogo(review.source)}
                    alt={review.source}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Quote Icon */}
                <FaQuoteLeft className="text-[var(--primary-color)] text-2xl opacity-40" />

                {/* Review Content */}
                <p className="text-base leading-relaxed text-black line-clamp-4 mt-2">
                  {review.content}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
                      {review.name}
                    </h3>
                    <div className="flex mt-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-[var(--primary-color)] text-sm mr-1"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Initials Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center text-sm font-bold uppercase">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
