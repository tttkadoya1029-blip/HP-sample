import Link from 'next/link'
import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    '株式会社SOHOへのお問い合わせ。建築図面制作・CAD/BIM支援・点群データ活用など、どんなご相談でもお気軽にどうぞ。',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>/</span>
            <span className="text-white">お問い合わせ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">お問い合わせ</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            図面制作の外注・BIM支援・点群データ活用など、どんなご相談でもお気軽にどうぞ。
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Info */}
            <div className="md:col-span-1 space-y-6">
              <div>
                <h2 className="text-navy font-bold text-xl mb-4">お問い合わせ先</h2>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-slate-700 mb-0.5">メール</p>
                      <a href="mailto:info@soho-arc.jp" className="text-accent hover:underline">
                        info@soho-arc.jp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-slate-700 mb-0.5">所在地</p>
                      <p>大阪市福島区<br />海老江五丁目3番13-301号</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-semibold text-navy block mb-1">返信について</span>
                  通常2〜3営業日以内にご返信いたします。
                  お急ぎの場合はメールにて直接ご連絡ください。
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
