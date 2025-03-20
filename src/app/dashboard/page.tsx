"use client";
import QuoteCard from "@/components/quotecard";

export default function Dashboard() {
  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[100%]">
        <div className="md:col-span-2 space-y-4">
          <QuoteCard />
        </div>
        <div className="h-[100%]">
        </div>
      </div>
    </div>
  );
}
