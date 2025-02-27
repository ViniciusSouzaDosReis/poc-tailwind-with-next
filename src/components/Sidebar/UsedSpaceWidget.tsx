export function UsedSpaceWidget() {
  return (
    <div className="space-y-4 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-violet-700">
          Used space
        </span>
        <p className="text-sm/5 text-violet-500">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>
      <div className="h-2 rounded-full bg-violet-100">
        <div className="h-full w-4/5 rounded-full bg-violet-600" />
      </div>
      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-semibold text-violet-500 hover:text-violet-700"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-semibold text-violet-700 hover:text-violet-900"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
