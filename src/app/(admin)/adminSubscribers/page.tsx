"use client";

import { useEffect, useState } from "react";

interface Subscriber {
  _id: string;
  email: string;
  createdAt: string;
}

export default function AdminSubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/subscribers`
        );
        const data = await res.json();
        setSubscribers(data);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div className="bg-[#0b121a] text-white p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">Email Subscribers</h1>

        <hr className="mt-4 border-gray-700" />
      </div>

      {loading ? (
        <p>Loading subscribers...</p>
      ) : subscribers.length === 0 ? (
        <p>No subscribers found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-700 rounded-lg">
            <thead>
              <tr className="bg-gray-800 text-left">
                <th className="py-3 px-4 border-b border-gray-700">#</th>
                <th className="py-3 px-4 border-b border-gray-700">Email</th>
                <th className="py-3 px-4 border-b border-gray-700">
                  Subscribed On
                </th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber, index) => (
                <tr
                  key={subscriber._id}
                  className="hover:bg-gray-900 transition-colors"
                >
                  <td className="py-3 px-4 border-b border-gray-700">
                    {index + 1}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700">
                    {subscriber.email}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700">
                    {new Date(subscriber.createdAt).toLocaleString()}
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
