import Availability from './Availability'
import Categories from './Categories'
import PriceRange from './PriceRange'
import PromoCard from './PromoCard'

export default function aside() {
  return (
    <aside className="self-start lg:sticky lg:top-20 lg:col-span-3">
      <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl">
        <Categories />
        <div className="my-5 h-px bg-slate-100"></div>
        <PriceRange />
        <div className="my-5 h-px bg-slate-100"></div>
        <Availability />
        <PromoCard />
      </div>
    </aside>
  )
}
