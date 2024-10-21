import { faker } from "@faker-js/faker";

export const generateWebsiteStats = () => {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  return Array.from({ length: 30 }, (_, index) => {
    const date = new Date(
      thirtyDaysAgo.getTime() + index * 24 * 60 * 60 * 1000
    );
    return {
      date: date.toISOString().split("T")[0],
      pageViews: faker.number.int({ min: 1000, max: 10000 }),
      uniqueVisitors: faker.number.int({ min: 500, max: 5000 }),
      bounceRate: faker.number.float({ min: 20, max: 80, precision: 0.1 }),
      avgSessionDuration: faker.number.int({ min: 30, max: 300 }),
      conversionRate: faker.number.float({ min: 1, max: 10, precision: 0.1 }),
      newUsers: faker.number.int({ min: 100, max: 1000 }),
      returningUsers: faker.number.int({ min: 200, max: 2000 }),
      topReferrers: Array.from({ length: 3 }, () =>
        faker.internet.domainName()
      ),
      topPages: Array.from({ length: 3 }, () => faker.system.filePath()),
    };
  });
};
// calculations of what to display as web statistics
export const calculateAggregatedStats = (dailyStats) => {
  const totalVisitors = dailyStats.reduce(
    (sum, day) => sum + day.uniqueVisitors,
    0
  );
  const avgBounceRate =
    dailyStats.reduce((sum, day) => sum + day.bounceRate, 0) /
    dailyStats.length;
  const avgSessionDuration =
    dailyStats.reduce((sum, day) => sum + day.avgSessionDuration, 0) /
    dailyStats.length;
  const avgConversionRate =
    dailyStats.reduce((sum, day) => sum + day.conversionRate, 0) /
    dailyStats.length;

  return {
    totalVisitors,
    avgBounceRate,
    avgSessionDuration,
    avgConversionRate,
    totalPageViews: dailyStats.reduce((sum, day) => sum + day.pageViews, 0),
    avgDailyVisitors: Math.round(totalVisitors / dailyStats.length),
    totalNewUsers: dailyStats.reduce((sum, day) => sum + day.newUsers, 0),
  };
};

export function StatsCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}
