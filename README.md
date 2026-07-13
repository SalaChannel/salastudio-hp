# SalaStudio HP

個人開発ブランド「SalaStudio」の公式サイトです。

## 概要

アプリ開発事業（Cue 等）とミックス受注事業の 2 本柱を紹介する Web サイトです。  
Next.js（App Router）+ TypeScript + Tailwind CSS で構成し、Vercel へのデプロイを前提としています。

## ページ構成

| パス | 内容 |
| --- | --- |
| `/` | トップ（Apps / Mix の左右分割導線） |
| `/apps` | プロダクト一覧 |
| `/cue` | Cue 紹介 |
| `/mix` | ミックス受注 |
| `/privacy` | プライバシーポリシー |
| `/terms` | 利用規約 |
| `/tokushoho` | 特定商取引法に基づく表記 |
| `/support` | サポート窓口 |

## 開発

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## ビルド

```bash
npm run build
npm start
```
