import { UICard } from "@/components/ui/Card";

export function Stage() {
  return (
    <div key="1" className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-row justify-center items-center h-1/4 bg-gray-200 dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
            Opponent's Hand
          </h4>
          <UICard className="h-24 w-16">
              <PencilIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </UICard>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2" />
      </div>
      <div className="flex flex-row justify-center items-center h-1/2 bg-gray-300 dark:bg-gray-700">
        <UICard className="h-24 w-16 opacity-0">
            <PencilIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        </UICard>
      </div>
      <div className="flex flex-row justify-center items-center h-1/4 bg-gray-200 dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
            Your Hand
          </h4>
          <UICard
            className="h-24 w-16 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
          >
              <PencilIcon className="h-6 w-6 text-gray-700 dark:text-gray-300 mx-auto" />
          </UICard>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2" />
      </div>
    </div>
  );
}

function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}
