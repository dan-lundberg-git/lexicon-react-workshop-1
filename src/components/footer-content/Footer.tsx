import Brands from './Brands'
import Links1 from './Links1'
import Links2 from './Links2'
import Links3 from './Links3'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <Brands />
          <Links1 />
          <Links2 />
          <Links3 />
        </div>
        <div className="mt-20 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
            &copy; 2026 LITE.SHOP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[10px] font-black tracking-widest text-slate-400 uppercase transition-colors hover:text-slate-900"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[10px] font-black tracking-widest text-slate-400 uppercase transition-colors hover:text-slate-900"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
