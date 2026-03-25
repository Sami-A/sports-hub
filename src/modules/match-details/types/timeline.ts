export type TimelineEventType =
  | "goal"
  | "yellow_card"
  | "red_card"
  | "substitution"
  | "corner"
  | "injury";

export interface TimelineEvent {
  minute: number | string;
  type: TimelineEventType;
  side: "home" | "away";
  player: string;
  subtitle?: string;
}
