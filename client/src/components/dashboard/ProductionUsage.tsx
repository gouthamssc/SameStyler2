import { MetricCard } from "./MetricCard";
import { useQuery } from "@tanstack/react-query";

export function ProductionUsage() {
  const { data: productionData } = useQuery({
    queryKey: ['/api/production-usage'],
  });

  const { data: visitsData } = useQuery({
    queryKey: ['/api/platform-visits'],
  });

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-700">Production Usage</h2>
        <h2 className="text-lg font-medium text-gray-700">Platform Visits</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MetricCard
            title="API REQUESTS PROCESSED"
            value={productionData?.apiRequests || 35692}
            icon={<i className="fas fa-exchange-alt"></i>}
            iconColor="text-blue-500"
            progressPercent={70}
            progressColor="bg-blue-500"
          />
          
          <MetricCard
            title="ACTIVE USERS/DAY"
            value={productionData?.activeUsers || 1234}
            icon={<i className="fas fa-users"></i>}
            iconColor="text-blue-500"
            progressPercent={55}
            progressColor="bg-blue-500"
          />
          
          <MetricCard
            title="ERRORS %"
            value={productionData?.errorRate || "99.9%"}
            icon={<i className="fas fa-exclamation-triangle"></i>}
            iconColor="text-blue-500"
            change={{
              value: "-0.2%",
              positive: true
            }}
          />
        </div>
        
        <div className="md:col-span-1">
          <MetricCard
            title="VISITORS PER DAY"
            value={visitsData?.visitorsPerDay || 35692}
            icon={<i className="fas fa-user-friends"></i>}
            iconColor="text-blue-500"
            progressPercent={65}
            progressColor="bg-blue-500"
          />
        </div>
      </div>
    </section>
  );
}
