"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdDeliveryDining, MdOutlineLocalDining } from "react-icons/md";
import { RiTakeawayFill } from "react-icons/ri";
import contactBanner from "../../../assets/hero5.jpg";
import { useRef, useState } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import Footer from "../../../components/Footer";
import toast, { Toaster } from "react-hot-toast";
import MobileContactBar from "../../../components/MobileContactBar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/query`,
        formData
      );

      if (res.data.success) {
        toast.success("Query sent successfully! 🎉");
        setFormData({ name: "", email: "", subject: "", message: "" }); // reset
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactRef = useRef<HTMLDivElement | null>(null);
  const scrollToNext = () => {
    if (contactRef.current) {
      const yOffset = -70;
      const y =
        contactRef.current.getBoundingClientRect().top +
        window.scrollY +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className=" text-black  transition-colors">
      {/* Toast container */}
      <link rel="canonical" href="https://www.stellarbinge.com/contact" />

      <Toaster position="top-center" reverseOrder={false} />

      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full h-[70vh] md:h-[100vh] flex items-center justify-center pt-32">
        <Image
          src={contactBanner}
          alt="Contact page"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Let&#39;s not waste time & get started. Shall we?
          </p>
          <button
            onClick={scrollToNext}
            className="mt-10 animate-bounce border rounded-full w-fit px-1 py-2 mx-auto cursor-pointer"
          >
            <span className="text-3xl">↓</span>
          </button>
        </div>
      </section>

      {/* Main Section */}
      <section
        ref={contactRef}
        className="w-11/12 md:w-5/6 mx-auto py-16 grid md:grid-cols-2 gap-12 items-start"
      >
        {/* Left info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-[var(--primary-color)]">
            Contact Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Reach out to us for any queries, bookings, or collaborations.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-[#1e1e1e] shadow">
              <MdOutlineLocalDining className="text-[var(--primary-color)] text-xl" />
              <span>Dine-in</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-[#1e1e1e] shadow">
              <RiTakeawayFill className="text-[var(--primary-color)] text-xl" />
              <span>Takeaway</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-[#1e1e1e] shadow">
              <MdDeliveryDining className="text-[var(--primary-color)] text-xl" />
              <span>No-contact Delivery</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 text-[var(--primary-color)]" />
            <span>
              Ground Floor, Stellar IT Park, C-25, Sector 62,
              <br /> Noida - 201309
              <br />
              {/* <span className="text-sm text-gray-500">
                Floor G · Stellar IT Park
              </span> */}
            </span>
          </div>
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-[var(--primary-color)]" />
            +91 9599816865 | +91 9871952133
          </p>

          <p className="flex items-center gap-3">
            <FaClock className="text-[var(--primary-color)]" />
            Open 11 am ⋅ Closes 11 pm
          </p>
        </div>

        {/* Right form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white dark:bg-[#1e1e1e] p-8 rounded-xl shadow-lg border dark:border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-white dark:bg-[#2c2c2c] text-black dark:text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-white dark:bg-[#2c2c2c] text-black dark:text-white"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-white dark:bg-[#2c2c2c] text-black dark:text-white"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-white dark:bg-[#2c2c2c] text-black dark:text-white"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-md hover:rounded-xl transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>
      {/* Map Section */}
      <section className="w-11/12 md:w-5/6 mx-auto h-[400px] md:h-[400px]  ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.585670226247!2d77.3624109!3d28.6122041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56996f6ab5b%3A0xda132206ab62c25f!2sStellar%20Binge!5e0!3m2!1sen!2sin!4v1756282825010!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl"
        ></iframe>
      </section>
      <Footer />
      <MobileContactBar />
    </div>
  );
}
