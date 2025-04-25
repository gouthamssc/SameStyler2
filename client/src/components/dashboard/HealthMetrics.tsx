import { MetricCard } from "./MetricCard";
import { useQuery } from "@tanstack/react-query";

export function HealthMetrics() {
  const { data: healthData } = useQuery({
    queryKey: ['/api/health-metrics'],
  });

  return (
    <section className="mb-8">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Health Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          title="TOTAL INCIDENTS"
          value={healthData?.totalIncidents || 23}
          icon={<i className="fas fa-exclamation-circle"></i>}
          iconColor="text-orange-500"
          change={{
            value: "-5%",
            positive: true
          }}
        />
        
        <MetricCard
          title="SLA PERFORMANCE"
          value={healthData?.slaPerformance || "99.9%"}
          icon={<i className="fas fa-tachometer-alt"></i>}
          iconColor="text-blue-500"
          change={{
            value: "+0.1%",
            positive: true
          }}
        />
        
        <MetricCard
          title="MONTHLY COST"
          value={healthData?.monthlyCost || "$22,547"}
          icon={<i className="fas fa-dollar-sign"></i>}
          iconColor="text-green-500"
          change={{
            value: "+6%",
            positive: false
          }}
        />
      </div>
    </section>
  );
}
