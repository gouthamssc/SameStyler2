import { Card, CardContent } from "@/components/ui/card";
import { MetricCard } from "./MetricCard";
import { useQuery } from "@tanstack/react-query";

export function DeveloperUsage() {
  const { data: usageData, isLoading } = useQuery({
    queryKey: ['/api/developer-usage'],
  });

  const appTypesData = usageData?.appTypesDistribution || {
    web: 45,
    mobile: 35,
    api: 20
  };

  return (
    <section className="mb-8">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Developer Usage</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="TOTAL DEVELOPERS"
          value={usageData?.totalDevelopers || 250}
          icon={<i className="fas fa-code"></i>}
          iconColor="text-blue-500"
          progressPercent={70}
          progressColor="bg-blue-500"
        />
        
        <MetricCard
          title="TOTAL PROJECTS"
          value={usageData?.totalProjects || 1234}
          icon={<i className="far fa-folder-open"></i>}
          iconColor="text-indigo-500"
          progressPercent={55}
          progressColor="bg-indigo-500"
        />
        
        <MetricCard
          title="TOTAL BUILDS"
          value={usageData?.totalBuilds || 22899}
          icon={<i className="fas fa-cube"></i>}
          iconColor="text-purple-500"
          progressPercent={85}
          progressColor="bg-purple-500"
        />
        
        <MetricCard
          title="TOTAL COMMITS"
          value={usageData?.totalCommits || 88653}
          icon={<i className="fas fa-code-branch"></i>}
          iconColor="text-teal-500"
          progressPercent={65}
          progressColor="bg-teal-500"
        />
      
        <Card className="lg:col-span-4 hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm text-gray-500 font-medium">APP TYPES DISTRIBUTION</span>
              <i className="fas fa-chart-pie text-blue-500"></i>
            </div>
            <div className="flex justify-around items-center">
              <div className="flex flex-col items-center">
                <div className="w-full bg-gray-200 h-4 rounded-full mb-2">
                  <div className="bg-primary h-4 rounded-full" style={{ width: `${appTypesData.web}%` }}></div>
                </div>
                <span className="text-sm font-medium">Web</span>
                <span className="text-xs text-gray-500">{appTypesData.web}%</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full bg-gray-200 h-4 rounded-full mb-2">
                  <div className="bg-secondary h-4 rounded-full" style={{ width: `${appTypesData.mobile}%` }}></div>
                </div>
                <span className="text-sm font-medium">Mobile</span>
                <span className="text-xs text-gray-500">{appTypesData.mobile}%</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full bg-gray-200 h-4 rounded-full mb-2">
                  <div className="bg-pink-500 h-4 rounded-full" style={{ width: `${appTypesData.api}%` }}></div>
                </div>
                <span className="text-sm font-medium">API</span>
                <span className="text-xs text-gray-500">{appTypesData.api}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
