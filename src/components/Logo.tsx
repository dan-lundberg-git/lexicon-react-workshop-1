import { Box } from 'lucide-react'

export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
        <Box size={24} />
      </span>
      <span className="text-xl font-black tracking-tighter uppercase">LITE.SHOP</span>
    </a>
  )
}
