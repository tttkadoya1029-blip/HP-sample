'use client'

import Link from 'next/link'
import { useState } from 'react'

type FormState = {
  company: string
  name: string
  email: string
  phone: string
  content: string
  file: File | null
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    company: '', name: '', email: '', phone: '', content: '', file: null,
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!form.company.trim()) e.company = '会社名を入力してください'
    if (!form.name.trim()) e.name = 'お名前を入力してください'
    if (!form.email.trim()) e.email = 'メールアドレスを入力してください'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = '正しいメールアドレスを入力してください'
    if (!form.content.trim()) e.content = 'ご相談内容を入力してください'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStatus('sending')
    // TODO: 実際のフォーム送信先（Formspree等）URLを設定
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
  }

  const inputClass = (key: keyof FormState) =>
    `w-full rounded-lg border px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/40 transition ${
      errors[key] ? 'border-red-400' : 'border-slate-200 hover:border-slate-300'
    }`

  if (status === 'sent') {
    return (
      <div className="card text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-navy font-bold text-xl mb-2">送信が完了しました</h3>
        <p className="text-slate-500 text-sm mb-6">
          お問い合わせありがとうございます。<br />2〜3営業日以内にご返信いたします。
        </p>
        <Link href="/" className="btn-outline">トップページへ戻る</Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
            会社名 <span className="text-red-500">*</span>
          </label>
          <input
            id="company" type="text" placeholder="株式会社〇〇"
            value={form.company}
            onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
            className={inputClass('company')}
          />
          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            id="name" type="text" placeholder="山田 太郎"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            className={inputClass('name')}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            id="email" type="email" placeholder="example@company.co.jp"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className={inputClass('email')}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">電話番号</label>
          <input
            id="phone" type="tel" placeholder="06-0000-0000"
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            className={inputClass('phone')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-1.5">
          ご相談内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="content" rows={6}
          placeholder="ご依頼内容・ご相談内容をご記入ください（図面の種類、数量、納期など）"
          value={form.content}
          onChange={(e) => setForm((p) => ({ ...p, content: e.target.value }))}
          className={`w-full rounded-lg border px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/40 transition resize-none ${
            errors.content ? 'border-red-400' : 'border-slate-200 hover:border-slate-300'
          }`}
        />
        {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">添付ファイル（任意）</label>
        <div className="border-2 border-dashed border-slate-200 rounded-lg p-4 text-center hover:border-accent/40 transition-colors">
          <input
            type="file" id="file" className="hidden"
            onChange={(e) => setForm((p) => ({ ...p, file: e.target.files?.[0] ?? null }))}
            accept=".pdf,.dwg,.dxf,.rvt,.jpg,.jpeg,.png,.zip"
          />
          <label htmlFor="file" className="cursor-pointer">
            <svg className="w-8 h-8 text-slate-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            {form.file ? (
              <span className="text-sm text-accent font-medium">{form.file.name}</span>
            ) : (
              <span className="text-sm text-slate-400">
                クリックしてファイルを選択<br />
                <span className="text-xs">PDF / DWG / DXF / RVT / 画像 / ZIP（10MB以内）</span>
              </span>
            )}
          </label>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit" disabled={status === 'sending'}
          className="w-full py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark disabled:opacity-60 transition-colors text-base"
        >
          {status === 'sending' ? '送信中...' : '送信する'}
        </button>
        <p className="text-slate-400 text-xs text-center mt-3">
          <span className="text-red-500">*</span> は必須項目です
        </p>
      </div>
    </form>
  )
}
