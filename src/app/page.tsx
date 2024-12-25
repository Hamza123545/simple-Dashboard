import { Metadata } from "next";
import StatsCards from "@/components/dashboard/stats-cards";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import PropertiesSection from "@/components/dashboard/properties-section";
import BookingsSection from "@/components/dashboard/bookings-section";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Property Management Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col space-y-6">
      <DashboardHeader />
      <StatsCards />
      <div className="grid grid-cols-5 gap-6">
        <div className="xxs:col-span-5 lg:col-span-2">
          <BookingsSection />
        </div>
        <div className="xxs:col-span-5 lg:col-span-3 flex flex-col space-y-4">
          <PropertiesSection />
        </div>
      </div>
    </div>
  );
}
