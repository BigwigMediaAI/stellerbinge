"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/hero1.webp";
import { useRef, useState } from "react";
import MobileContactBar from "../../../components/MobileContactBar";
import type { StaticImageData } from "next/image";

// 👉 Import all images
import menuPage1 from "../../../assets/menu/Indian main cousrse non-veg.webp";
import menuPage2 from "../../../assets/menu/Soups.webp";
import menuPage3 from "../../../assets/menu/appatizers non-veg.webp";
import menuPage4 from "../../../assets/menu/appetizers veg.webp";
import menuPage5 from "../../../assets/menu/global main course non-veg.webp";
import menuPage6 from "../../../assets/menu/global main course veg.webp";
import menuPage7 from "../../../assets/menu/global starter veg&non-veg.webp";
import menuPage8 from "../../../assets/menu/indian main course veg (2).webp";
import menuPage9 from "../../../assets/menu/indian main course veg.webp";
import menuPage11 from "../../../assets/menu/liqure (2).jpg";
import menuPage12 from "../../../assets/menu/liqure (2).webp";
import menuPage13 from "../../../assets/menu/liqure (3).jpg";
import menuPage14 from "../../../assets/menu/liqure (3).webp";
import menuPage15 from "../../../assets/menu/liqure (4).jpg";
import menuPage16 from "../../../assets/menu/liqure (5).jpg";
import menuPage17 from "../../../assets/menu/liqure.jpg";
import menuPage18 from "../../../assets/menu/liqure.webp";
import menuPage19 from "../../../assets/menu/mocktails.webp";
import menuPage20 from "../../../assets/menu/munchies.webp";
import menuPage21 from "../../../assets/menu/pan aisa starter non-veg.webp";
import menuPage22 from "../../../assets/menu/pan asian main course non-veg.webp";
import menuPage23 from "../../../assets/menu/pan asian main course veg & non veg.webp";
import menuPage24 from "../../../assets/menu/pan asian starter veg.webp";
import menuPage25 from "../../../assets/menu/Rice&Biryani.webp";
import menuPage27 from "../../../assets/menu/salads.webp";
import menuPage28 from "../../../assets/menu/soft bevrage.webp";
import menuPage29 from "../../../assets/menu/tandoor non-veg.webp";
import menuPage30 from "../../../assets/menu/tandoor veg.webp";
import menuPage31 from "../../../assets/menu/tandoor-veg.webp";
import menuPage32 from "../../../assets/menu/yougets & deserts.webp";
import ScrollToTopButton from "../../../components/ScrollToTopButton";

export default function MenuPage() {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToNext = () => {
    if (menuRef.current) {
      const yOffset = -70;
      const y =
        menuRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // 👉 Structured Menu Categories
  const categories = [
    {
      title: "Soups & Greens",
      sub: [
        { name: "Soups", images: [menuPage2] },
        { name: "Salads", images: [menuPage27] },
      ],
    },
    {
      title: "Signature Sips",
      sub: [
        { name: "Mocktails", images: [menuPage19] },
        {
          name: "Liquor (Alcoholic cocktails)",
          images: [
            menuPage11,
            menuPage12,
            menuPage13,
            menuPage14,
            menuPage15,
            menuPage16,
            menuPage17,
            menuPage18,
          ],
        },
        { name: "Soft Beverages", images: [menuPage28] },
      ],
    },
    {
      title: "Entrée",
      sub: [
        {
          name: "Tandoor Veg & Non-Veg",
          images: [menuPage30, menuPage31, menuPage29],
        },
        { name: "Global Starter Veg & Non-Veg", images: [menuPage7] },
        {
          name: "Pan Asian Starter Veg & Non-Veg",
          images: [menuPage24, menuPage21],
        },
        { name: "Appetizers Veg & Non-Veg", images: [menuPage4, menuPage3] },
        { name: "Munchies", images: [menuPage20] },
      ],
    },
    {
      title: "The Stellar Spread",
      sub: [
        {
          name: "Indian Main Course Veg & Non-Veg",
          images: [menuPage8, menuPage9, menuPage1],
        },
        {
          name: "Global Main Course Veg & Non-Veg",
          images: [menuPage6, menuPage5],
        },
        {
          name: "Pan Asian Main Course Veg, Non-Veg, Mixed",
          images: [menuPage23, menuPage22],
        },
        { name: "Rice & Biryani", images: [menuPage25] },
      ],
    },
    {
      title: "Stellar Indulgence",
      sub: [{ name: "Desserts", images: [menuPage32] }],
    },
  ];

  const scrollToCategory = (title: string) => {
    const section = categoryRefs.current[title];
    if (section) {
      // get sticky header height dynamically
      const header = document.querySelector("nav"); // adjust selector if needed
      const headerHeight = header ? header.clientHeight : 0;

      // also include your category tabs height if they are sticky
      const tabs = document.querySelector(".category-tabs"); // 👈 add a className on the wrapper div
      const tabsHeight = tabs ? (tabs as HTMLElement).offsetHeight : 0;

      const yOffset = -(headerHeight + tabsHeight + 80); // 20px extra breathing space
      const y = section.offsetTop + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // 👉 Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<StaticImageData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (images: StaticImageData[], index: number) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );

  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] md:h-[100vh] flex items-center justify-center pt-32">
        <Image src={banner} alt="Menu" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Our Menu</h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            Discover flavors crafted with passion, from appetizers to cocktails.
          </p>
          <button
            onClick={scrollToNext}
            className="mt-10 animate-bounce border rounded-full w-fit px-1 py-2 mx-auto cursor-pointer"
          >
            <span className="text-3xl">↓</span>
          </button>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <div className="sticky top-30 z-40 bg-white shadow-md">
        {/* Desktop View - Horizontal Tabs */}
        <div className="hidden md:flex justify-center space-x-6 px-6 py-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => scrollToCategory(cat.title)}
              className="relative px-6 py-3 bg-[#af0002] text-white font-semibold rounded-lg shadow-md 
                 transform transition-all duration-200 
                 hover:scale-105 active:scale-95"
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Mobile View - Dropdown */}
        <div className="block md:hidden px-6 pt-10 pb-5">
          <select
            onChange={(e) => scrollToCategory(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg bg-[#af0002] text-white font-semibold shadow-md focus:outline-none"
          >
            <option value="">Select Category</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat.title}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* MENU GRID SECTION */}
      <section ref={menuRef} className="bg-white py-16">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {categories.map((cat, cIdx) => {
            const allImages = cat.sub.flatMap((s) => s.images);

            return (
              <div
                key={cIdx}
                ref={(el) => {
                  categoryRefs.current[cat.title] = el;
                }}
                className="mb-16"
              >
                <h2 className="text-4xl font-bold mb-8 text-center">
                  {cat.title}
                </h2>

                <div className="flex flex-wrap gap-8 justify-center">
                  {allImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => openModal(allImages, idx)}
                      className="relative h-[450px] w-[300px]  md:h-[600px] md:w-[400px] rounded-2xl overflow-hidden transition cursor-pointer"
                    >
                      <Image
                        src={img}
                        alt={`${cat.title} Page ${idx + 1}`}
                        fill
                        className="object-cover  transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
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
              src={currentImages[currentIndex]}
              alt={`Menu Page ${currentIndex + 1}`}
              fill
              className="object-contain"
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
