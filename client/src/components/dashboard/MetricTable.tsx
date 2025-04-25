import { Card, CardContent } from "@/components/ui/card";

interface MetricItem {
  name: string;
  value: number;
  change: string;
}

interface MetricTableProps {
  title: string;
  columnName: string;
  data: MetricItem[];
}

export function MetricTable({ title, columnName, data }: MetricTableProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <h3 className="text-base font-medium text-gray-600 mb-3">{title}</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 text-gray-500 font-medium">App Name</th>
              <th className="text-right py-2 text-gray-500 font-medium">{columnName}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const isPositive = item.change.startsWith('+');
              return (
                <tr key={index} className={index < data.length - 1 ? "border-b border-gray-100" : ""}>
                  <td className="py-2">{item.name}</td>
                  <td className="text-right">
                    <div className="flex items-center justify-end">
                      <span>{item.value}</span>
                      <span className={`ml-2 text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                        {item.change}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
