export const API_BASE_URL =
  "https://www.thesportsdb.com/api/v1/json/3";

export const API_ENDPOINTS = {
  FIXTURES_NEXT: `${API_BASE_URL}/eventsnext.php?id=133602`,
  FIXTURES_LAST: `${API_BASE_URL}/eventspastleague.php?id=4396`,
  MATCH_DETAIL: (eventId: string) =>
    `${API_BASE_URL}/lookupevent.php?id=${eventId}`,
} as const;

export const POLLING_INTERVAL = 15_000; // 15 seconds
