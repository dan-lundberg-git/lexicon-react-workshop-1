export default function Links3() {
  // This is just temporaty, i.e. Links 1, Links 2 and Links 3. Will use Props shortly.
  return (
    <div className="space-y-6">
      <h4 className="text-xs font-black tracking-[0.2em] text-slate-900 uppercase">Company</h4>
      <ul className="space-y-4 text-sm font-bold text-slate-500">
        <li>
          <a href="#" className="transition-colors hover:text-blue-600">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="transition-colors hover:text-blue-600">
            Sustainability
          </a>
        </li>
        <li>
          <a href="#" className="transition-colors hover:text-blue-600">
            Careers
          </a>
        </li>
        <li>
          <a href="#" className="transition-colors hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}
