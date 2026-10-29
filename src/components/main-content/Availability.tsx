export default function Availability() {
  return (
    <section aria-labelledby="filters-availability" className="space-y-4">
      <h2 id="filters-availability" className="text-sm font-bold text-slate-900">
        Availability
      </h2>

      <div className="space-y-3">
        <label className="flex cursor-pointer items-center gap-3 select-none">
          <input
            type="checkbox"
            className="h-4.5 w-4.5 cursor-pointer rounded-md border border-slate-200 accent-blue-600"
          />
          <span className="flex-1 text-sm text-slate-700">In Stock</span>
        </label>

        <label className="flex cursor-pointer items-center gap-3 select-none">
          <input
            type="checkbox"
            className="h-4.5 w-4.5 cursor-pointer rounded-md border border-slate-200 accent-blue-600"
          />
          <span className="flex-1 text-sm text-slate-700">On Sale</span>
        </label>
      </div>
    </section>
  )
}
