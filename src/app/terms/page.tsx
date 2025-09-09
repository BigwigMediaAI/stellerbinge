"use client";

import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function TermsAndConditions() {
  return (
    <div>
      <Navbar />
      <div className=" text-black min-h-screen py-28 md:py-20 mt-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Terms & Conditions
          </h1>

          <p className="mb-6">
            Welcome to Stellar Binge! These Terms and Conditions govern your
            access to and use of our restaurant services, including dining,
            reservations, takeout, delivery, and our website. By using any of
            our services, you agree to be bound by these Terms.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-semibold mb-3">1. General Use</h2>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>
              You are at least 18 years old or have parental/guardian consent.
            </li>
            <li>
              You agree to comply with all applicable local, state, and federal
              laws.
            </li>
            <li>You will not misuse our services for unlawful purposes.</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-semibold mb-3">
            2. Reservations & Table Bookings
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>
              We accept reservations via phone or in person (if available).
            </li>
            <li>
              Please arrive on time. Late arrivals may result in cancellation
              after a grace period of{" "}
              <span className="font-semibold">15 minutes</span> unless notified.
            </li>
            <li>
              For large group bookings, private events, or corporate events, a
              deposit may be required.
            </li>
            <li>
              Stellar Binge reserves the right to cancel or refuse reservations
              at our discretion.
            </li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-semibold mb-3">3. Ordering & Payment</h2>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>
              All prices are listed in INR and include applicable taxes unless
              otherwise stated.
            </li>
            <li>
              We accept various forms of payment including cash, credit/debit
              cards, and select digital wallets.
            </li>
            <li>
              Payment must be made in full at the time of order (for
              takeout/delivery) or after dining (in-person).
            </li>
            <li>
              In the case of online orders, accuracy in providing delivery
              information is your responsibility.
            </li>
          </ul>

          {/* Section 4 */}
          <h2 className="text-2xl font-semibold mb-3">
            4. Cancellations & Refunds
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Reservations: Please cancel at least 24 hours in advance.</li>
            <li>
              Takeout/Delivery Orders: Orders cannot be canceled once prepared.
              Refunds are only issued in case of errors, missing items, or
              quality concerns, subject to management review.
            </li>
            <li>
              Events/Private Bookings: Refund policies will be clearly
              communicated at the time of booking.
            </li>
          </ul>

          {/* Section 5 */}
          <h2 className="text-2xl font-semibold mb-3">
            5. Allergies & Dietary Restrictions
          </h2>
          <p className="mb-3">
            While we strive to accommodate dietary needs, please be aware:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>
              Our kitchen handles allergens including nuts, dairy, gluten, and
              seafood.
            </li>
            <li>We cannot guarantee 100% allergen-free meals.</li>
            <li>
              Customers with severe allergies should inform staff and dine at
              their own discretion.
            </li>
          </ul>

          {/* Section 6 */}
          <h2 className="text-2xl font-semibold mb-3">6. Conduct & Behavior</h2>
          <p className="mb-3">
            We reserve the right to refuse service to anyone behaving in a
            manner that is:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>
              Disruptive, abusive, or threatening to staff or other guests
            </li>
            <li>Intoxicated or under the influence of illegal substances</li>
            <li>In violation of public health, safety, or decency laws</li>
          </ul>

          {/* Section 7 */}
          <h2 className="text-2xl font-semibold mb-3">7. Website Use</h2>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>
              Content on our site is for informational purposes only and subject
              to change.
            </li>
            <li>
              Users must not attempt to hack, alter, or misuse the site or its
              content.
            </li>
            <li>
              We are not liable for third-party content, links, or external
              websites.
            </li>
          </ul>

          {/* Section 8 */}
          <h2 className="text-2xl font-semibold mb-3">
            8. Intellectual Property
          </h2>
          <p className="mb-6">
            All content, logos, branding, and materials associated with Stellar
            Binge are the property of the restaurant and protected under
            intellectual property laws. Unauthorized use is strictly prohibited.
          </p>

          {/* Section 9 */}
          <h2 className="text-2xl font-semibold mb-3">
            9. Limitation of Liability
          </h2>
          <p className="mb-3">To the fullest extent permitted by law:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>
              Stellar Binge is not liable for any indirect, incidental, or
              consequential damages.
            </li>
            <li>
              We are not responsible for delays, disruptions, or events beyond
              our control (e.g., weather, transportation issues, or supply
              shortages).
            </li>
          </ul>

          {/* Section 10 */}
          <h2 className="text-2xl font-semibold mb-3">10. Changes to Terms</h2>
          <p className="mb-6">
            We reserve the right to update or modify these Terms at any time.
            Changes will be posted on our website with the updated effective
            date. Continued use of our services after such changes constitutes
            your acceptance of the new Terms.
          </p>

          <p className="text-sm text-gray-400">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
