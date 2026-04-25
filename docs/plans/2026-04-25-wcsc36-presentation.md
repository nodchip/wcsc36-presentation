# WCSC36 Presentation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 第36回世界コンピュータ将棋選手権 1 日目お昼休憩の特別講演スライドを Slidev で作成し、GitHub Pages で公開できる状態にする。

**Architecture:** `coding-agent-shogi-ai-talk` の Slidev 構成を土台として再利用し、`slides.md` と必要アセットを WCSC36 用に差し替える。GitHub Actions で `npm run build:pages` を実行し、`dist/` を Pages artifact として公開する。

**Tech Stack:** Slidev, Vue custom layouts/components, CSS, npm, GitHub Pages / GitHub Actions

---

### Task 1: Slidev 土台を移植する

**Files:**
- Copy from: `C:\home\nodchip\coding-agent-shogi-ai-talk`
- Create/Modify: `package.json`, `package-lock.json`, `README.md`, `eslint.config.js`, `scripts/build-pages.mjs`
- Create/Modify: `layouts/`, `components/`, `styles/`, `setup/`, `public/assets/`

**Step 1:** 再利用元から Slidev 実行に必要なファイルとディレクトリをコピーする。

**Step 2:** `package.json` の `name` を `wcsc36-presentation` に変更する。

**Step 3:** `README.md` を WCSC36 用に更新する。

**Step 4:** `npm run build` で土台が壊れていないことを確認する。

### Task 2: スライド構成を WCSC36 用に差し替える

**Files:**
- Modify: `slides.md`
- Reuse: `public/assets/*`

**Step 1:** 再利用元スライド前半から、自己紹介、将棋 AI 概要、ゲーム木、探索と評価、NNUE、HalfKP、SFNN のページを抽出する。

**Step 2:** Coding Agent 固有の後半ページを削除する。

**Step 3:** ミニマックス法、アルファ・ベータ法、全結合ニューラルネットワーク、PUCT、GPU 評価関数、定跡、新ペタショック定跡のページを追加する。

**Step 4:** `npm run build` で Markdown とレイアウトの破綻を確認する。

### Task 3: GitHub Pages 公開設定を追加する

**Files:**
- Create: `.github/workflows/deploy.yml`
- Modify: `README.md`

**Step 1:** GitHub Actions の Pages デプロイ workflow を追加する。

**Step 2:** README にローカル確認、Pages ビルド、PDF export の手順を記載する。

**Step 3:** `npm run build:pages` で Pages 用 base path のビルドを確認する。

### Task 4: 仕上げ検証を行う

**Files:**
- Verify: entire project

**Step 1:** `npm run lint` を実行する。

**Step 2:** `npm run build` を実行する。

**Step 3:** `npm run build:pages` を実行する。

**Step 4:** 検証結果と残タスクを報告する。
