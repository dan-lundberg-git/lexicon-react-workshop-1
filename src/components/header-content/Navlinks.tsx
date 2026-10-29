export default function Navlinks() {
  return (
    <nav className="hidden items-center gap-8 text-sm font-bold text-blue-100 md:flex">
      <a
        className="relative transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-white after:transition-transform after:duration-300 after:content-[''] hover:text-white hover:after:scale-x-100"
        href="#"
      >
        New Arrival
      </a>
      <a
        className="relative transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-white after:transition-transform after:duration-300 after:content-[''] hover:text-white hover:after:scale-x-100"
        href="#"
      >
        Men
      </a>
      <a
        className="relative transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-white after:transition-transform after:duration-300 after:content-[''] hover:text-white hover:after:scale-x-100"
        href="#"
      >
        Women
      </a>
      <a
        className="relative transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-white after:transition-transform after:duration-300 after:content-[''] hover:text-white hover:after:scale-x-100"
        href="#"
      >
        Sale
      </a>
    </nav>
  )
}
