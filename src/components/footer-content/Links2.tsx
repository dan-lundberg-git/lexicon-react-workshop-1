export default function Links2() {
  // This is just temporaty, i.e. Links 1, Links 2 and Links 3. Will use Props shortly.
  return (
    <div className="space-y-6">
      <h4 className="text-xs font-black tracking-[0.2em] text-slate-900 uppercase">Support</h4>
      <ul className="space-y-4 text-sm font-bold text-slate-500">
        <li>
          <a href="#" className="transition-colors hover:text-blue-600">
            Order Status
          </a>
        </li>
        <li>
          <a href="#" className="transition-colors hover:text-blue-600">
            Shipping Policy
          </a>
        </li>
        <li>
          <a href="#" className="transition-colors hover:text-blue-600">
            Returns & Exchanges
          </a>
        </li>
        <li>
          <a href="#" className="transition-colors hover:text-blue-600">
            FAQs
          </a>
        </li>
      </ul>
    </div>
  )
}
