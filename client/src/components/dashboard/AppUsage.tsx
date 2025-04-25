import { MetricTable } from "./MetricTable";
import { useQuery } from "@tanstack/react-query";

export function AppUsage() {
  const { data: appUsageData } = useQuery({
    queryKey: ['/api/app-usage'],
  });

  const defaultUsers = [
    { name: "App Name", value: 4567, change: "+22%" },
    { name: "App Name", value: 3242, change: "+5%" },
    { name: "App Name", value: 2832, change: "-10%" },
    { name: "App Name", value: 2234, change: "+18%" },
    { name: "App Name", value: 1086, change: "-23%" }
  ];

  const defaultRequests = [
    { name: "App Name", value: 4567, change: "+22%" },
    { name: "App Name", value: 3242, change: "-5%" },
    { name: "App Name", value: 2832, change: "+12%" },
    { name: "App Name", value: 2234, change: "+16%" },
    { name: "App Name", value: 1086, change: "+22%" }
  ];

  const defaultCosts = [
    { name: "App Name", value: 4567, change: "+22%" },
    { name: "App Name", value: 3242, change: "-3%" },
    { name: "App Name", value: 2832, change: "-10%" },
    { name: "App Name", value: 2234, change: "+22%" },
    { name: "App Name", value: 1086, change: "+27%" }
  ];

  const userdata = appUsageData?.byUsers || defaultUsers;
  const requestdata = appUsageData?.byRequests || defaultRequests;
  const costdata = appUsageData?.byCost || defaultCosts;
  
  return (
    <section className="mb-8">
      <h2 className="text-lg font-medium text-gray-700 mb-4">App Usage</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricTable 
          title="BY USERS" 
          columnName="Users" 
          data={userdata} 
        />
        <MetricTable 
          title="BY API REQUESTS" 
          columnName="API Requests" 
          data={requestdata} 
        />
        <MetricTable 
          title="BY COST" 
          columnName="Cost" 
          data={costdata} 
        />
      </div>
    </section>
  );
}
