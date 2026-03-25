import { useState, useRef, useEffect } from "react";
import { CalendarIcon } from "@/shared/icons";

function getDays() {
  const days: { weekday: string; dayMonth: string; date: Date; isToday: boolean }[] = [];
  const today = new Date();

  for (let i = -3; i <= 3; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const isToday = i === 0;
    const weekday = isToday
      ? "Today"
      : d.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
    const day = d.getDate();
    const month = d.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
    days.push({
      weekday,
      dayMonth: `${day} ${month}`,
      date: d,
      isToday,
    });
  }
  return days;
}

export function DateNav() {
  const [selectedIdx, setSelectedIdx] = useState(3); // today is index 3
  const days = getDays();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const todayEl = container.children[selectedIdx] as HTMLElement;
        if (todayEl) {
          const scrollLeft =
            todayEl.offsetLeft -
            container.clientWidth / 2 +
            todayEl.offsetWidth / 2;
          container.scrollLeft = scrollLeft;
        }
      }
    });
  }, []);

  return (
    <>
      {/* Desktop: simple today nav */}
      <div className="hidden md:flex items-center justify-between py-3 border border-white/10 rounded-lg px-6 bg-[#1D1E2B]">
        <button className="text-white hover:text-white text-lg transition-colors">
          ‹
        </button>
        <div className="flex items-center gap-2 text-white text-sm">
          <CalendarIcon className="w-5 h-5" />
          <span className="font-medium">Today</span>
        </div>
        <button className="text-white hover:text-white text-lg transition-colors">
          ›
        </button>
      </div>

      {/* Mobile: horizontal day selector */}
      <div className="flex md:hidden items-center gap-2 mb-4">
        <div className="relative flex-1 overflow-hidden">
          {/* Left fade gradient */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-30 z-10"
            style={{
              background: "linear-gradient(to right, #181921, transparent)",
            }}
          />
          {/* Right fade gradient */}
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-30 z-10"
            style={{
              background: "linear-gradient(to left, #181921, transparent)",
            }}
          />

          <div
            ref={scrollRef}
            className="flex items-center gap-1 overflow-x-auto scrollbar-hide px-4"
          >
            {days.map((day, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`flex-shrink-0 flex flex-col items-center px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isSelected
                      ? "bg-[#252639] text-[#00E5A0]"
                      : "text-[#D1D5DB] hover:text-white/80"
                  }`}
                >
                  <span>{day.weekday}</span>
                  <span>{day.dayMonth}</span>
                </button>
              );
            })}
          </div>
        </div>
        <button className="flex-shrink-0 p-1">
          <CalendarIcon className="w-5 h-5 text-[#00FFA5]" />
        </button>
      </div>
    </>
  );
}
