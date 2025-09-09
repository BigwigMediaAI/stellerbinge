import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/restru.webp";
import hero6 from "../assets/hero6.webp";
import hero7 from "../assets/hero7.jpeg";
import hero8 from "../assets/banqutes/img1.webp";
import hero9 from "../assets/banqute.webp";
// import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: hero7,
    title: "Dine. Sip. Unwind.",
    subtitle:
      "From Indian to Pan-Asian to World Cuisine – paired with crafted drinks in a luxurious setting.",
  },
  {
    image: hero1,
    title: "Modern & Sophisticated",
    subtitle:
      "Savor global flavors, signature cocktails, and a lounge experience like no other in Noida.",
  },
  {
    image: hero2,
    title: "Where Culinary Art Meets Timeless Elegance",
    subtitle:
      "A fine blend of world-class dining, elegant ambience, and unforgettable evenings.",
  },
  {
    image: hero3,
    title: "Crafted Plates, Memorable Evenings",
    subtitle:
      "Experience chef-curated dishes designed to delight every palate.",
  },
  {
    image: hero4,
    title: "Sip, Savor & Celebrate",
    subtitle:
      "Raise a glass to good times with handcrafted cocktails and premium spirits.",
  },
  {
    image: hero5,
    title: "Ambience That Inspires",
    subtitle:
      "Immerse yourself in a stylish setting perfect for gatherings, celebrations, or quiet escapes.",
  },
  {
    image: hero6,
    title: "Global Flavors, Local Heart",
    subtitle:
      "Authentic tastes from around the world, served with warm Indian hospitality.",
  },
  {
    image: hero8,
    title: "Celebrations Beyond Ordinary",
    subtitle: "Perfect Spaces for Business and Social Events",
  },
  {
    image: hero9,
    title: "Where Every Occasion Shines",
    subtitle:
      "Lavish spaces, exquisite dining, and seamless service for all your special events.",
  },
];

const Hero = () => {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // 👉 Navigation handlers
  // const nextSlide = () => setIndex(([prev]) => [(prev + 1) % slides.length, 1]);

  // const prevSlide = () =>
  //   setIndex(([prev]) => [(prev - 1 + slides.length) % slides.length, -1]);

  return (
    <div className="relative w-full h-[75vh] md:h-[100vh] overflow-hidden font-raleway font-thin ">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={slides[index].image.src}
          src={slides[index].image.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover object-center" // ✅ use object-cover
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered text */}
      <motion.div
        key={slides[index].title}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-6"
      >
        <h1 className="text-2xl md:text-5xl font-bold mb-6 leading-snug drop-shadow-lg">
          {slides[index].title}
        </h1>
        <p className="mb-8 max-w-3xl text-base md:text-xl text-gray-200 font-medium drop-shadow">
          {slides[index].subtitle}
        </p>
      </motion.div>

      {/* <div className="group">
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-[var(--primary-color)] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2  bg-[var(--primary-color)] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <ChevronRight size={28} />
        </button>
      </div> */}
    </div>
  );
};

export default Hero;
