import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '建築図面・CAD/BIM制作支援',
  description:
    '株式会社SOHOは、建築物に関する図面作成・CAD/BIMデータ作成・点群データ活用を通じて設計・施工現場の業務効率化を支援します。大阪市福島区。',
}

const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: '建築図面制作に特化',
    desc: '建築設計図・施工図・2D CADを中心に、図面制作業務を専門的にサポートします。',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'CAD・BIM・点群データに対応',
    desc: 'Revit等によるBIMモデル作成から点群データ取得・モデル化まで幅広く対応します。',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    title: '日本法人として安心の窓口',
    desc: '大阪市に所在する日本法人として、日本語によるスムーズな窓口対応を提供します。',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: '関連会社との連携体制',
    desc: 'CAD/BIM支援の実績を持つ関連会社との連携により、安定した制作体制を確保しています。',
  },
]

const services = [
  {
    href: '/services#architectural',
    title: '建築図面作成支援',
    desc: '建築設計図・施工図・2D CAD図面・図面トレースなど、多様な建築図面の制作をサポートします。',
    badge: '建築',
  },
  {
    href: '/services#cad-bim',
    title: 'CAD・BIMデータ作成',
    desc: 'Revit等を想定したBIMモデル作成、各種図面データの作成・管理支援を行います。',
    badge: 'BIM',
  },
  {
    href: '/services#pointcloud',
    title: '点群データ・測量支援',
    desc: '点群データの取得・処理、既存建築物のデータ化、BIMモデル化を支援します。',
    badge: '測量',
  },
  {
    href: '/services#civil',
    title: '土木構造物関連支援',
    desc: '土木構造物の図面・モデル作成支援を行います。',
    badge: '土木',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        {/* Blueprint grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-blue-900/60" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-accent text-sm font-medium">建築図面・CAD/BIM 専門会社</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              建築図面・CAD・BIM制作を、<br />
              <span className="text-accent">正確かつスピーディーに。</span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              株式会社SOHOは、建築物に関する図面作成、CAD/BIMデータ作成、点群データ活用、BIMモデル作成を通じて、
              設計・施工現場の業務効率化を支援します。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                お問い合わせはこちら
              </Link>
              <Link href="/services" className="btn-secondary text-base px-8 py-4">
                サービスを見る
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* 選ばれる理由 */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Why SOHO</p>
            <h2 className="section-heading">選ばれる理由</h2>
            <p className="section-sub">
              建築・CAD・BIM分野に特化した専門性と、日本法人としての信頼感を兼ね備えています。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="card text-center group">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                  {r.icon}
                </div>
                <h3 className="text-navy font-semibold text-base mb-2">{r.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* サービス概要 */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Services</p>
            <h2 className="section-heading">サービス概要</h2>
            <p className="section-sub">
              建築図面からBIMモデル・点群データまで、設計・施工現場に必要な制作支援を提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block border border-slate-200 rounded-xl p-6 hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 mt-0.5">
                    {s.badge}
                  </span>
                  <div>
                    <h3 className="text-navy font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-accent text-sm font-medium">
                  詳しく見る
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              サービス一覧を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 対応可能業務 */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Capabilities</p>
            <h2 className="section-heading">対応可能業務</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              '建築設計図作成', '施工図作成', '2D CAD図面', '図面トレース',
              'BIMモデル作成', 'Revit対応', '図面データ管理', '点群データ取得',
              '既存建築物データ化', 'BIMモデル化', '土木構造物図面', '測量支援',
            ].map((item) => (
              <div
                key={item}
                className="bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 text-center font-medium hover:border-accent hover:text-accent transition-colors cursor-default"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/capabilities" className="btn-outline">
              対応業務詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Company</p>
              <h2 className="section-heading text-left">会社概要</h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                株式会社SOHOは、2026年5月に設立した建築図面制作・CAD/BIM支援の専門会社です。
                大阪市福島区に拠点を置き、日本全国の設計事務所・建設会社・デベロッパーの
                業務効率化を支援します。
              </p>
              <Link href="/company" className="btn-outline">
                会社概要を見る
              </Link>
            </div>

            <div className="card divide-y divide-slate-100">
              {[
                ['会社名', '株式会社SOHO'],
                ['代表者', '嶋村 拓史'],
                ['設立', '2026年5月18日'],
                ['資本金', '500万円'],
                ['所在地', '大阪市福島区海老江五丁目3番13-301号'],
              ].map(([label, value]) => (
                <div key={label} className="flex py-3 gap-4">
                  <span className="text-slate-400 text-sm w-20 shrink-0">{label}</span>
                  <span className="text-slate-700 text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            図面制作の外注・BIM導入支援・点群データ活用など、<br className="hidden sm:block" />
            どんなご相談でもお受けします。
          </p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </>
  )
}
