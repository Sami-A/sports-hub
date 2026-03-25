import type { TimelineEvent } from "@/modules/match-details/types/timeline";

export const MOCK_TIMELINE: TimelineEvent[] = [
  { minute: 89, type: "substitution", side: "home", player: "Gyokores", subtitle: "Odegard" },
  { minute: 88, type: "goal", side: "away", player: "Ekitike", subtitle: "Sallah" },
  { minute: 78, type: "yellow_card", side: "home", player: "Saliba" },
  { minute: 74, type: "corner", side: "home", player: "3rd corner" },
  { minute: 67, type: "substitution", side: "home", player: "Rice", subtitle: "Zubemendi" },
  { minute: 67, type: "substitution", side: "away", player: "Frimpong", subtitle: "Robertson" },
  { minute: 66, type: "red_card", side: "away", player: "Van Dijk", subtitle: "Sent Off" },
  { minute: 55, type: "goal", side: "home", player: "Saka" },
  { minute: 52, type: "corner", side: "home", player: "5th corner" },
  { minute: 48, type: "corner", side: "away", player: "3rd Corner" },
  // --- Halftime 1-0 ---
  { minute: "45+2", type: "corner", side: "home", player: "2nd corner" },
  { minute: 45, type: "substitution", side: "away", player: "Jones", subtitle: "Miallister" },
  { minute: 44, type: "yellow_card", side: "home", player: "Gabret" },
  { minute: 44, type: "injury", side: "away", player: "Jones", subtitle: "Injured" },
  { minute: 36, type: "corner", side: "home", player: "1st corner" },
  { minute: 34, type: "yellow_card", side: "away", player: "Konate" },
  { minute: 25, type: "substitution", side: "home", player: "Gyokores" },
  { minute: 16, type: "corner", side: "away", player: "2nd Corner" },
  { minute: 12, type: "goal", side: "home", player: "Gyokores", subtitle: "Odegard" },
  { minute: 3, type: "corner", side: "away", player: "1st Corner" },
];
