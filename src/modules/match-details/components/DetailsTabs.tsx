import { useState } from "react";

const TABS = [
  "Details",
  "Odds",
  "Lineups",
  "Events",
  "Stats",
  "Standings",
] as const;

export function DetailsTabs() {
  const [activeTab, setActiveTab] = useState<string>("Events");

  return (
    <div className="flex items-center gap-1 px-6 overflow-y-auto">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-3 text-sm font-medium transition-colors relative ${
            activeTab === tab
              ? "text-white"
              : "text-[#D1D5DB] hover:text-white/80"
          }`}
        >
          {tab}
          {activeTab === tab && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00E5A0]" />
          )}
        </button>
      ))}
    </div>
  );
}
