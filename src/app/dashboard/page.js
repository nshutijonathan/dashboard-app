'use client';

import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import WebsiteStatsGraph from '../components/WebsiteStatsGraph';
import { calculateAggregatedStats, generateWebsiteStats, StatsCard } from '../utils/statsUtils';

export default function Dashboard() {
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
        <h1 className="text-3xl font-bold mb-8 text-black">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard title="Total Visitors" value={aggregatedStats.totalVisitors?.toLocaleString()} />
          <StatsCard title="Avg. Bounce Rate" value={`${aggregatedStats.avgBounceRate?.toFixed(2)}%`} />
          <StatsCard title="Avg. Session Duration" value={`${Math.round(aggregatedStats.avgSessionDuration || 0)} sec`} />
          <StatsCard title="Avg. Conversion Rate" value={`${aggregatedStats.avgConversionRate?.toFixed(2)}%`} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Website Visits (Last 30 Days)</h2>
          <WebsiteStatsGraph data={dailyStats} />
        </div>
      </main>
    </div>
  );
}
