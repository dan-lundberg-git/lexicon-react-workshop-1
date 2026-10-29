import { ChevronDown } from 'lucide-react'

export default function Categories() {
  return (
    <section aria-labelledby="filters-categories" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 id="filters-categories" className="text-sm font-bold text-slate-900">
          Categories
        </h2>
        <button
          type="button"
          className="text-slate-400 transition-colors hover:text-blue-600 lg:hidden"
        >
          <ChevronDown size={16} />
        </button>
      </div>

      <div className="space-y-3">
        <label className="flex cursor-pointer items-center gap-3 select-none">
          <input
            type="checkbox"
            value="all"
            className="category-filter h-4.5 w-4.5 cursor-pointer rounded-md border border-slate-200 accent-blue-600"
            checked
          />
          <span className="flex-1 text-sm text-slate-700">
            All Products <span className="font-normal text-slate-400">(124)</span>
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-3 select-none">
          <input
            type="checkbox"
            value="Outerwear"
            className="category-filter h-4.5 w-4.5 cursor-pointer rounded-md border border-slate-200 accent-blue-600"
          />
          <span className="flex-1 text-sm font-medium text-slate-700">
            Outerwear <span className="font-normal text-slate-400">(42)</span>
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-3 select-none">
          <input
            type="checkbox"
            value="Footwear"
            className="category-filter h-4.5 w-4.5 cursor-pointer rounded-md border border-slate-200 accent-blue-600"
          />
          <span className="flex-1 text-sm font-medium text-slate-700">
            Footwear <span className="font-normal text-slate-400">(18)</span>
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-3 select-none">
          <input
            type="checkbox"
            value="Accessories"
            className="category-filter h-4.5 w-4.5 cursor-pointer rounded-md border border-slate-200 accent-blue-600"
          />
          <span className="flex-1 text-sm font-medium text-slate-700">
            Accessories <span className="font-normal text-slate-400">(64)</span>
          </span>
        </label>
      </div>
    </section>
  )
}
