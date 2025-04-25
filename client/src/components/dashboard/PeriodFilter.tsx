import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PeriodType = "last30days" | "thisQuarter" | "thisYear";

interface PeriodFilterProps {
  onPeriodChange?: (period: PeriodType) => void;
}

export function PeriodFilter({ onPeriodChange }: PeriodFilterProps) {
  const [activePeriod, setActivePeriod] = useState<PeriodType>("last30days");

  const handlePeriodChange = (period: PeriodType) => {
    setActivePeriod(period);
    if (onPeriodChange) {
      onPeriodChange(period);
    }
  };

  return (
    <div className="flex space-x-2">
      <Button
        variant={activePeriod === "last30days" ? "default" : "outline"}
        className={cn(
          "px-4 py-1.5 rounded-md text-sm font-medium",
          activePeriod === "last30days" 
            ? "bg-primary text-white" 
            : "text-gray-600 hover:bg-gray-100 bg-white"
        )}
        onClick={() => handlePeriodChange("last30days")}
      >
        Last 30 days
      </Button>
      <Button
        variant={activePeriod === "thisQuarter" ? "default" : "outline"}
        className={cn(
          "px-4 py-1.5 rounded-md text-sm font-medium",
          activePeriod === "thisQuarter" 
            ? "bg-primary text-white" 
            : "text-gray-600 hover:bg-gray-100 bg-white"
        )}
        onClick={() => handlePeriodChange("thisQuarter")}
      >
        This Quarter
      </Button>
      <Button
        variant={activePeriod === "thisYear" ? "default" : "outline"}
        className={cn(
          "px-4 py-1.5 rounded-md text-sm font-medium",
          activePeriod === "thisYear" 
            ? "bg-primary text-white" 
            : "text-gray-600 hover:bg-gray-100 bg-white"
        )}
        onClick={() => handlePeriodChange("thisYear")}
      >
        This Year
      </Button>
    </div>
  );
}
