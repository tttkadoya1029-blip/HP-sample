import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://soho-arc.jp'),
  title: {
    default: '株式会社SOHO | 建築図面・CAD/BIM制作支援',
    template: '%s | 株式会社SOHO',
  },
  description:
    '株式会社SOHOは、建築図面作成・CAD/BIMデータ作成・点群データ活用・BIMモデル作成を通じて、設計・施工現場の業務効率化を支援します。大阪市福島区に所在。',
  keywords: [
    '建築図面', 'CAD', 'BIM', '点群データ', '施工図', '設計図面',
    'BIMモデル', '建築支援', 'アウトソーシング', '大阪', 'SOHO',
  ],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://soho-arc.jp',
    siteName: '株式会社SOHO',
    title: '株式会社SOHO | 建築図面・CAD/BIM制作支援',
    description:
      '建築図面制作、CAD/BIMデータ作成、点群データ活用を通じて設計・施工現場を支援します。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社SOHO | 建築図面・CAD/BIM制作支援',
    description: '建築図面制作、CAD/BIMデータ作成、点群データ活用を通じて設計・施工現場を支援します。',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://soho-arc.jp' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
