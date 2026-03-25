import { apiClient } from "@/shared/services/apiClient";
import { API_ENDPOINTS } from "@/shared/constants/api";
import type { EventLookupResponse, SportsEvent } from "@/shared/types/match";

export async function fetchMatchDetails(
  eventId: string
): Promise<SportsEvent | null> {
  const { data } = await apiClient.get<EventLookupResponse>(
    API_ENDPOINTS.MATCH_DETAIL(eventId)
  );
  return data.events?.[0] ?? null;
}
