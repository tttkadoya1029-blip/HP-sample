import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '会社概要',
  description:
    '株式会社SOHO（大阪市福島区）の会社概要。代表者・設立年月日・資本金・事業内容など会社情報を掲載しています。',
}

const profile = [
  ['会社名', '株式会社SOHO'],
  ['代表者', '代表取締役　嶋村 拓史（Takuji Shimamura）'],
  ['設立', '2026年5月18日'],
  ['資本金', '500万円'],
  ['所在地', '〒553-0002　大阪府大阪市福島区海老江五丁目3番13-301号'],
  ['電話', '（準備中）'],
  ['メール', 'info@soho-arc.jp'],
  [
    '事業内容',
    [
      '建築物に関する図面の作成及び作成支援業務',
      'CAD・BIM等による図面及び各種データの作成・管理',
      '建築物及び土木構造物に関する測量、点群データ取得及びBIMモデルの作成 等',
    ],
  ],
]

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>/</span>
            <span className="text-white">会社概要</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">会社概要</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            株式会社SOHOは、建築図面・CAD/BIM制作支援を専門とする2026年設立の日本法人です。
          </p>
        </div>
      </section>

      {/* Profile table */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            {profile.map(([label, value], i) => (
              <div
                key={label as string}
                className={`flex flex-col sm:flex-row ${
                  i % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                } ${i < profile.length - 1 ? 'border-b border-slate-200' : ''}`}
              >
                <div className="sm:w-48 shrink-0 px-6 py-4 text-sm font-semibold text-slate-500 bg-slate-50/80 sm:border-r border-slate-200">
                  {label as string}
                </div>
                <div className="flex-1 px-6 py-4 text-slate-700 text-sm">
                  {Array.isArray(value) ? (
                    <ul className="space-y-1">
                      {value.map((v) => (
                        <li key={v} className="flex items-start gap-2">
                          <span className="text-accent mt-1">・</span>
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span>{value as string}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from representative */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Message</p>
            <h2 className="section-heading">代表からのご挨拶</h2>
          </div>

          <div className="card max-w-3xl mx-auto">
            <p className="text-slate-600 leading-loose text-base">
              この度、株式会社SOHOを設立いたしました。
              <br /><br />
              当社は、建築物に関する図面制作・CAD/BIMデータ作成・点群データ活用を通じて、
              日本の設計・施工現場の業務効率化に貢献することを目的として設立されました。
              <br /><br />
              設計事務所・建設会社・デベロッパーの皆様が抱える「図面制作のリソース不足」
              「BIM導入の課題」「既存建築物のデータ化」といった課題に対し、
              日本法人としての丁寧な窓口対応と、専門チームによる高品質な制作体制をもってお応えします。
              <br /><br />
              まだ設立間もない会社ではありますが、誠実に、そして確実に業務を遂行することを
              お約束いたします。どうぞお気軽にご相談ください。
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <p className="text-navy font-semibold">株式会社SOHO　代表取締役</p>
              <p className="text-2xl font-bold text-navy mt-1">嶋村 拓史</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Access</p>
            <h2 className="section-heading">所在地</h2>
          </div>

          <div className="card">
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-slate-500 text-sm mb-1">住所</p>
                <p className="text-navy font-semibold text-lg mb-4">
                  〒553-0002<br />
                  大阪府大阪市福島区<br />
                  海老江五丁目3番13-301号
                </p>
                <p className="text-slate-500 text-sm">
                  ※ 訪問をご希望の場合はお問い合わせの上、事前にご連絡ください。
                </p>
              </div>
              <div className="bg-slate-100 rounded-lg h-48 flex items-center justify-center text-slate-400 text-sm">
                <div className="text-center">
                  <svg className="w-8 h-8 mx-auto mb-2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  地図を準備中
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">お問い合わせはこちら</h2>
          <p className="text-slate-300 mb-8">サービスのご相談・お見積りはお気軽にどうぞ。</p>
          <Link href="/contact" className="btn-primary px-10 py-4">
            お問い合わせフォームへ
          </Link>
        </div>
      </section>
    </>
  )
}
