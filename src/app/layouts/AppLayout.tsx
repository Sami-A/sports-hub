import { Outlet, useLocation } from "react-router";
import { Navigation } from "./Navigation";

export function AppLayout() {
  const location = useLocation();
  const isMatchDetail = location.pathname.startsWith("/match/");

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation activeTab={isMatchDetail ? "Live" : "Matches"} />
      <main className="flex-1 flex justify-center">
        <div className="w-full max-w-[820px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
