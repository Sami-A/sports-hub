import type { SportsEvent } from "@/shared/types/match";
import type { TimelineEvent } from "@/modules/match-details/types/timeline";
import { getEventIcon } from "@/modules/match-details/components/TimelineIcons";
import { MOCK_TIMELINE } from "@/modules/match-details/data/mockTimeline";

interface MatchTimelineProps {
  event: SportsEvent;
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center w-full gap-3 py-3">
      <div className="flex-1 h-px bg-white/10" />
      <span className="text-[#E5E7EB] text-xs font-medium whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );
}

function TimelineRow({ evt }: { evt: TimelineEvent }) {
  const isHome = evt.side === "home";
  const isGoal = evt.type === "goal";
  const icon = getEventIcon(evt.type);
  const minuteLabel = `${evt.minute}'`;

  return (
    <div className="flex items-center w-full py-1.5">
      <div className="flex-1 flex items-center justify-end">
        {isHome ? (
          <>
            <div className="flex flex-col items-end mr-2">
              <span className={`text-xs leading-tight ${isGoal ? "text-[#00E5A0] font-semibold" : "text-white"}`}>
                {evt.player}
              </span>
              {evt.subtitle && (
                <span className="text-[10px] leading-tight text-white/40">{evt.subtitle}</span>
              )}
            </div>
            <div className="flex-shrink-0">{icon}</div>
            <div className="w-6 h-px bg-white/20 mx-1 flex-shrink-0" />
          </>
        ) : (
          <div className="flex-1" />
        )}
      </div>

      {/* Center minute pill */}
      <div
        className={`flex-shrink-0 px-2.5 h-6 flex items-center justify-center rounded-full text-[11px] font-bold min-w-[48px] ${
          isGoal ? "bg-[#00E5A0] text-black" : "bg-white/10 text-white/60"
        }`}
      >
        {minuteLabel}
      </div>

      <div className="flex-1 flex items-center justify-start">
        {!isHome ? (
          <>
            <div className="w-6 h-px bg-white/20 mx-1 flex-shrink-0" />
            <div className="flex-shrink-0">{icon}</div>
            <div className="flex flex-col items-start ml-2">
              <span className={`text-xs leading-tight ${isGoal ? "text-[#00E5A0] font-semibold" : "text-white"}`}>
                {evt.player}
              </span>
              {evt.subtitle && (
                <span className="text-[10px] leading-tight text-white/40">{evt.subtitle}</span>
              )}
            </div>
          </>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}

export function MatchTimeline({ event }: MatchTimelineProps) {
  const homeScore = event.intHomeScore ?? "0";
  const awayScore = event.intAwayScore ?? "0";
  const kickoffTime = event.strTime ? event.strTime.slice(0, 5) : "00:00";

  const secondHalf = MOCK_TIMELINE.filter((e) => {
    const min = typeof e.minute === "string" ? parseInt(e.minute) : e.minute;
    return min > 45;
  });
  const firstHalf = MOCK_TIMELINE.filter((e) => {
    const min = typeof e.minute === "string" ? parseInt(e.minute) : e.minute;
    return min <= 45;
  });

  return (
    <div className="bg-[#1E1F2B] rounded-lg px-4 py-4">
      <h3 className="text-white text-base font-medium mb-2">Events</h3>
      <Divider label={`Fulltime  ${homeScore} - ${awayScore}`} />
      {secondHalf.map((evt, i) => (
        <TimelineRow key={`2h-${i}`} evt={evt} />
      ))}
      <Divider label={`Halftime '  1 - 0`} />
      {firstHalf.map((evt, i) => (
        <TimelineRow key={`1h-${i}`} evt={evt} />
      ))}
      <Divider label={`Kick Off - ${kickoffTime}`} />
    </div>
  );
}
