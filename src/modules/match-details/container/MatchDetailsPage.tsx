import { useParams, useNavigate } from "react-router";
import { useMatchDetails } from "@/modules/match-details/hooks/useMatchDetails";
import { HeadToHead } from "@/modules/match-details/components/HeadToHead";
import { DetailsTabs } from "@/modules/match-details/components/DetailsTabs";
import { MatchTimeline } from "@/modules/match-details/components/MatchTimeline";
import { LoadingSpinner } from "@/shared/components/LoadingSpinner";

export default function MatchDetailsPage() {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const { data: match, isLoading, error } = useMatchDetails(eventId ?? "");

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !match) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3">
        <p className="text-red-400 text-sm">Failed to load match details</p>
        <button
          onClick={() => navigate(-1)}
          className="text-[#6D00FF] text-sm hover:underline"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="bg-[#1D1E2B] border-b border-white/10 lg:mx-4 lg:mt-4 lg:rounded-t-lg">
        <div className="px-6 pt-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-4 text-white text-sm transition-colors"
          >
            <span className="text-lg">←</span>
            <span>{match.strLeague}</span>
          </button>
        </div>

        <HeadToHead event={match} />
        <DetailsTabs />
      </div>

      <div className="p-4">
        <MatchTimeline event={match} />
      </div>
    </div>
  );
}
