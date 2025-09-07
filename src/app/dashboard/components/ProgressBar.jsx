export default function ProgressBar({ value }) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-between">
          <p className="text-sm">Progress</p>
          <div className="flex flex-row justify-end px-2">
            <span className="text-sm font-medium text-gray-700">{value}</span>
            <span className="text-sm font-medium text-gray-700">%</span>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-2xl h-2">
        <div
          className="h-2 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to bg-cyan-300 transition-all duration-500"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
