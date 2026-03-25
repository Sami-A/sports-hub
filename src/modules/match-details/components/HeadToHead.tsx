import type { SportsEvent } from "@/shared/types/match";

interface HeadToHeadProps {
  event: SportsEvent;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  return `${day} ${month}`;
}

export function HeadToHead({ event }: HeadToHeadProps) {
  const homeScore = event.intHomeScore ?? "-";
  const awayScore = event.intAwayScore ?? "-";
  const isFinished =
    event.strStatus === "Match Finished" ||
    event.strStatus === "Match Finished After Extra Time";

  return (
    <div className="flex items-center justify-center gap-8 py-6 px-6">
      {/* Home Team */}
      <div className="flex flex-col items-center gap-2 w-[120px]">
        {event.strHomeTeamBadge ? (
          <img
            src={event.strHomeTeamBadge}
            alt={event.strHomeTeam}
            className="w-16 h-16 object-contain"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-white/10" />
        )}
        <span className="text-white text-sm font-medium text-center">
          {event.strHomeTeam}
        </span>
      </div>

      {/* Score */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-white/40 text-xs">
          {formatDate(event.dateEvent)}
        </span>
        <div className="text-white text-3xl font-bold tracking-wider whitespace-nowrap">
          {homeScore} - {awayScore}
        </div>
        {isFinished && (
          <span className="bg-[#E55050] text-white text-xs px-3 py-1 rounded-full font-medium">
            Finished
          </span>
        )}
      </div>

      {/* Away Team */}
      <div className="flex flex-col items-center gap-2 w-[120px]">
        {event.strAwayTeamBadge ? (
          <img
            src={event.strAwayTeamBadge}
            alt={event.strAwayTeam}
            className="w-16 h-16 object-contain"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-white/10" />
        )}
        <span className="text-white text-sm font-medium text-center">
          {event.strAwayTeam}
        </span>
      </div>
    </div>
  );
}
