import { Menu, Search, ShoppingBag, User } from 'lucide-react'

export default function RightIcons() {
  return (
    <div className="flex items-center gap-2">
      {/* Status Indicator */}
      <div className="mr-4 hidden items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/30 px-3 py-1 lg:flex">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-200 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-100"></span>
        </span>
        <span className="text-[10px] font-black tracking-widest text-blue-50 uppercase">Live</span>
      </div>

      {/* Search */}
      <div className="relative hidden sm:block">
        <input
          id="search-input"
          type="text"
          placeholder="Search products..."
          className="h-10 w-48 rounded-xl border border-blue-400/20 bg-blue-500/30 pr-4 pl-10 text-xs font-medium text-blue-50 transition-all duration-300 outline-none placeholder:text-blue-200/50 focus:w-64 focus:bg-blue-500/50"
        />
        <Search className="absolute top-3 left-3.5 text-blue-200" size={16} />
      </div>

      {/* Cart */}
      <button
        type="button"
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/30 text-blue-50 transition-all duration-200 hover:bg-blue-500/50 hover:text-white"
        aria-label="Cart"
        title="Cart"
      >
        <ShoppingBag size={20} />
        {/* Cart Count Badge */}
        <span
          id="cart-count"
          className="absolute -top-1.5 -right-1.5 hidden h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm"
        >
          0
        </span>
      </button>

      {/* User */}
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/30 text-blue-50 transition-all duration-200 hover:bg-blue-500/50 hover:text-white"
        aria-label="Account"
        title="Account"
      >
        <User size={20} />
      </button>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/30 text-blue-50 transition-all duration-200 hover:bg-blue-500/50 hover:text-white md:hidden"
        aria-label="Menu"
        title="Menu"
      >
        <Menu size={24} />
      </button>
    </div>
  )
}
