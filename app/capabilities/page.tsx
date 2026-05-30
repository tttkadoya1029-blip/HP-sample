import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '対応可能業務',
  description:
    '株式会社SOHOが対応可能な業務一覧。建築図面・CAD・BIM・点群データ・土木まで、幅広い制作支援業務に対応します。',
}

const categories = [
  {
    title: '建築図面作成',
    color: 'bg-blue-50 border-blue-200',
    badgeColor: 'bg-blue-100 text-blue-700',
    items: [
      { name: '建築設計図（平面図・立面図・断面図・配置図）', level: '対応可' },
      { name: '施工図（仕上げ・躯体・設備調整）', level: '対応可' },
      { name: '2D CAD図面作成（AutoCAD / JW-CAD）', level: '対応可' },
      { name: '図面トレース（スキャン→CAD変換）', level: '対応可' },
      { name: '図面修正・更新作業', level: '対応可' },
      { name: '竣工図整備', level: '対応可' },
    ],
  },
  {
    title: 'CAD・BIMデータ作成',
    color: 'bg-indigo-50 border-indigo-200',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    items: [
      { name: 'BIMモデル作成（Revit想定）', level: '対応可' },
      { name: '2D→3D変換・BIM化', level: '対応可' },
      { name: 'BIMモデルからの図面生成', level: '対応可' },
      { name: '図面データ整理・管理支援', level: '対応可' },
      { name: 'LOD（詳細度）に応じたモデリング', level: '対応可' },
    ],
  },
  {
    title: '点群データ・測量',
    color: 'bg-teal-50 border-teal-200',
    badgeColor: 'bg-teal-100 text-teal-700',
    items: [
      { name: '3Dスキャンによる点群データ取得', level: '対応可' },
      { name: '既存建築物の現況調査・データ化', level: '対応可' },
      { name: '点群データからのBIMモデル作成', level: '対応可' },
      { name: 'リノベーション・改修向けデータ整備', level: '対応可' },
    ],
  },
  {
    title: '土木構造物関連',
    color: 'bg-amber-50 border-amber-200',
    badgeColor: 'bg-amber-100 text-amber-700',
    items: [
      { name: '土木構造物の設計図・施工図作成', level: '対応可' },
      { name: '土木構造物の3Dモデル化', level: '対応可' },
      { name: '道路・橋梁・擁壁等の図面支援', level: '対応可' },
    ],
  },
]

const flow = [
  { step: '01', title: 'お問い合わせ', desc: 'フォームまたはメールにてお気軽にご連絡ください。' },
  { step: '02', title: 'ヒアリング', desc: 'ご要件・納期・データ形式などを確認します。' },
  { step: '03', title: 'お見積り', desc: '内容に応じたお見積りをご提示します。' },
  { step: '04', title: '制作・納品', desc: '品質確認後、指定の形式でデータを納品します。' },
]

export default function CapabilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>/</span>
            <span className="text-white">対応可能業務</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">対応可能業務</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            設立直後のため実績写真は準備中ですが、CAD/BIM制作支援の専門チームとして、
            幅広い業務に対応可能です。まずはご相談ください。
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className={`border rounded-xl p-6 ${cat.color}`}>
                <div className="flex items-center gap-2 mb-5">
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${cat.badgeColor}`}>
                    {cat.title}
                  </span>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700 text-sm">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 対応フロー */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Flow</p>
            <h2 className="section-heading">ご依頼の流れ</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flow.map((f, i) => (
              <div key={f.step} className="relative card text-center">
                <div className="text-4xl font-bold text-accent/20 mb-2">{f.step}</div>
                <h3 className="text-navy font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm">{f.desc}</p>
                {i < flow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-slate-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
            <h3 className="text-navy font-semibold mb-2">掲載内容について</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              当社は2026年5月設立の新設会社です。上記は対応可能な業務領域の一覧であり、
              制作実績・事例写真は現在準備中です。お客様のご要件に合わせて柔軟にご対応しますので、
              まずはお気軽にご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">ご依頼・ご相談はこちら</h2>
          <p className="text-slate-300 mb-8">
            業務内容・納期・データ形式など、どんな内容でもお気軽にご相談ください。
          </p>
          <Link href="/contact" className="btn-primary px-10 py-4">
            お問い合わせフォームへ
          </Link>
        </div>
      </section>
    </>
  )
}
