import React from "react";
import CountUp from "react-countup";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { UserCheck } from "lucide-react";

const RevenueBreakdown = () => {
  // Sirf ek plan ka data
  const plan = {
    name: "Basic Plan",
    value: 95000,
    activeUsers: 1200,
  };

  // Monthly revenue trend data (valid as per tumhara request)
  const monthlyTrend = [
    { month: "Jan", revenue: 15000 },
    { month: "Feb", revenue: 22000 },
    { month: "Mar", revenue: 30000 },
    { month: "Apr", revenue: 27000 },
    { month: "May", revenue: 40000 },
    { month: "Jun", revenue: 55000 },
    { month: "Jul", revenue: 50000 },
    { month: "Aug", revenue: 60000 },
    { month: "Sep", revenue: 58000 },
    { month: "Oct", revenue: 65000 },
    { month: "Nov", revenue: 70000 },
    { month: "Dec", revenue: 80000 },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-800 px-8">
        Revenue Breakdown
      </h3>

      <div className="flex gap-6">
        {/* Total Revenue */}
        <div className="w-4/5 max-w-sm p-6 rounded-3xl border border-indigo-200 bg-gradient-to-tr from-indigo-50 to-purple-100 shadow-lg flex flex-col justify-center items-center hover:shadow-2xl transition-transform duration-300">
          <h4 className="text-lg font-semibold text-indigo-700 mb-2 tracking-wide">
            Total Revenue
          </h4>
          <div className="text-5xl font-extrabold bg-gradient-to-r from-indigo-700 to-purple-600 text-transparent bg-clip-text">
            <CountUp end={plan.value} duration={3} separator="," prefix="₹" />
          </div>
        </div>

        {/* Active Users */}
        <div className="w-4/5 max-w-sm p-6 rounded-3xl border border-yellow-300 bg-gradient-to-tr from-yellow-50 to-yellow-100 shadow-md flex flex-col justify-center items-center hover:shadow-xl transition-transform duration-300 relative">
          <div className="absolute -top-6 bg-yellow-400 rounded-full p-3 shadow-lg">
            <UserCheck size={28} className="text-white" />
          </div>
          <h4 className="mt-6 text-lg font-semibold text-yellow-700 mb-1 tracking-wide">
            Active Users
          </h4>
          <div className="text-2xl font-bold text-yellow-800">
            {plan.activeUsers.toLocaleString()}
          </div>
          <div className="text-lg text-yellow-700 mt-1">users</div>
        </div>
      </div>

      {/* Monthly Revenue Trend */}
      <div className="p-6 rounded-2xl shadow-lg bg-white mt-6">
        <h4 className="text-md font-semibold text-gray-700 mb-4">
          Monthly Revenue Trend
        </h4>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={monthlyTrend} barSize={40}>
            <CartesianGrid strokeDasharray="2 2" stroke="#E5E7EB" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 16, fill: "#6B7280", fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 14, fill: "#6B7280", fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
              labelStyle={{ color: "#374151", fontWeight: 500 }}
              itemStyle={{ color: "#6366F1", fontWeight: 500 }}
              formatter={(value) => `₹${value.toLocaleString()}`}
            />
            <Bar
              dataKey="revenue"
              fill="url(#colorRevenue)"
              radius={[6, 6, 0, 0]}
              isAnimationActive={true}
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A5B4FC" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#C4B5FD" stopOpacity={0.7} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueBreakdown;
