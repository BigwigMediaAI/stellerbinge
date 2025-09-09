import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="text-black font-raleway text-sm pb-20 md:pb-4">
      {/* Newsletter Section */}
      <div className="border-t border-gray-300 dark:border-gray-700 w-full">
        <div className="bg-white dark:bg-black text-black dark:text-white py-12 px-4 sm:px-6 md:px-10 font-raleway">
          <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-center">
            {/* Heading */}
            <div className="w-full text-center ">
              <h2 className="text-2xl md:text-4xl font-semibold">
                Exclusive Updates & Special Offers
              </h2>
            </div>

            {/* Input + Button */}
            <div className="w-full  flex flex-col gap-4">
              {/* <p className="text-center lg:text-left text-base">
                Sign up to our newsletter for all the latest news and events.
              </p> */}

              <div className="w-full flex flex-col sm:flex-row items-center  gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full sm:w-[280px] md:w-[320px] px-4 py-3 text-black dark:text-white bg-transparent border border-gray-300 rounded-md focus:outline-none"
                />
                <button className="relative group flex items-center justify-center text-[var(--primary-color)] border border-[var(--primary-color)] text-xs md:text-sm px-6 md:px-8 py-3 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden rounded-md">
                  <span className="z-10 relative group-hover:text-white transition-colors duration-300 font-light">
                    Subscribe
                  </span>
                  <span
                    className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                    style={{ backgroundColor: "#B10203" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-400" />
      {/* Main Footer */}
      <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-12 text-sm">
        {/* Logo + Social Media */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <Link href="/" className="uppercase">
            <Image
              src={logo}
              alt="Stellar Binge Logo"
              width={150}
              height={50}
            />
          </Link>
          <div className="flex gap-4 text-xl text-gray-600 dark:text-gray-300">
            <Link
              href="https://www.facebook.com/bingenoida"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-[#4267B2] transition" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/stellar-binge-78691321a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-[#0077B5] transition" />
            </Link>
            <Link
              href="https://www.instagram.com/stellar_binge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-[#C13584] transition" />
            </Link>
            <Link
              href="https://www.youtube.com/@Stellar_Binge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="hover:text-[#FF0000] transition" />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center space-y-4">
          <ul className="space-y-2 text-center">
            {[
              { name: "Menu", href: "/menu" },
              { name: "Our Creations", href: "/gallery" },
              { name: "About Us", href: "/our-journey" },
              { name: "Contact Us", href: "/contact" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="hover:text-[var(--primary-color)] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            {[
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms & Conditions", href: "/terms" },
              // { name: "Sitemap", href: "/sitemap" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="hover:text-[var(--primary-color)] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center lg:text-right space-y-2 text-gray-700 dark:text-gray-200">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p>
            Ground Floor, Stellar IT Park, C-25,
            <br /> Sector 62, Noida - 201309
          </p>
          {/* <p className="text-sm text-gray-500 dark:text-gray-400">
            Floor G · Stellar IT Park
          </p> */}
          <p>
            <Link
              href="tel:+919599816865"
              className="hover:text-[var(--primary-color)] transition"
            >
              +91 9599816865
            </Link>
          </p>
          <p>
            <Link
              href="tel:+919871952133"
              className="hover:text-[var(--primary-color)] transition"
            >
              +91 9871952133
            </Link>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left w-11/12 md:w-5/6 mx-auto border-t border-gray-300 py-4 text-xs text-gray-600">
        <p>BINGE ©2025 All Rights Reserved</p>
        <p>
          Made & Marketed with ❤{" "}
          <a
            href="https://www.bigwigmediadigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--primary-color)] transition"
          >
            Bigwig Media Digital
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
