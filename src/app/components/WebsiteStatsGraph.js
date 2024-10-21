"use client";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

export default function WebsiteStatsGraph({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="pageViews"
          stroke="#8884d8"
          name="Page Views"
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="uniqueVisitors"
          stroke="#82ca9d"
          name="Unique Visitors"
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="bounceRate"
          stroke="#ffc658"
          name="Bounce Rate (%)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
