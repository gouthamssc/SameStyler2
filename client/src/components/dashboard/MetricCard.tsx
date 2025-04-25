import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  iconColor?: string;
  progressPercent?: number;
  progressColor?: string;
  change?: {
    value: string;
    positive?: boolean;
  };
}

export function MetricCard({
  title,
  value,
  icon,
  iconColor = "text-blue-500",
  progressPercent,
  progressColor = "bg-blue-500",
  change,
}: MetricCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm text-gray-500 font-medium">{title}</span>
          <span className={iconColor}>{icon}</span>
        </div>
        <div className="text-3xl font-semibold mb-3">{value}</div>
        
        {change ? (
          <div className={`flex items-center text-xs ${change.positive ? "text-green-500" : "text-red-500"}`}>
            <i className={`fas fa-arrow-${change.positive ? "up" : "down"} mr-1`}></i>
            <span>{change.value}</span>
          </div>
        ) : progressPercent !== undefined ? (
          <div className="flex items-center">
            <div className="w-full bg-gray-200 h-1.5 rounded-full">
              <div 
                className={`${progressColor} h-1.5 rounded-full`} 
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
