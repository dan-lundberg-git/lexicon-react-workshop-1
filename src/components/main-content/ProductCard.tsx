import { Eye, Heart, Plus, Star } from 'lucide-react'

interface Product {
  title: string
  price: string
  category: string
  imageSrc: string
}

export default function ProductCard({ title, price, category, imageSrc }: Product) {
  return (
    <article className="group rounded-[1.25rem] border border-slate-200 bg-white p-3 transition-all duration-400 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]">
      <div className="relative overflow-hidden rounded-2xl bg-slate-100">
        <img
          src={imageSrc}
          alt={title}
          className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Product Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-blue-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform duration-500 group-hover:translate-y-0 hover:bg-blue-600 hover:text-white"
            aria-label="Quick View"
          >
            <Eye size={20} />
          </button>
          <button
            type="button"
            className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform delay-75 duration-500 group-hover:translate-y-0 hover:bg-blue-600 hover:text-white"
            aria-label="Add to cart"
          >
            <Plus size={20} />
          </button>
        </div>

        {/* Badge */}
        <span className="absolute top-3 left-3 rounded-full border border-rose-100/50 bg-rose-500/10 px-3 py-1 text-[11px] font-bold text-rose-600 backdrop-blur-md">
          Discount
        </span>

        {/* Favorite */}
        <button
          type="button"
          className="group/heart absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg"
          aria-label="Add to favorites"
          title="Favorite"
        >
          <Heart
            size={20}
            className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500"
          />
        </button>
      </div>

      <div className="mt-4 space-y-1 px-1 pb-2">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-black tracking-[0.15em] text-blue-600/70 uppercase">
            {category}
          </p>
          <div className="flex items-center gap-1">
            <Star size={10} className="fill-amber-400 text-amber-400" />
            <span className="text-[10px] font-bold text-slate-400">4.9</span>
          </div>
        </div>
        <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600">
          {title}
        </h3>
        <p className="text-[11px] font-medium text-slate-500">In Stock • Ships in 2 days</p>

        <div className="flex items-center justify-between gap-3 pt-3">
          <div className="flex flex-col">
            <span className="text-[10px] leading-none font-medium text-slate-400 line-through">
              {price} kr
            </span>
            <span className="text-lg font-black tracking-tight text-slate-900">890 kr</span>
          </div>

          <button
            type="button"
            className="group/btn inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-xs font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 active:scale-95"
            aria-label="Add to cart"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}
