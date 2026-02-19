# Nuxt.jsを使用したコーポレートサイトのテンプレート
Nuxt3 + microCMSで構築した企業向けのホームページテンプレートです。

## 動作環境
Node.js 18 以上

## 環境変数の設定
ルート直下に`.env`ファイルを作成し、下記の情報を入力してください。

```
# microCMSのAPIキー
MICRO_CMS_API_KEY=xxxxxxxxxx

# microCMSのドメイン名
MICRO_CMS_DOMAIN=xxxxxxxxxx

# GoogleアナリティクスID
GOOGLE_ANALYTICS_ID=xxxxxxxxxx

# GoogleフォームのURL
GOOGLE_FORM_URL=xxxxxxxxxx

# GoogleフォームのエントリーID（お名前）
GOOGLE_FORM_ENTRY_NAME=entry.xxxxxxxxxx

# GoogleフォームのエントリーID（メールアドレス）
GOOGLE_FORM_ENTRY_EMAIL=entry.xxxxxxxxxx

# GoogleフォームのエントリーID（お問い合わせ内容）
GOOGLE_FORM_ENTRY_COMMENT=entry.xxxxxxxxxx
```

`MICRO_CMS_API_KEY`  
microCMS 管理画面の「サービス設定 > API キー」から確認することができます。

`MICRO_CMS_DOMAIN`  
microCMS 管理画面の URL（https://xxxxxxxx.microcms.io）の xxxxxxxx の部分です。

`Googleアナリティクス`
Googleアナリティクスの管理のデータストリームの中の測定ID（G-xxxxxxxx）の部分です。

`GoogleフォームのURL`
Googleフォームの URL（https://docs.google.com/forms/d/e/xxxxxxxxxx/formResponse）をご記載くださいませ。

`GoogleフォームのエントリーID`
Googleフォームのソースコードを開いて、entry.で検索すると各入力欄にID（entry.xxxxxxxxxx）が見つかります。その部分です。
名前とメールアドレス、お問い合わせ内容の3つに対応しております。


## 開発の仕方

1. パッケージのインストール

```bash
npm install
```

2. 開発環境の起動

```bash
npm run dev
```

3. 開発環境へのアクセス  
   [http://localhost:3000](http://localhost:3000)にアクセス
