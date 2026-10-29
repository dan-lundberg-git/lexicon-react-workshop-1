export default function PriceRange() {
  return (
    <section aria-labelledby="filters-price" className="space-y-3">
      <h2 id="filters-price" className="text-sm font-bold text-slate-900">
        Price Range
      </h2>

      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>0 kr</span>
        <span>1800 kr</span>
      </div>

      <input
        type="range"
        min="0"
        max="1800"
        value="900"
        className="w-full accent-blue-500"
        aria-label="Price range"
      />
    </section>
  )
}
