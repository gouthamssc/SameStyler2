import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PeriodFilter } from "@/components/dashboard/PeriodFilter";
import { DeveloperUsage } from "@/components/dashboard/DeveloperUsage";
import { ProductionUsage } from "@/components/dashboard/ProductionUsage";
import { AppUsage } from "@/components/dashboard/AppUsage";
import { HealthMetrics } from "@/components/dashboard/HealthMetrics";
import { PlatformReleases } from "@/components/dashboard/PlatformReleases";

export default function Dashboard() {
  useEffect(() => {
    // Load external Font Awesome script
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      <Navbar />
      <main className="container mx-auto px-6 py-6 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Platform Insights</h1>
          <PeriodFilter />
        </div>

        <DeveloperUsage />
        <ProductionUsage />
        <AppUsage />
        <HealthMetrics />
        <PlatformReleases />
      </main>
      <Footer />
    </div>
  );
}
