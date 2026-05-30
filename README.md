# 株式会社SOHO コーポレートサイト

建築図面・CAD/BIM制作支援会社「株式会社SOHO」の公式ホームページ。  
Next.js 16 + Tailwind CSS で実装。

---

## ページ構成

| パス | ページ名 |
|------|---------|
| `/` | トップページ |
| `/services` | サービス詳細 |
| `/capabilities` | 対応可能業務 |
| `/company` | 会社概要 |
| `/contact` | お問い合わせ |

---

## セットアップ方法

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev
# → http://localhost:3000

# 本番ビルド
npm run build

# 本番サーバー起動
npm start
```

---

## Vercel デプロイ

1. GitHub にこのリポジトリを push する
2. [vercel.com](https://vercel.com) でリポジトリをインポート
3. Framework: **Next.js** を選択（自動検出）
4. Deploy ボタンを押すだけで完了

リンクは Next.js の `<Link>` コンポーネントを使用しているため、Vercel 上でもクライアントサイドナビゲーションが正常に動作します。

---

## 独自ドメイン設定

1. Vercel ダッシュボード → Settings → Domains
2. 取得したドメイン（例: `soho-arc.jp`）を追加
3. ドメインレジストラの DNS 設定で以下を追加:
   - `A レコード`: `76.76.21.21`（Vercel）
   - `CNAME`: `www` → `cname.vercel-dns.com`
4. `app/layout.tsx` の `metadataBase` を実際のドメインに変更

```ts
metadataBase: new URL('https://soho-arc.jp'),
```

---

## SSL 対応

Vercel にデプロイすると **自動的に SSL（HTTPS）** が有効になります（Let's Encrypt）。  
独自ドメイン設定後も同様に自動発行されます。

---

## 法人メール設定

独自ドメイン取得後、以下のサービスを推奨:

| サービス | 特徴 |
|---------|------|
| Google Workspace | Gmail UI、月額680円〜 |
| Microsoft 365 | Outlook、月額750円〜 |
| Zoho Mail | 無料プランあり |

DNS の `MX レコード` を各サービスの指定値に変更するだけで設定完了。

---

## お問い合わせフォームの本番接続

現在はモック実装（送信後に完了画面を表示するのみ）。  
本番環境に接続する場合は `components/ContactForm.tsx` の `handleSubmit` を修正:

### Formspree の場合

```tsx
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ company: form.company, name: form.name, email: form.email, ... }),
})
if (res.ok) setStatus('sent')
else setStatus('error')
```

### WordPress / Wix に移行する場合

各プラットフォームの問い合わせフォームプラグインに差し替えてください。  
フォーム項目（会社名・氏名・メール・電話・相談内容・添付）は一致させるとデータ移行が容易です。

---

## 表示速度改善ポイント

1. **フォント**: `app/layout.tsx` で Google Fonts を `preconnect` 付きで読み込み済み
2. **画像**: 実際の写真を追加する際は `next/image` コンポーネントを使用（自動最適化）
3. **静的生成**: 全ページが Static Generation（SSG）で出力済み、CDN キャッシュが効く
4. **Tailwind CSS**: 使用クラスのみを本番バンドルに含める（Purge 設定済み）

---

## ファイル構成

```
.
├── app/
│   ├── layout.tsx          # 全ページ共通レイアウト（Header/Footer）
│   ├── globals.css         # グローバルスタイル
│   ├── page.tsx            # トップページ
│   ├── services/page.tsx   # サービスページ
│   ├── capabilities/page.tsx # 対応可能業務
│   ├── company/page.tsx    # 会社概要
│   └── contact/page.tsx    # お問い合わせ
├── components/
│   ├── Header.tsx          # ナビゲーション（スマホ対応）
│   ├── Footer.tsx          # フッター
│   └── ContactForm.tsx     # お問い合わせフォーム（Client Component）
├── next.config.js
├── tailwind.config.ts
└── package.json
```
