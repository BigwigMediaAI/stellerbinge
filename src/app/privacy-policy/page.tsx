"use client";

import { div } from "framer-motion/client";
import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <div className=" text-black min-h-screen py-28 md:py-20 px-6 md:px-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Privacy Policy
          </h1>

          <p className="mb-6">
            Stellar Binge (&#34;we&#34;, &#34;us&#34;, or &#34;our&#34;) values
            your privacy. This Privacy Policy explains how we collect, use, and
            protect your personal information when you interact with our
            restaurant, website, and services.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-semibold mb-3">
            1. Information We Collect
          </h2>
          <h3 className="font-medium mb-1">a. Personal Information:</h3>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Postal address</li>
            <li>Payment details (when placing an order)</li>
          </ul>
          <h3 className="font-medium mb-1">b. Technical & Usage Data:</h3>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on the site</li>
            <li>Location data (with your consent)</li>
          </ul>
          <h3 className="font-medium mb-1">
            c. Reservation & Order Information:
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Booking dates and times</li>
            <li>Food and beverage preferences</li>
            <li>Special dietary requirements or notes</li>
            <li>Delivery instructions (if applicable)</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-semibold mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Process reservations and orders</li>
            <li>Provide customer service and respond to inquiries</li>
            <li>Send booking confirmations or order updates</li>
            <li>Improve our website and customer experience</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-semibold mb-3">
            3. Sharing Your Information
          </h2>
          <p className="mb-3">
            We do not sell your personal data. We may share information with:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>
              Service providers (e.g., delivery services, payment processors)
            </li>
            <li>Government authorities (if legally required)</li>
            <li>
              IT and hosting providers to support our website and services
            </li>
          </ul>
          <p className="mb-6">
            All third parties are required to protect your data and only use it
            for specified purposes.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-semibold mb-3">
            4. Cookies and Tracking Technologies
          </h2>
          <p className="mb-6">
            Our website uses cookies and similar technologies to enhance user
            experience, analyze site usage, and tailor marketing efforts. You
            can control cookie preferences through your browser settings.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
          <p className="mb-6">
            We take appropriate security measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction. However, no internet-based service is completely
            secure. We encourage you to protect your passwords and devices.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
          <p className="mb-3">
            Depending on your location, you may have rights including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Access to your personal data</li>
            <li>Correction or deletion of your data</li>
            <li>Objecting to processing or withdrawing consent</li>
            <li>Requesting data portability</li>
          </ul>
          <p className="mb-6">
            To exercise your rights, please contact us at{" "}
            <span className="font-semibold">[Insert Contact Email]</span>.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl font-semibold mb-3">7. Children’s Privacy</h2>
          <p className="mb-6">
            Our services are not intended for children under 13. We do not
            knowingly collect data from children.
          </p>

          {/* Section 8 */}
          <h2 className="text-2xl font-semibold mb-3">
            8. Changes to This Policy
          </h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page with a revised effective date.
          </p>

          {/* Section 9 */}
          <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
          <p className="mb-1">
            If you have any questions or concerns about this Privacy Policy or
            your data, please contact us:
          </p>
          <address className="not-italic mb-6">
            <p>Stellar Binge</p>
            <p>
              STELLAR IT PARK, C-25, C Block, Phase 2, Industrial Area, Sector
              62, Noida, Uttar Pradesh 201307
            </p>
            <p>Phone: 095998 16865</p>
          </address>

          <p className="text-sm text-gray-400">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
