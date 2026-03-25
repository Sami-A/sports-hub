import { LiveIcon, HeartIcon } from "@/shared/icons";
import type { SportsEvent } from "@/shared/types/match";

export type FilterTab = "all" | "live" | "favorites";

interface FilterTabsProps {
  events: SportsEvent[];
  activeTab: FilterTab;
  onTabChange: (tab: FilterTab) => void;
}

function getEventStatus(event: SportsEvent): "finished" | "live" | "upcoming" {
  const { intHomeScore, intAwayScore, strStatus } = event;
  if (intHomeScore !== null && intAwayScore !== null) {
    if (strStatus && /^\d+/.test(strStatus)) return "live";
    if (strStatus === "Halftime" || strStatus === "HT") return "live";
    return "finished";
  }
  return "upcoming";
}

const TABS = [
  { id: "all" as FilterTab, label: "All", Icon: null },
  { id: "live" as FilterTab, label: "Live", Icon: LiveIcon },
  { id: "favorites" as FilterTab, label: "Favorites", Icon: HeartIcon },
] as const;

export function FilterTabs({ events, activeTab, onTabChange }: FilterTabsProps) {
  const liveCount = events.filter((e) => getEventStatus(e) === "live").length;

  return (
    <div className="flex items-center gap-2 mb-6">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        const count =
          tab.id === "all" ? events.length :
          tab.id === "live" ? liveCount : 0;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors"
            style={{
              borderRadius: "8px",
              backgroundColor: isActive ? "#00FFA5" : "#1D1E2B",
              color: isActive ? "#000" : "#D1D5DB",
            }}
          >
            {tab.Icon && (
              <tab.Icon className={isActive ? "text-black" : "text-[#D1D5DB]"} />
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
