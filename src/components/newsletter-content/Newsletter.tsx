export default function Newsletter() {
  return (
    <section className="relative mt-12 overflow-hidden bg-slate-900 py-16 text-white">
      {/* Decorative element */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl font-black tracking-tight uppercase italic sm:text-4xl">
              Join the LITE.CLUB
            </h2>
            <p className="leading-relaxed font-medium text-slate-400">
              Subscribe to our newsletter and get{' '}
              <span className="font-bold text-white underline decoration-blue-500 decoration-2 underline-offset-4">
                15% off
              </span>
              your first order. Be the first to know about new arrivals and exclusive sales.
            </p>
          </div>

          <form className="w-full max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white transition-all outline-none placeholder:text-slate-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/50"
                required
              />
              <button
                type="submit"
                className="rounded-2xl bg-blue-600 px-8 py-4 text-sm font-black tracking-widest text-white uppercase transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-[10px] text-slate-500 italic">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
