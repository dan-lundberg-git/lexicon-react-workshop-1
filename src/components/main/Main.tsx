import { ChevronDown } from 'lucide-react'

import Aside from './Aside'
import Pagination from './Pagination'
import ProductCard from './ProductCard'

export default function Main() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <Aside />
        {/* Main Content */}
        <section className="lg:col-span-9">
          <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl">
            {/* Title + Sort */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Recommended for you
              </h1>

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

            <div className="mt-5 h-px bg-slate-100"></div>

            {/* Product Grid */}
            <div
              id="product-grid"
              className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <Pagination />
          </div>
        </section>
      </div>
    </main>
  )
}
