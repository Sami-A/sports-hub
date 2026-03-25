import { useState } from "react";
import { useFixtures } from "@/modules/fixtures/hooks/useFixtures";
import { MatchCard } from "@/modules/fixtures/components/MatchCard";
import { FilterTabs, type FilterTab } from "@/modules/fixtures/components/FilterTabs";
import { DateNav } from "@/modules/fixtures/components/DateNav";
import type { SportsEvent } from "@/shared/types/match";

function groupByLeague(events: SportsEvent[]) {
  const groups: Record<string, SportsEvent[]> = {};
  for (const event of events) {
    const league = event.strLeague || "Other";
    if (!groups[league]) groups[league] = [];
    groups[league].push(event);
  }
  return groups;
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

export default function FixturesPage() {
  const { data: events = [], isLoading, error } = useFixtures();
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filteredEvents =
    activeTab === "live"
      ? events.filter((e) => getEventStatus(e) === "live")
      : events;

  const leagueGroups = groupByLeague(filteredEvents);

  return (
    <div className="min-h-full py-4 px-4">
      <h1 className="text-white text-xl font-semibold mb-4">Matches</h1>

      <div className="mb-4 -ml-4 md:ml-0 md:bg-[#1D1E2B] md:rounded-lg md:py-px">
        <DateNav />
      </div>
      <FilterTabs events={events} activeTab={activeTab} onTabChange={setActiveTab} />

      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-2 border-[#6D00FF] border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center py-20 gap-2">
          <p className="text-red-400 text-sm">Failed to load fixtures</p>
          <p className="text-white/40 text-xs">{error.message}</p>
        </div>
      )}

      {!isLoading &&
        !error &&
        Object.entries(leagueGroups).map(([league, matches]) => (
          <div key={league} className="mb-4 bg-[#1D1E2B] rounded-lg overflow-hidden p-4">
            <div className="flex items-center justify-between py-3">
              <h2 className="text-white text-sm font-medium">{league}</h2>
              <svg width="16" height="16" viewBox="0 0 16 16" className="text-white">
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              {matches.map((match) => (
                <MatchCard key={match.idEvent} event={match} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
