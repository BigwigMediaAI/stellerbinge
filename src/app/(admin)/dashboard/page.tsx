"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Mail, FileText } from "lucide-react";
import { BsQuestionOctagonFill } from "react-icons/bs";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

export default function AdminDashboard() {
  const [totalSubscribers, setTotalSubscribers] = useState<number | null>(null);
  const [totalBlogs, setTotalBlogs] = useState<number | null>(null);
  const [totalQueries, setTotalQueries] = useState<number | null>(null);
  const [gaGraphData, setGaGraphData] = useState<any[]>([]);
  const [gaSummaryData, setGaSummaryData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [trafficSources, setTrafficSources] = useState<any[]>([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // ✅ Fetch Subscribers
        const subsRes = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE}/subscribers`
        );
        setTotalSubscribers(subsRes.data?.length || 0);

        // ✅ Fetch Blogs
        const blogsRes = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`
        );
        setTotalBlogs(blogsRes.data?.length || 0);

        // ✅ Fetch Queries
        const queriesRes = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE}/query`
        );
        setTotalQueries(queriesRes.data.data?.length || 0);

        // ✅ Fetch Google Analytics Data
        const [gaDataRes, gaSummaryRes] = await Promise.all([
          fetch(
            `${process.env.NEXT_PUBLIC_API_BASE}/api/google/analytics-data`
          ).then((r) => r.json()),
          fetch(
            `${process.env.NEXT_PUBLIC_API_BASE}/api/google/Summary-data`
          ).then((r) => r.json()),
        ]);

        // Parse the GA data into a chart-friendly format
        const rows = gaDataRes?.rows || [];
        const parsedData = rows.map((row: any) => ({
          city: row.dimensionValues?.[0]?.value || "Unknown",
          activeUsers: Number(row.metricValues?.[0]?.value || 0),
        }));
        setGaGraphData(parsedData);

        // ✅ Parse summary data (Traffic Source Breakdown)
        const summaryRows = gaSummaryRes?.rows || [];
        const trafficData = summaryRows.map((row: any) => ({
          source: row.dimensionValues?.[0]?.value || "Unknown",
          totalUsers: Number(row.metricValues?.[0]?.value || 0),
          sessions: Number(row.metricValues?.[1]?.value || 0),
          activeUsers: Number(row.metricValues?.[2]?.value || 0),
        }));
        setTrafficSources(trafficData);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
        setTotalSubscribers(0);
        setTotalBlogs(0);
        setTotalQueries(0);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="min-h-screen text-white">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-1 text-sm">
          Welcome to the admin overview
        </p>
        <hr className="mt-4 border-gray-700" />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <DashboardCard
          title="Total Subscribers"
          value={loading ? null : totalSubscribers}
          icon={<Mail size={28} />}
        />
        <DashboardCard
          title="Total Blogs"
          value={loading ? null : totalBlogs}
          icon={<FileText size={28} />}
        />
        <DashboardCard
          title="Total Queries"
          value={loading ? null : totalQueries}
          icon={<BsQuestionOctagonFill size={28} />}
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-5xl mx-auto space-y-6 mb-10">
        <h3 className="text-xl font-semibold text-center text-gray-800">
          Google Analytics - Traffic Source Breakdown
        </h3>

        {trafficSources.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trafficSources}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="source" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="totalUsers" fill="#6366f1" name="Total Users" />
              <Bar dataKey="sessions" fill="#10b981" name="Sessions" />
              <Bar dataKey="activeUsers" fill="#f59e0b" name="Active Users" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">No traffic data found.</p>
        )}

        {/* Traffic Source Table */}
        <div className="overflow-x-auto text-black">
          <table className="min-w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 border-b">#</th>
                <th className="px-4 py-3 border-b">Traffic Source</th>
                <th className="px-4 py-3 border-b">Total Users</th>
                <th className="px-4 py-3 border-b">Sessions</th>
                <th className="px-4 py-3 border-b">Active Users</th>
              </tr>
            </thead>
            <tbody>
              {trafficSources.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{row.source}</td>
                  <td className="px-4 py-2">{row.totalUsers}</td>
                  <td className="px-4 py-2">{row.sessions}</td>
                  <td className="px-4 py-2">{row.activeUsers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Google Analytics Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-5xl mx-auto space-y-6">
        <h3 className="text-xl font-semibold text-center text-gray-800">
          Google Analytics - Active Users by City
        </h3>
        {gaGraphData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={gaGraphData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="activeUsers" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">No analytics data found.</p>
        )}

        {/* Detailed Table */}
        <div className="overflow-x-auto text-black">
          <table className="min-w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 border-b">#</th>
                <th className="px-4 py-3 border-b">City</th>
                <th className="px-4 py-3 border-b">Active Users</th>
              </tr>
            </thead>
            <tbody>
              {gaGraphData.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{row.city || "Unknown"}</td>
                  <td className="px-4 py-2">{row.activeUsers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 🔽 Add your new Traffic Source Breakdown block right below this */}
    </div>
  );
}

// --- DashboardCard Component ---
function DashboardCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: number | null;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-br from-[#0d1b2a] to-[#1b263b] hover:shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all border border-[#334155] rounded-xl p-6 shadow-md group">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-400">{title}</p>
        <div className="bg-[var(--primary)] text-white rounded-full p-2 shadow-inner">
          {icon}
        </div>
      </div>
      {value === null ? (
        <div className="w-24 h-6 bg-gray-700 animate-pulse rounded"></div>
      ) : (
        <h2 className="text-3xl font-bold text-white">{value}</h2>
      )}
    </div>
  );
}
