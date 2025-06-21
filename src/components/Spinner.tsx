
export const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 border-4 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-gray-600 text-lg font-medium">Loading...</span>
      </div>
    </div>
  );
};