"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import WebsiteStatsGraph from "../components/WebsiteStatsGraph";
import { calculateAggregatedStats, generateWebsiteStats, StatsCard } from '../utils/statsUtils';

export default function WebsitesPage() {
  const [dailyStats, setDailyStats] = useState([]);
  const [aggregatedStats, setAggregatedStats] = useState({});

  useEffect(() => {
    const stats = generateWebsiteStats();
    setDailyStats(stats);
    setAggregatedStats(calculateAggregatedStats(stats));
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8 text-black">
          Website Statistics
        </h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Website Visits (Last 30 Days)
          </h2>
          <WebsiteStatsGraph data={dailyStats} />
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatsCard title="Total Page Views" value={aggregatedStats.totalPageViews?.toLocaleString()} />
          <StatsCard title="Average Daily Visitors" value={aggregatedStats.avgDailyVisitors?.toLocaleString()} />
          <StatsCard title="Average Bounce Rate" value={`${aggregatedStats.avgBounceRate?.toFixed(2)}%`} />
          <StatsCard title="Avg Session Duration" value={`${Math.round(aggregatedStats.avgSessionDuration || 0)} seconds`} />
          <StatsCard title="Total New Users" value={aggregatedStats.totalNewUsers?.toLocaleString()} />
          <StatsCard title="Avg Conversion Rate" value={`${aggregatedStats.avgConversionRate?.toFixed(2)}%`} />
        </div>
      </main>
    </div>
  );
}