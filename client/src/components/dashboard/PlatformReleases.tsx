import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

interface Release {
  version: string;
  date: string;
  description: string;
}

export function PlatformReleases() {
  const { data: releasesData } = useQuery({
    queryKey: ['/api/platform-releases'],
  });

  const releases = releasesData?.releases || [
    {
      version: "Version 2.1.2",
      date: "01 Dec 2024",
      description: "Performance improvements"
    },
    {
      version: "Version 2.1.1",
      date: "25 Nov 2024",
      description: "Performance improvements"
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Platform Releases</h2>
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          {releases.map((release, index) => (
            <div className="flex items-start mb-6" key={`release-${index}`}>
              <div className={`mr-4 relative ${index < releases.length - 1 ? "pb-6" : ""}`}>
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-code"></i>
                </div>
                {index < releases.length - 1 && (
                  <div className="absolute top-10 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-gray-200"></div>
                )}
              </div>
              <div>
                <h3 className="text-md font-medium">{release.version}</h3>
                <p className="text-sm text-gray-500 mb-1">Released on {release.date}</p>
                <p className="text-sm text-gray-600">{release.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
