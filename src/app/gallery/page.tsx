"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/hero1.webp";
import { useRef, useState } from "react";
import MobileContactBar from "../../../components/MobileContactBar";

// ✅ Import data & type
import {
  vegMenuItems,
  nonVegMenuItems,
  restaurantImages,
  type GalleryItem,
} from "../../../src/data/data";
import ScrollToTopButton from "../../../components/ScrollToTopButton";

export default function OurCreationsPage() {
  const creationsRef = useRef<HTMLDivElement | null>(null);

  const scrollToNext = () => {
    if (creationsRef.current) {
      const yOffset = -70;
      const y =
        creationsRef.current.getBoundingClientRect().top +
        window.scrollY +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Dropdown state
  const [activeCategory, setActiveCategory] = useState<
    "veg" | "non-veg" | "restaurant"
  >("veg");

  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeList, setActiveList] = useState<GalleryItem[]>(vegMenuItems);

  const openModal = (index: number, items: GalleryItem[]) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setActiveList(items);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? activeList.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === activeList.length - 1 ? 0 : prev + 1));

  // Card grid
  const MenuGrid = ({ items }: { items: GalleryItem[] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          onClick={() => openModal(idx, items)}
          className="relative aspect-[3/4] w-full shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition cursor-pointer flex flex-col"
        >
          <div className="relative flex-1">
            <Image
              src={item.img}
              alt={item.name ?? "Gallery image"}
              fill
              className="object-cover bg-white hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="bg-gray-100 py-2 text-center font-semibold text-gray-800">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] md:h-[100vh] flex items-center justify-center pt-32">
        <Image
          src={banner}
          alt="Our Creations"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 ">
            Our Creations
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            A showcase of flavors, artistry, and passion , crafted by our chefs
            to delight your senses.
          </p>
          <button
            onClick={scrollToNext}
            className="mt-10 animate-bounce border rounded-full w-fit px-1 py-2 mx-auto cursor-pointer"
          >
            <span className="text-3xl">↓</span>
          </button>
        </div>
      </section>

      {/* MENU / RESTAURANT IMAGES */}
      <section ref={creationsRef} className="bg-white py-16">
        <div className="w-11/12 md:w-5/6 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-[var(--primary-color)]">
            Explore Our Creations
          </h2>

          {/* Dropdown */}
          <div className="mb-10">
            <select
              value={activeCategory}
              onChange={(e) =>
                setActiveCategory(
                  e.target.value as "veg" | "non-veg" | "restaurant"
                )
              }
              className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            >
              <option value="veg">🍃 Veg Dishes</option>
              <option value="non-veg">🍗 Non-Veg Dishes</option>
              <option value="restaurant">🏠 Restaurant Interiors</option>
            </select>
          </div>

          {/* Show selected category */}
          {activeCategory === "veg" && <MenuGrid items={vegMenuItems} />}
          {activeCategory === "non-veg" && <MenuGrid items={nonVegMenuItems} />}
          {activeCategory === "restaurant" && (
            <MenuGrid items={restaurantImages} />
          )}
        </div>
      </section>

      {/* FULLSCREEN MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            ✕
          </button>
          <button
            onClick={prevImage}
            className="absolute left-5 text-white text-4xl font-bold"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-5 text-white text-4xl font-bold"
          >
            ›
          </button>
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 h-[80vh]">
            <Image
              src={activeList[currentIndex].img}
              alt={activeList[currentIndex].name ?? "Gallery image"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      <Footer />
      <MobileContactBar />
      <ScrollToTopButton />
    </div>
  );
}
