"use client";
import { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    bookingType: "",
    dateTime: "",
    numberOfGuests: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  if (!isOpen) return null;

  // ✅ Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!/^[6-9]\d{9}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Enter a valid 10-digit phone number";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.bookingType)
      newErrors.bookingType = "Please select a booking type";
    if (!formData.dateTime) newErrors.dateTime = "Please select date and time";
    if (!formData.numberOfGuests)
      newErrors.numberOfGuests = "Please enter number of guests";
    return newErrors;
  };

  // ✅ Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    setSuccessMessage("");

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/lead`,
        formData
      );

      // ✅ When success true from backend
      if (res.data.success) {
        setSuccessMessage("✅ Booking request submitted successfully!");
        sessionStorage.setItem("bookingPopupSeen", "true");

        // Reset form fields
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          bookingType: "",
          dateTime: "",
          numberOfGuests: "",
          message: "",
        });

        // ✅ Auto-close popup after short delay
        setTimeout(() => {
          setSuccessMessage("");
          onClose();
        }, 1500);
      } else {
        setErrors({ api: res.data.message || "Something went wrong!" });
      }
    } catch (error: any) {
      console.error("Booking failed:", error);
      setErrors({
        api:
          error.response?.data?.message || "Something went wrong. Try again!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[1000] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white overflow-hidden rounded-3xl shadow-2xl w-full max-w-4xl grid md:grid-cols-2"
          >
            {/* ✨ Left Section */}
            <div className="hidden md:flex flex-col justify-center items-center text-white bg-[url('https://res.cloudinary.com/dqrlkbsdq/image/upload/v1759555427/blogs/whebyfhfllpbc3ckxfkk.jpg')] bg-cover bg-center p-8 relative">
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 text-center space-y-4">
                <h2 className="text-3xl font-semibold text-gold tracking-wide">
                  Reserve Your Table
                </h2>
                <p className="text-sm text-gray-200 leading-relaxed">
                  Indulge in a fine dining experience. Book your table or
                  banquet with just a few clicks.
                </p>
              </div>
            </div>

            {/* 📝 Right Section */}
            <div className="p-6 md:p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                <X size={22} />
              </button>

              <h3 className="text-2xl font-bold text-center text-[var(--primary-color)] mb-5">
                Book Your Table or Banquet Now!
              </h3>

              {successMessage && (
                <p className="text-green-600 text-center font-medium mb-3 animate-pulse">
                  {successMessage}
                </p>
              )}

              {errors.api && (
                <p className="text-red-500 text-center font-medium mb-3">
                  {errors.api}
                </p>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary-color)]"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs">{errors.fullName}</p>
                )}

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary-color)]"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs">{errors.phoneNumber}</p>
                )}

                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary-color)]"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}

                <select
                  value={formData.bookingType}
                  onChange={(e) =>
                    setFormData({ ...formData, bookingType: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white focus:ring-2 focus:ring-[var(--primary-color)]"
                >
                  <option value="">Select Booking Type</option>
                  <option value="Table Booking">Table Booking</option>
                  <option value="Banquet Booking">Banquet Booking</option>
                </select>
                {errors.bookingType && (
                  <p className="text-red-500 text-xs">{errors.bookingType}</p>
                )}

                <input
                  type="datetime-local"
                  value={formData.dateTime}
                  onChange={(e) =>
                    setFormData({ ...formData, dateTime: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary-color)]"
                />
                {errors.dateTime && (
                  <p className="text-red-500 text-xs">{errors.dateTime}</p>
                )}

                <input
                  type="number"
                  min="1"
                  placeholder="Number of Guests"
                  value={formData.numberOfGuests}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      numberOfGuests: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary-color)]"
                />
                {errors.numberOfGuests && (
                  <p className="text-red-500 text-xs">
                    {errors.numberOfGuests}
                  </p>
                )}

                <textarea
                  placeholder="Message / Special Request"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 h-24 focus:ring-2 focus:ring-[var(--primary-color)]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[var(--primary-color)] text-white font-semibold py-3 rounded-lg transition hover:bg-opacity-90 disabled:opacity-50"
                >
                  {loading
                    ? "Submitting..."
                    : successMessage
                      ? "Submitted"
                      : "Submit Booking"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
