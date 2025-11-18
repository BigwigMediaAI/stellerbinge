"use client";

import { useEffect, useState } from "react";

interface Contact {
  _id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  bookingType: string;
  dateTime: Date;
  numberOfGuests: number;
  message: string;
  createdAt: string;
}

export default function AdminQueriesPage() {
  const [queries, setQueries] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/lead`);
        const data = await res.json();
        // console.log(data);
        setQueries(data.leads);
      } catch (error) {
        console.error("Error fetching queries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
  }, []);

  return (
    <div className="bg-[#0b121a] text-white p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">Leads Queries</h1>
        <hr className="mt-4 border-gray-700" />
      </div>

      {loading ? (
        <p>Loading queries...</p>
      ) : queries.length === 0 ? (
        <p>No queries found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-700 rounded-lg">
            <thead>
              <tr className="bg-gray-800 text-left">
                <th className="py-3 px-4 border-b border-gray-700">#</th>
                <th className="py-3 px-4 border-b border-gray-700">Name</th>
                <th className="py-3 px-4 border-b border-gray-700">
                  Phone Number
                </th>
                <th className="py-3 px-4 border-b border-gray-700">Email</th>
                <th className="py-3 px-4 border-b border-gray-700">
                  Booking Type
                </th>

                <th className="py-3 px-4 border-b border-gray-700">
                  Number of Guests
                </th>
                <th className="py-3 px-4 border-b border-gray-700">Message</th>
                <th className="py-3 px-4 border-b border-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((query, index) => (
                <tr
                  key={query._id}
                  className="hover:bg-gray-900 transition-colors"
                >
                  <td className="py-3 px-4 border-b border-gray-700">
                    {index + 1}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700">
                    {query.fullName}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700">
                    {query.phoneNumber}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700">
                    {query.email}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700">
                    {query.bookingType || "-"}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700">
                    {query.numberOfGuests || "-"}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700">
                    {query.message}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700">
                    {new Date(query.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
