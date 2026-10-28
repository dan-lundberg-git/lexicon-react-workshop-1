import Logo from './Logo'
import Navlinks from './Navlinks'
import RightIcons from './RightIcons'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-blue-700/30 bg-blue-600 shadow-lg shadow-blue-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <Navlinks />
          <RightIcons />
        </div>
      </div>
    </header>
  )
}
