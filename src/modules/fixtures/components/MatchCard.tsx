import { useNavigate } from "react-router";
import type { SportsEvent } from "@/shared/types/match";
import { ROUTES } from "@/shared/constants/routes";
import { ThreeDotsIcon } from "@/shared/icons";

interface MatchCardProps {
  event: SportsEvent;
}

function formatMatchTime(event: SportsEvent): string {
  const time = event.strTime;
  if (!time) return "";
  return time.slice(0, 5);
}

type MatchStatusType = "finished" | "live" | "upcoming";

function getMatchStatusInfo(event: SportsEvent) {
  const status = event.strStatus;
  const homeScore = event.intHomeScore;
  const awayScore = event.intAwayScore;

  if (homeScore !== null && awayScore !== null) {
    if (
      status === "Match Finished" ||
      status === "Match Finished After Extra Time"
    ) {
      return { text: "FT", type: "finished" as MatchStatusType };
    }
    if (status === "Halftime" || status === "HT") {
      return { text: "HT", type: "live" as MatchStatusType };
    }
    if (status && /^\d+/.test(status)) {
      return {
        text: status.replace(/\s/g, "") + "'",
        type: "live" as MatchStatusType,
      };
    }
    return { text: "FT", type: "finished" as MatchStatusType };
  }

  return {
    text: formatMatchTime(event),
    type: "upcoming" as MatchStatusType,
  };
}

const BAR_COLORS: Record<MatchStatusType, string> = {
  finished: "#E55050",
  live: "#00FFA5",
  upcoming: "#374151",
};

const STATUS_TEXT_COLORS: Record<MatchStatusType, string> = {
  finished: "#E55050",
  live: "#00FFA5",
  upcoming: "#FFFFFF",
};


export function MatchCard({ event }: MatchCardProps) {
  const navigate = useNavigate();
  const statusInfo = getMatchStatusInfo(event);
  const isLive = statusInfo.type === "live";
  const isFinished = statusInfo.type === "finished";

  const handleClick = () => {
    navigate(ROUTES.matchDetail(event.idEvent));
  };

  return (
    <div className="flex items-stretch w-full border-b border-white/5">
      <button
        onClick={handleClick}
        className="relative flex items-center flex-1 py-2 min-w-0 cursor-pointer text-left transition-colors"
      >
        {/* Live gradient overlay — fixed pixel width so desktop doesn't over-bleed */}
        {isLive && (
          <div
            className="absolute inset-y-2 left-0 w-[150px] md:w-[115px] pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(0, 255, 165, 0.10), transparent)" }}
          />
        )}
        <div
          className="w-[3px] flex-shrink-0 self-stretch"
          style={{ backgroundColor: BAR_COLORS[statusInfo.type] }}
        />
        <div className="w-[52px] flex-shrink-0 flex flex-col  items-center justify-center">
          <span
            className="text-xs font-semibold"
            style={{ color: STATUS_TEXT_COLORS[statusInfo.type] }}
          >
            {statusInfo.text}
          </span>
          {isLive && (
            <div className="w-4 h-[2px] bg-[#00E5A0] rounded-full mt-1" />
          )}
        </div>

        <div className="flex-1 flex flex-col gap-1.5 min-w-0">
          <div className="flex items-center gap-[9px]">
            {event.strHomeTeamBadge ? (
              <img
                src={event.strHomeTeamBadge}
                alt=""
                className="w-4 h-4 object-contain flex-shrink-0"
              />
            ) : (
              <div className="w-5 h-5 rounded-full bg-white/10 flex-shrink-0" />
            )}
            <span className="text-white text-sm truncate">
              {event.strHomeTeam}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {event.strAwayTeamBadge ? (
              <img
                src={event.strAwayTeamBadge}
                alt=""
                className="w-4 h-4 object-contain flex-shrink-0"
              />
            ) : (
              <div className="w-5 h-5 rounded-full bg-white/10 flex-shrink-0" />
            )}
            <span className="text-white text-sm truncate">
              {event.strAwayTeam}
            </span>
          </div>
        </div>

        {(isFinished || isLive) && (
          <div className="flex flex-col items-end gap-1.5 ml-4 mr-3 flex-shrink-0">
            {isFinished ? (
              <>
                <div className="flex items-center gap-1.5">
                  <span className="text-white/40 text-xs tabular-nums">
                    [{event.intHomeScore}]
                  </span>
                  <span className="text-white text-sm font-bold tabular-nums w-4 text-right">
                    {event.intHomeScore}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-white/40 text-xs tabular-nums">
                    [{event.intAwayScore}]
                  </span>
                  <span className="text-white text-sm font-bold tabular-nums w-4 text-right">
                    {event.intAwayScore}
                  </span>
                </div>
              </>
            ) : (
              <>
                <span className="text-white text-sm font-bold tabular-nums">
                  {event.intHomeScore}
                </span>
                <span className="text-white text-sm font-bold tabular-nums">
                  {event.intAwayScore}
                </span>
              </>
            )}
          </div>
        )}

      </button>

      {/* Three dots — not part of nav click */}
      <button
        onClick={(e) => e.stopPropagation()}
        className="flex items-center px-3 flex-shrink-0 text-white/60 hover:text-white transition-colors"
      >
        <ThreeDotsIcon />
      </button>
    </div>
  );
}
