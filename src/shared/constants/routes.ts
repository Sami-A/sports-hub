export const ROUTES = {
  HOME: "/",
  MATCH: "/match/:eventId",
  matchDetail: (eventId: string) => `/match/${eventId}`,
} as const;
