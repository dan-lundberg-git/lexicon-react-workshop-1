import { Box } from "lucide-react"

export default function Brands() {
  return (
    <div className="col-span-2 space-y-6 lg:col-span-2">
      <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-slate-900">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg">
          <Box size={18} />
        </span>
        <span className="text-xl font-black tracking-tighter uppercase">LITE.SHOP</span>
      </a>
      <p className="max-w-xs text-sm leading-relaxed font-medium text-slate-500">
        Modern e-commerce experience built for speed and elegance. Discover the latest trends in
        outerwear, footwear and accessories.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
          aria-label="Twitter"
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
          aria-label="Instagram"
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
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
      </div>
    </div>
  )
}
