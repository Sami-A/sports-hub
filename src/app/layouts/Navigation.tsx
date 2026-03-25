import { Link } from "react-router";
import { GlobeIcon, BallIcon, DropdownIcon, FlagIcon } from "@/shared/icons";

const NAV_ITEMS = [
  "Live",
  "Matches",
  "Standings",
  "Teams",
  "Comparison",
  "Statistics",
  "Venues",
] as const;

interface NavigationProps {
  activeTab?: string;
}

function ChevronDown() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
      <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function Navigation({ activeTab = "Matches" }: NavigationProps) {
  return (
    <nav className="flex items-center h-[60px] bg-[#6D00FF] px-4 lg:px-6 w-full flex-shrink-0 overflow-x-auto overflow-y-hidden scrollbar-hide">
      <Link to="/" className="flex items-center mr-6 lg:mr-10 flex-shrink-0">
        <img src="/statscore-logo.png" alt="statscore" className="h-6 lg:h-8 xl:h-[60px] w-auto" />
      </Link>

      {/* Desktop Nav Items (lg+) */}
      <div className="hidden lg:flex items-center gap-3 xl:gap-5 flex-1 mr-4">
        {NAV_ITEMS.map((item) => {
          const isActive = item === activeTab;
          return (
            <Link
              key={item}
              to={item === "Matches" ? "/" : "#"}
              style={{ fontFamily: "'Poppins', sans-serif" }}
              className={`text-sm font-medium py-1 transition-colors whitespace-nowrap ${
                isActive
                  ? "text-[#00E5A0] border-b-2 border-[#00E5A0]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>

      {/* Mobile center icons (< lg) */}
      <div className="flex lg:hidden items-center gap-2 flex-1 justify-center">
        <BallIcon className="w-10 h-10" />
        <GlobeIcon className="w-10 h-10" />
        <div className="flex items-center gap-1 bg-black/15 rounded-full px-3 h-10 cursor-pointer">
          <DropdownIcon className="w-4 h-4" />
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0 ml-4">
        {/* Desktop icons */}
        <div className="hidden lg:flex items-center gap-2">
          <GlobeIcon className="w-10 h-10 cursor-pointer" />
          <BallIcon className="w-10 h-10 cursor-pointer" />
        </div>

        {/* Premier League selector - desktop */}
        <div className="hidden lg:flex items-center gap-2 bg-black/15 rounded-full px-3 h-10 cursor-pointer">
          <DropdownIcon className="w-4 h-4" />
          <span className="text-white text-sm whitespace-nowrap">Premier League</span>
          <ChevronDown />
        </div>

        {/* Season selector */}
        <div className="flex items-center gap-1 bg-black/15 rounded-full px-3 h-10 text-white text-sm cursor-pointer">
          <span>2026/25</span>
          <ChevronDown />
        </div>

        {/* Flag - desktop */}
        <div className="hidden lg:block">
          <FlagIcon className="w-10 h-10 cursor-pointer" />
        </div>

        {/* Hamburger - mobile */}
        <button className="flex lg:hidden items-center justify-center w-8 h-8">
          <HamburgerIcon />
        </button>
      </div>
    </nav>
  );
}
