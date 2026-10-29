import { ChevronDown } from 'lucide-react'

export default function TitleSort() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-xl font-bold tracking-tight text-slate-900">Recommended for you</h1>

      <label className="inline-flex items-center gap-2 text-sm text-slate-600">
        <span className="hidden sm:inline">Sort by:</span>
        <div className="relative">
          <select className="cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-2 pr-9 pl-3 text-sm text-slate-950 transition-all duration-200 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-600/10">
            <option selected>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Best Selling</option>
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
            <ChevronDown size={16} />
          </span>
        </div>
      </label>
    </div>
  )
}
