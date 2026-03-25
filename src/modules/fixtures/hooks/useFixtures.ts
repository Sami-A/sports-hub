import { useQuery } from "@tanstack/react-query";
import { fetchFixtures } from "@/modules/fixtures/services/fixturesService";
import { POLLING_INTERVAL } from "@/shared/constants/api";

const fixtureKeys = {
  all: ["fixtures"] as const,
};

export function useFixtures() {
  return useQuery({
    queryKey: fixtureKeys.all,
    queryFn: fetchFixtures,
    refetchInterval: POLLING_INTERVAL,
    refetchIntervalInBackground: false,
  });
}
