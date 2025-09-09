"use client";
import { MessageCircle, Phone } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const MobileContactBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex md:hidden z-50 border-t border-[var(--primary-color)]">
      {/* Call Us Button */}
      <a
        href="tel:+919599816865"
        className="w-1/2 flex flex-col items-center justify-center py-2 bg-[var(--primary-color)] text-white"
      >
        <Phone className="w-4 h-4" />
        <span className="text-xs mt-1">Call Us</span>
      </a>

      <a
        href="/contact"
        className="w-1/2 flex flex-col items-center justify-center py-2 bg-white  text-[var(--primary-color)]"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="text-xs mt-1">Contact Us</span>
      </a>
    </div>
  );
};

export default MobileContactBar;
