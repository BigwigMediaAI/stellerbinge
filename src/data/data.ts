// src/data/data.ts
import { StaticImageData } from "next/image";

// 👉 Food Images
import img1 from "../../assets/food/Chilli Chicken Dry.webp";
import img2 from "../../assets/food/Chilli Fish.webp";
import img3 from "../../assets/food/Crispy Babycorn.webp";
import img4 from "../../assets/food/Crispy Corns.webp";
import img5 from "../../assets/food/Hara Bhara Kebab  - Copy.webp";
import img6 from "../../assets/food/Makhmali seekh kebab.webp";
import img7 from "../../assets/food/Murg Banno Kebab.webp";
import img8 from "../../assets/food/Murgh Malai Kebab.webp";
import img9 from "../../assets/food/Mutton Galouti.webp";
import img10 from "../../assets/food/Non-Veg Kebab Paltter.webp";
import img11 from "../../assets/food/Tandoori Chicken.webp";
import img12 from "../../assets/food/Veg Manchurian Dry.webp";
import img13 from "../../assets/food/Fish Curry.webp";
import img14 from "../../assets/food/Mutton Roganjosh.webp";
import img15 from "../../assets/food/Diwani Handi.webp";
import img16 from "../../assets/food/Shahi Paneer.webp";
import img17 from "../../assets/food/Paneer Lababdar.webp";
import img18 from "../../assets/food/Dal Stellar.webp";
import img19 from "../../assets/food/Kshmiri Fish Tikka.webp";
import img20 from "../../assets/food/Achari Paneer Tikka - Copy.webp";
import img21 from "../../assets/food/Afghani Murg.webp";
import img22 from "../../assets/food/Aloo Gobhi.webp";
import img23 from "../../assets/food/Chicken Biryani.webp";
import img24 from "../../assets/food/Chicken Dum Biryani.webp";
import img25 from "../../assets/food/Chicken Tikka.webp";
import img26 from "../../assets/food/Chilli Paneer.webp";
import img27 from "../../assets/food/Crispy Chicken  salt  Pepper.webp";
import img28 from "../../assets/food/Dal Tadka.webp";
import img29 from "../../assets/food/Dimisum platter.webp";
import img30 from "../../assets/food/Dimisum.webp";
import img31 from "../../assets/food/Honey Chilli Potato.webp";
import img32 from "../../assets/food/Malai Kofta.webp";
import img33 from "../../assets/food/Mix Vegetables.webp";
import img34 from "../../assets/food/Mutter Methi Malai.webp";
import img35 from "../../assets/food/Mutton Seekh kebab.webp";
import img36 from "../../assets/food/Paneer Kali mirch.webp";
import img37 from "../../assets/food/Paneer Shashlik.webp";
import img38 from "../../assets/food/Rara Gosht.webp";
import img39 from "../../assets/food/tandoori dimisum.webp";
import img40 from "../../assets/food/Tandoori Prawn.webp";
import img41 from "../../assets/food/Tandoori Veg Platter.webp";

// 👉 Restaurant Images
import rest1 from "../../assets/interior/Int1 (1).webp";
import rest2 from "../../assets/interior/Int1 (2).webp";

import rest20 from "../../assets/interior/Int1 (20).webp";

import rest26 from "../../assets/interior/Int1 (26).webp";

import rest33 from "../../assets/interior/Int1 (33).webp";
import rest34 from "../../assets/interior/Int1 (34).webp";
import rest35 from "../../assets/interior/Int1 (35).webp";
import rest36 from "../../assets/interior/Int1 (36).webp";
import rest38 from "../../assets/interior/Int1 (38).webp";

// banquate

import banquet1 from "../../assets/banqutes/img1.webp";
import banquet2 from "../../assets/confrence.webp";
import banquet3 from "../../assets/banqute2.webp";

// ✅ Shared type
export type GalleryItem = {
  name?: string;
  img: StaticImageData;
  type?: "veg" | "non-veg"; // only applies to food
};

// ✅ VEG Food Menu Items
export const vegMenuItems: GalleryItem[] = [
  { name: "🍃 Crispy Babycorn", img: img3, type: "veg" },
  { name: "🍃 Crispy Corns", img: img4, type: "veg" },
  { name: "🍃 Hara Bhara Kebab", img: img5, type: "veg" },
  { name: "🍃 Veg Manchurian Dry", img: img12, type: "veg" },
  { name: "🍃 Diwani Handi", img: img15, type: "veg" },
  { name: "🍃 Shahi Paneer", img: img16, type: "veg" },
  { name: "🍃 Paneer Lababdar", img: img17, type: "veg" },
  { name: "🍃 Dal Stellar", img: img18, type: "veg" },

  // Newly added veg items
  { name: "🍃 Achari Paneer Tikka", img: img20, type: "veg" },
  { name: "🍃 Aloo Gobhi", img: img22, type: "veg" },
  { name: "🍃 Chilli Paneer", img: img26, type: "veg" },
  { name: "🍃 Dal Tadka", img: img28, type: "veg" },
  { name: "🍃 Dimisum Platter", img: img29, type: "veg" },
  { name: "🍃 Honey Chilli Potato", img: img31, type: "veg" },
  { name: "🍃 Malai Kofta", img: img32, type: "veg" },
  { name: "🍃 Mix Vegetables", img: img33, type: "veg" },
  { name: "🍃 Mutter Methi Malai", img: img34, type: "veg" },
  { name: "🍃 Paneer Kali Mirch", img: img36, type: "veg" },
  { name: "🍃 Paneer Shashlik", img: img37, type: "veg" },
  { name: "🍃 Tandoori Dimisum", img: img39, type: "veg" },
  { name: "🍃 Tandoori Veg Platter", img: img41, type: "veg" },
];

// ✅ NON-VEG Food Menu Items
export const nonVegMenuItems: GalleryItem[] = [
  { name: "🍗 Chilli Chicken Dry", img: img1, type: "non-veg" },
  { name: "🍗 Chilli Fish", img: img2, type: "non-veg" },
  { name: "🍗 Makhmali Seekh Kebab", img: img6, type: "non-veg" },
  { name: "🍗 Murg Banno Kebab", img: img7, type: "non-veg" },
  { name: "🍗 Murgh Malai Kebab", img: img8, type: "non-veg" },
  { name: "🍗 Mutton Galouti", img: img9, type: "non-veg" },
  { name: "🍗 Non-Veg Kebab Platter", img: img10, type: "non-veg" },
  { name: "🍗 Tandoori Chicken", img: img11, type: "non-veg" },
  { name: "🍗 Fish Curry", img: img13, type: "non-veg" },
  { name: "🍗 Mutton Roganjosh", img: img14, type: "non-veg" },
  { name: "🍗 Kashmiri Fish Tikka", img: img19, type: "non-veg" },
  { name: "🍗 Tandoori Dimisum", img: img39, type: "veg" },
  { name: "🍗 Dimisum", img: img30, type: "veg" },

  // Newly added non-veg items
  { name: "🍗 Afghani Murg", img: img21, type: "non-veg" },
  { name: "🍗 Chicken Biryani", img: img23, type: "non-veg" },
  { name: "🍗 Chicken Dum Biryani", img: img24, type: "non-veg" },
  { name: "🍗 Chicken Tikka", img: img25, type: "non-veg" },
  { name: "🍗 Crispy Chicken Salt & Pepper", img: img27, type: "non-veg" },
  { name: "🍗 Mutton Seekh Kebab", img: img35, type: "non-veg" },
  { name: "🍗 Rara Gosht", img: img38, type: "non-veg" },
  { name: "🍗 Tandoori Prawn", img: img40, type: "non-veg" },
];

export const menuItems: GalleryItem[] = [...vegMenuItems, ...nonVegMenuItems];

// ✅ Restaurant Images
export const restaurantImages: GalleryItem[] = [
  { img: rest1 },
  { img: rest2 },

  { img: rest20 },

  { img: rest26 },

  { img: rest33 },
  { img: rest34 },
  { img: rest35 },
  { img: rest36 },
  { img: rest38 },
];

export const banquetImages = [
  { src: banquet1, alt: "Banquet Hall 1" },
  { src: banquet2, alt: "Banquet Hall 2" },
  { src: banquet3, alt: "Banquet Hall 3" },
];
