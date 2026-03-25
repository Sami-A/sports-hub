export interface SportsEvent {
  idEvent: string;
  idSoccerXML: string | null;
  idAPIfootball: string | null;
  strEvent: string;
  strEventAlternate: string;
  strFilename: string;
  strSport: string;
  idLeague: string;
  strLeague: string;
  strLeagueBadge: string | null;
  strSeason: string;
  strDescriptionEN: string | null;
  strHomeTeam: string;
  strAwayTeam: string;
  intHomeScore: string | null;
  intRound: string;
  intAwayScore: string | null;
  intSpectators: string | null;
  strOfficial: string | null;
  strTimestamp: string;
  dateEvent: string;
  dateEventLocal: string | null;
  strTime: string;
  strTimeLocal: string | null;
  strTVStation: string | null;
  idHomeTeam: string;
  idAwayTeam: string;
  intScore: string | null;
  intScoreVoting: string | null;
  strResult: string | null;
  strVenue: string | null;
  strCountry: string | null;
  strCity: string | null;
  strPoster: string | null;
  strSquare: string | null;
  strFanart: string | null;
  strThumb: string | null;
  strBanner: string | null;
  strMap: string | null;
  strTweet1: string | null;
  strTweet2: string | null;
  strTweet3: string | null;
  strVideo: string | null;
  strStatus: string | null;
  strPostponed: string | null;
  strLocked: string;
  strHomeTeamBadge?: string;
  strAwayTeamBadge?: string;
}

export interface FixturesResponse {
  events: SportsEvent[] | null;
}

export interface EventLookupResponse {
  events: SportsEvent[] | null;
}

export type MatchStatus = "FT" | "HT" | "LIVE" | "NS" | "PST" | string;

export function getMatchStatus(event: SportsEvent): MatchStatus {
  if (event.strStatus) return event.strStatus;
  if (event.intHomeScore !== null && event.intAwayScore !== null) return "FT";
  return "NS";
}

export function isLiveMatch(event: SportsEvent): boolean {
  const status = event.strStatus?.toLowerCase() ?? "";
  return (
    status.includes("live") ||
    status.includes("h") ||
    /^\d+$/.test(status) ||
    status === "1h" ||
    status === "2h"
  );
}
