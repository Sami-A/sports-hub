import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "@/app/layouts/AppLayout";
import { ROUTES } from "@/shared/constants/routes";
import { LoadingSpinner } from "@/shared/components/LoadingSpinner";

const FixturesPage = lazy(
  () => import("@/modules/fixtures/container/FixturesPage")
);
const MatchDetailsPage = lazy(
  () => import("@/modules/match-details/container/MatchDetailsPage")
);

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path={ROUTES.HOME}
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <FixturesPage />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.MATCH}
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <MatchDetailsPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
