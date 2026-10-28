export default function Main() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Sidebar Filters */}
        <aside className="self-start lg:sticky lg:top-20 lg:col-span-3">
          <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl">
            {/* Categories */}
            <section aria-labelledby="filters-categories" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 id="filters-categories" className="text-sm font-bold text-slate-900">
                  Categories
                </h2>
                <button
                  type="button"
                  className="text-slate-400 transition-colors hover:text-blue-600 lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
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

            <div className="my-5 h-px bg-slate-100"></div>

            {/* Price Range */}
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

            <div className="my-5 h-px bg-slate-100"></div>

            {/* Availability */}
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

            {/* Promo Card */}
            <section className="mt-6">
              <div className="relative overflow-hidden rounded-[1.25rem] bg-linear-to-br from-blue-600 to-amber-500 p-6 text-white before:absolute before:top-[-20%] before:right-[-10%] before:h-50 before:w-50 before:rounded-full before:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)] before:content-['']">
                <h3 className="text-lg font-bold text-white">Summer Sale</h3>
                <p className="mt-2 text-sm leading-relaxed text-white opacity-90">
                  Get up to 50% off on all summer collections. Limited time offer!
                </p>
                <button
                  type="button"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border-none bg-white px-5 py-2.5 font-semibold text-blue-600 shadow-lg transition-all duration-200 hover:-translate-y-px hover:bg-slate-50 hover:shadow-lg"
                >
                  Shop Now
                </button>
              </div>
            </section>
          </div>
        </aside>

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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
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
              {/* Product Card 1 */}
              <article className="group rounded-[1.25rem] border border-slate-200 bg-white p-3 transition-all duration-400 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800"
                    alt="Technical Shell Jacket"
                    className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Product Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-blue-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      type="button"
                      className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform duration-500 group-hover:translate-y-0 hover:bg-blue-600 hover:text-white"
                      aria-label="Quick View"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform delay-75 duration-500 group-hover:translate-y-0 hover:bg-blue-600 hover:text-white"
                      aria-label="Add to cart"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </button>
                </div>

                <div className="mt-4 space-y-1 px-1 pb-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black tracking-[0.15em] text-blue-600/70 uppercase">
                      Outerwear
                    </p>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-amber-400"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-[10px] font-bold text-slate-400">4.9</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    Technical Shell Jacket
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">
                    In Stock • Ships in 2 days
                  </p>

                  <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] leading-none font-medium text-slate-400 line-through">
                        1,450 kr
                      </span>
                      <span className="text-lg font-black tracking-tight text-slate-900">
                        890 kr
                      </span>
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

              {/* Product Card 2 */}
              <article className="group rounded-[1.25rem] border border-slate-200 bg-white p-3 transition-all duration-400 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
                    alt="Speedster Running Shoes"
                    className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Product Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-blue-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      type="button"
                      className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform duration-500 group-hover:translate-y-0 hover:bg-blue-600 hover:text-white"
                      aria-label="Quick View"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform delay-75 duration-500 group-hover:translate-y-0 hover:bg-blue-600 hover:text-white"
                      aria-label="Add to cart"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </button>
                  </div>

                  <span className="absolute top-3 left-3 rounded-full border border-amber-100/50 bg-amber-500/10 px-3 py-1 text-[11px] font-bold text-amber-600 backdrop-blur-md">
                    Limited
                  </span>

                  {/*Favorite */}
                  <button
                    type="button"
                    className="group/heart absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg"
                    aria-label="Add to favorites"
                    title="Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </button>
                </div>

                <div className="mt-4 space-y-1 px-1 pb-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black tracking-[0.15em] text-blue-600/70 uppercase">
                      Footwear
                    </p>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-amber-400"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-[10px] font-bold text-slate-400">4.8</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    Speedster Running Shoes
                  </h3>
                  <p className="text-[11px] font-medium text-amber-600">Only 4 items left</p>

                  <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex flex-col">
                      <span className="text-lg font-black tracking-tight text-slate-900">
                        1,200 kr
                      </span>
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

              {/*Product Card 3 */}
              <article className="group rounded-[1.25rem] border border-slate-200 bg-white p-3 transition-all duration-400 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100 opacity-80 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
                    alt="Minimalist Quartz Watch"
                    className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Product Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-slate-900/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      type="button"
                      className="flex h-12 w-12 translate-y-4 cursor-not-allowed items-center justify-center rounded-full bg-white/80 text-slate-400 shadow-xl transition-transform duration-500 group-hover:translate-y-0"
                      aria-label="Quick View"
                      disabled
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex h-12 w-12 translate-y-4 cursor-not-allowed items-center justify-center rounded-full bg-white/80 text-slate-400 shadow-xl transition-transform delay-75 duration-500 group-hover:translate-y-0"
                      aria-label="Add to cart"
                      disabled
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </button>
                  </div>

                  <span className="absolute top-3 left-3 rounded-full border border-slate-200/50 bg-slate-900/60 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                    Sold Out
                  </span>

                  {/* Favorite */}
                  <button
                    type="button"
                    className="group/heart absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg"
                    aria-label="Add to favorites"
                    title="Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </button>
                </div>

                <div className="mt-4 space-y-1 px-1 pb-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black tracking-[0.15em] text-blue-600/70 uppercase">
                      Accessories
                    </p>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-amber-400"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-[10px] font-bold text-slate-400">4.7</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    Minimalist Quartz Watch
                  </h3>
                  <p className="text-[11px] font-medium text-slate-400 italic">
                    Back in stock next week
                  </p>

                  <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex flex-col">
                      <span className="text-lg font-black tracking-tight text-slate-400">
                        1,850 kr
                      </span>
                    </div>

                    <button
                      type="button"
                      className="inline-flex h-10 cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-100 px-5 text-xs font-bold text-slate-400 transition-all duration-300"
                      aria-label="Add to cart"
                      disabled
                    >
                      Notify Me
                    </button>
                  </div>
                </div>
              </article>

              {/* Product Card 4 */}
              <article className="group rounded-[1.25rem] border border-slate-200 bg-white p-3 transition-all duration-400 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800"
                    alt="Classic Canvas Sneakers"
                    className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Product Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-blue-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      type="button"
                      className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform duration-500 group-hover:translate-y-0 hover:bg-blue-600 hover:text-white"
                      aria-label="Quick View"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform delay-75 duration-500 group-hover:translate-y-0 hover:bg-blue-600 hover:text-white"
                      aria-label="Add to cart"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </button>
                  </div>

                  <span className="absolute top-3 left-3 rounded-full border border-blue-100/50 bg-blue-500/10 px-3 py-1 text-[11px] font-bold text-blue-600 backdrop-blur-md">
                    Popular
                  </span>

                  {/* Favorite */}
                  <button
                    type="button"
                    className="group/heart absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg"
                    aria-label="Add to favorites"
                    title="Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </button>
                </div>

                <div className="mt-4 space-y-1 px-1 pb-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black tracking-[0.15em] text-blue-600/70 uppercase">
                      Footwear
                    </p>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-amber-400"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-[10px] font-bold text-slate-400">4.5</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    Classic Canvas Sneakers
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">
                    In Stock • ships in 1 day
                  </p>

                  <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex flex-col">
                      <span className="text-lg font-black tracking-tight text-slate-900">
                        550 kr
                      </span>
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

              {/* Product Card 5 */}
              <article className="group rounded-[1.25rem] border border-slate-200 bg-white p-3 transition-all duration-400 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
                    alt="Premium Wireless Headphones"
                    className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Product Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-blue-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      type="button"
                      className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform duration-500 group-hover:translate-y-0 hover:bg-blue-600 hover:text-white"
                      aria-label="Quick View"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform delay-75 duration-500 group-hover:translate-y-0 hover:bg-blue-600 hover:text-white"
                      aria-label="Add to cart"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </button>
                  </div>

                  <span className="absolute top-3 left-3 rounded-full border border-rose-100/50 bg-rose-500/10 px-3 py-1 text-[11px] font-bold text-rose-600 backdrop-blur-md">
                    Hot Deal
                  </span>

                  {/* Favorite */}
                  <button
                    type="button"
                    className="group/heart absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg"
                    aria-label="Add to favorites"
                    title="Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </button>
                </div>

                <div className="mt-4 space-y-1 px-1 pb-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black tracking-[0.15em] text-blue-600/70 uppercase">
                      Accessories
                    </p>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-amber-400"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-[10px] font-bold text-slate-400">4.9</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    Premium Wireless Headphones
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">
                    In Stock • Ships in 2 days
                  </p>

                  <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] leading-none font-medium text-slate-400 line-through">
                        2,200 kr
                      </span>
                      <span className="text-lg font-black tracking-tight text-slate-900">
                        1,690 kr
                      </span>
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

              {/* Product Card 6 */}
              <article className="group rounded-[1.25rem] border border-slate-200 bg-white p-3 transition-all duration-400 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
                    alt="Tech Daypack"
                    className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Product Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-blue-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      type="button"
                      className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform duration-500 group-hover:translate-y-0 hover:bg-blue-600 hover:text-white"
                      aria-label="Quick View"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform delay-75 duration-500 group-hover:translate-y-0 hover:bg-blue-600 hover:text-white"
                      aria-label="Add to cart"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </button>
                  </div>

                  <span className="absolute top-3 left-3 rounded-full border border-amber-100/50 bg-amber-500/10 px-3 py-1 text-[11px] font-bold text-amber-600 backdrop-blur-md">
                    New Arrival
                  </span>

                  {/* Favorite */}
                  <button
                    type="button"
                    className="group/heart absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg"
                    aria-label="Add to favorites"
                    title="Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </button>
                </div>

                <div className="mt-4 space-y-1 px-1 pb-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black tracking-[0.15em] text-blue-600/70 uppercase">
                      Accessories
                    </p>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-amber-400"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-[10px] font-bold text-slate-400">4.6</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    Tech Daypack
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">
                    In Stock • Ships in 1 day
                  </p>

                  <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex flex-col">
                      <span className="text-lg font-black tracking-tight text-slate-900">
                        1,100 kr
                      </span>
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
            </div>

            {/* Pagination */}
            <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-500 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
                aria-label="Previous page"
                title="Previous"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-600 bg-blue-600 font-medium text-white transition-all duration-200"
                aria-current="page"
              >
                1
              </button>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-500 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
              >
                2
              </button>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-500 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
              >
                3
              </button>
              <span className="px-2 text-sm text-slate-400">…</span>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-500 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
              >
                12
              </button>

              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-500 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
                aria-label="Next page"
                title="Next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </nav>
          </div>
        </section>
      </div>
    </main>
  )
}
