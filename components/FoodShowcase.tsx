"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image, { StaticImageData } from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import img1 from "../assets/food/Chilli Chicken Dry.webp";
import img2 from "../assets/food/Chilli Fish.webp";
import img3 from "../assets/food/Crispy Babycorn.webp";
import img4 from "../assets/food/Crispy Corns.webp";
import img5 from "../assets/food/Hara Bhara Kebab  - Copy.webp";
import img6 from "../assets/food/Makhmali seekh kebab.webp";
import img7 from "../assets/food/Murg Banno Kebab.webp";
import img8 from "../assets/food/Murgh Malai Kebab.webp";
import img9 from "../assets/food/Mutton Galouti.webp";
import img10 from "../assets/food/Non-Veg Kebab Paltter.webp";
import img11 from "../assets/food/Tandoori Chicken.webp";
import img12 from "../assets/food/Hummus with pita bread.webp";
import img13 from "../assets/food/Fish Curry.webp";
import img14 from "../assets/food/Mutton Roganjosh.webp";
import img15 from "../assets/food/Diwani Handi.webp";
import img16 from "../assets/food/Shahi Paneer.webp";
import img17 from "../assets/food/Paneer Lababdar.webp";
import img18 from "../assets/food/Dal Stellar.webp";
import img19 from "../assets/food/Kshmiri Fish Tikka.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

const foodImages: { src: StaticImageData; title: string }[] = [
  { src: img1, title: "Chilli Chicken Dry 🌶️🍗" },
  { src: img2, title: "Chilli Fish 🌶️🐟" },
  { src: img3, title: "Crispy Babycorn 🥦" },
  { src: img4, title: "Crispy Corns 🥦" },
  { src: img5, title: "Hara Bhara Kebab 🥦" },
  { src: img6, title: "Makhmali Seekh Kebab 🍗" },
  { src: img7, title: "Murg Banno Kebab 🍗" },
  { src: img8, title: "Murgh Malai Kebab 🍗" },
  { src: img9, title: "Mutton Galouti 🍖" },
  { src: img10, title: "Non-Veg Kebab Platter 🍗🍖" },
  { src: img11, title: "Tandoori Chicken 🍗" },
  { src: img12, title: "Hummus with pita bread 🥦" },
  { src: img13, title: "Fish Curry 🐟" },
  { src: img14, title: "Mutton Roganjosh 🍗🍖" },
  { src: img15, title: "Diwani Handi 🥦" },
  { src: img16, title: "Shahi Paneer 🥦" },
  { src: img17, title: "Paneer Lababdar 🥦" },
  { src: img18, title: "Dal Stellar 🥦" },
  { src: img19, title: "Kshmiri Fish Tikka 🌶️🐟" },
];

export default function SpringSlider() {
  return (
    <section className="w-11/12 md:w-5/6 mx-auto py-12 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[var(--primary-color)]">
        Our Artisanal Dishes
      </h2>
      {/* Custom Navigation Buttons */}
      <button className="hidden md:block custom-prev absolute -left-14 top-1/2 -translate-y-1/2 z-10  ">
        <ChevronLeft
          className=" text-[var(--primary-color)] cursor-pointer"
          size={64}
        />
      </button>
      <button className="hidden md:block custom-next absolute -right-14 top-1/2 -translate-y-1/2 z-10  ">
        <ChevronRight
          className=" text-[var(--primary-color)] cursor-pointer"
          size={64}
        />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        grabCursor={true}
        loop={true}
        spaceBetween={30}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1200}
        className="w-full mx-auto"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {foodImages.map((item, i) => (
          <SwiperSlide key={i} className="flex flex-col items-center">
            <Image
              src={item.src}
              alt={item.title}
              width={400}
              height={350}
              className="rounded-md shadow-md w-full h-[350px] object-cover"
            />
            <p className="mt-3 text-lg font-semibold text-gray-800 text-center">
              {item.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
