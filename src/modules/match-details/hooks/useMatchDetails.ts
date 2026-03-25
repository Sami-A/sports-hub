import { useQuery } from "@tanstack/react-query";
import { fetchMatchDetails } from "@/modules/match-details/services/matchService";

const matchKeys = {
  detail: (id: string) => ["match", id] as const,
};

export function useMatchDetails(eventId: string) {
  return useQuery({
    queryKey: matchKeys.detail(eventId),
    queryFn: () => fetchMatchDetails(eventId),
    enabled: !!eventId,
  });
}
