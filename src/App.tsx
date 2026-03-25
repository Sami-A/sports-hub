import { QueryProvider } from "@/app/providers/QueryProvider";
import { AppRoutes } from "@/app/routes/AppRoutes";
import { ErrorBoundary } from "@/shared/components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <QueryProvider>
        <AppRoutes />
      </QueryProvider>
    </ErrorBoundary>
  );
}
