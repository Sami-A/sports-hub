export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-8 h-8 border-2 border-[#6D00FF] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
