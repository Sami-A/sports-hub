import { apiClient } from "@/shared/services/apiClient";
import { API_ENDPOINTS } from "@/shared/constants/api";
import type { FixturesResponse, SportsEvent } from "@/shared/types/match";

export async function fetchFixtures(): Promise<SportsEvent[]> {
  const [nextRes, lastRes] = await Promise.all([
    apiClient.get<FixturesResponse>(API_ENDPOINTS.FIXTURES_NEXT),
    apiClient.get<FixturesResponse>(API_ENDPOINTS.FIXTURES_LAST),
  ]);

  const upcoming = nextRes.data.events ?? [];
  const past = lastRes.data.events ?? [];

  return [...past, ...upcoming];
}
