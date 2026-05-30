import Link from 'next/link'

const serviceLinks = [
  { href: '/services#architectural', label: '建築図面作成支援' },
  { href: '/services#cad-bim', label: 'CAD・BIMデータ作成' },
  { href: '/services#pointcloud', label: '点群データ・測量支援' },
  { href: '/services#civil', label: '土木構造物関連支援' },
]

const companyLinks = [
  { href: '/company', label: '会社概要' },
  { href: '/capabilities', label: '対応可能業務' },
  { href: '/contact', label: 'お問い合わせ' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-accent rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none">株式会社SOHO</div>
                <div className="text-slate-400 text-[10px] mt-0.5 tracking-wide">CAD / BIM / ARCHITECTURAL DESIGN</div>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              建築物に関する図面作成、CAD/BIMデータ作成、点群データ活用を通じて、
              設計・施工現場の業務効率化を支援します。
            </p>
            <div className="text-slate-400 text-sm space-y-1">
              <p>〒553-0002 大阪市福島区海老江五丁目3番13-301号</p>
              <p>
                <a href="mailto:info@soho-arc.jp" className="hover:text-white transition-colors">
                  info@soho-arc.jp
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">サービス</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">会社情報</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-slate-500">
          <p>© 2026 株式会社SOHO. All Rights Reserved.</p>
          <p>代表取締役：嶋村 拓史</p>
        </div>
      </div>
    </footer>
  )
}
