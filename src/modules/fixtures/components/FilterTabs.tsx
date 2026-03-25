import { useState } from "react";
import { LiveIcon, HeartIcon } from "@/shared/icons";

interface FilterTabsProps {
  totalCount: number;
}

const TABS = [
  { id: "all", label: "All", Icon: null },
  { id: "live", label: "Live", Icon: LiveIcon },
  { id: "favorites", label: "Favorites", Icon: HeartIcon },
] as const;

export function FilterTabs({ totalCount }: FilterTabsProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  return (
    <div className="flex items-center gap-2 mb-6">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        const count = tab.id === "all" ? totalCount : tab.id === "live" ? 4 : 2;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors`}
            style={{
              borderRadius: "8px",
              backgroundColor: isActive ? "#00FFA5" : "#1D1E2B",
              color: isActive ? "#000" : "#D1D5DB",
            }}
          >
            {tab.Icon && (
              <tab.Icon className={isActive ? "text-black" : "text-white/50"} />
            )}
            <span>{tab.label}</span>
            <span
              className="text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
              style={{
                backgroundColor: "#181921",
                color: isActive ? "#00FFA5" : "#D1D5DB",
              }}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
