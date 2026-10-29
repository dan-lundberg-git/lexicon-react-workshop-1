import Aside from './Aside'
import Pagination from './Pagination'
import ProductGrid from './ProductGrid'
import TitleSort from './TitleSort'

export default function Main() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <Aside />
        <section className="lg:col-span-9">
          <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl">
            <TitleSort />
            <div className="mt-5 h-px bg-slate-100"></div>
            <ProductGrid />
            <Pagination />
          </div>
        </section>
      </div>
    </main>
  )
}
