import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'サービス',
  description:
    '株式会社SOHOのサービス：建築図面作成支援、CAD・BIMデータ作成、点群データ・測量支援、土木構造物関連支援の詳細をご紹介します。',
}

const services = [
  {
    id: 'architectural',
    badge: '建築',
    title: '建築図面作成支援',
    lead: '設計段階から施工段階まで、あらゆる建築図面の制作をトータルサポートします。',
    items: [
      {
        name: '建築設計図',
        desc: '平面図・立面図・断面図・配置図など、設計業務に必要な建築設計図の作成を支援します。',
      },
      {
        name: '施工図',
        desc: '実際の施工に必要な詳細な施工図の作成をサポートします。現場の要求に応じた精度で対応します。',
      },
      {
        name: '2D CAD図面',
        desc: 'AutoCAD・JW-CAD等を用いた2D図面の作成・修正・トレースに対応します。',
      },
      {
        name: '図面トレース',
        desc: '既存の手書き図面やスキャン図面をCADデータへ変換するトレース作業を承ります。',
      },
    ],
  },
  {
    id: 'cad-bim',
    badge: 'BIM',
    title: 'CAD・BIMデータ作成',
    lead: 'BIMモデルの作成から各種図面データの管理まで、デジタル化を強力にサポートします。',
    items: [
      {
        name: 'BIMモデル作成',
        desc: 'Revitをはじめとするソフトウェアを想定したBIMモデルの作成・整備を行います。',
      },
      {
        name: '各種図面データ作成',
        desc: 'BIMモデルから各種図面データを生成・整理します。2D・3D双方に対応します。',
      },
      {
        name: '図面・データ管理支援',
        desc: '図面ファイルの整理・バージョン管理・納品データ整備など、管理業務の効率化を支援します。',
      },
    ],
  },
  {
    id: 'pointcloud',
    badge: '測量',
    title: '点群データ・測量関連支援',
    lead: '現況の正確な把握から3Dデータ化まで、最新技術を活用した測量・データ取得を支援します。',
    items: [
      {
        name: '点群データ取得',
        desc: '3Dスキャナー等を活用した建築物・構造物の点群データ取得作業を支援します。',
      },
      {
        name: '既存建築物のデータ化',
        desc: '竣工図がない建物や改修が繰り返された建物を、現地計測によりデジタルデータ化します。',
      },
      {
        name: 'BIMモデル化',
        desc: '点群データをもとにRevit等でBIMモデルを作成します。リノベーション・改修計画に活用できます。',
      },
    ],
  },
  {
    id: 'civil',
    badge: '土木',
    title: '土木構造物関連支援',
    lead: '建築にとどまらず、土木分野においても図面・モデル作成支援を提供します。',
    items: [
      {
        name: '土木構造物の図面作成',
        desc: '橋梁・擁壁・道路構造物などの土木施設に関する設計図・施工図の作成を支援します。',
      },
      {
        name: 'モデル作成支援',
        desc: '土木構造物の3Dモデル化・BIMデータ整備を支援します。',
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-navy py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>/</span>
            <span className="text-white">サービス</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">サービス</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            建築図面制作からBIMモデル・点群データ活用まで、設計・施工現場に必要な制作支援を幅広く提供します。
          </p>
        </div>
      </section>

      {/* Services */}
      <div className="bg-white">
        {services.map((svc, idx) => (
          <section
            key={svc.id}
            id={svc.id}
            className={`py-20 ${idx % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full">
                  {svc.badge}
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <h2 className="text-3xl font-bold text-navy mb-3">{svc.title}</h2>
              <p className="text-slate-500 text-lg mb-10 max-w-2xl">{svc.lead}</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {svc.items.map((item) => (
                  <div key={item.name} className="card group">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <h3 className="text-navy font-semibold">{item.name}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">サービスについてご相談ください</h2>
          <p className="text-slate-300 mb-8">
            ご要件をヒアリングの上、最適な対応方法をご提案します。まずはお気軽にお問い合わせください。
          </p>
          <Link href="/contact" className="btn-primary px-10 py-4">
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </>
  )
}
