export default function PromoCard() {
  return (
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
  )
}
