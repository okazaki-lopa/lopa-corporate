<template>
  <div>
    <Breadcrumb :breadcrumbsArray="breadcrumbsArray" />

    <section class="privacy-policy-page">
      <div class="content">
        <small>個人情報保護方針</small>
        <h1 class="page-title">Privacy Policy</h1>

        <div class="policy-content">
          <p>
            ダミー株式会社は、お客様の個人情報を適切に取り扱うことをお約束します。
          </p>

          <div class="section-title">個人情報の利用目的</div>
          <p>
            お問い合わせフォームで収集する名前（ハンドルネーム）、メールアドレスは、質問への回答や必要な情報を連絡するために利用します。
          </p>

          <div class="section-title">個人情報の第三者提供</div>
          <p>以下の場合を除き、個人情報を第三者に提供することはありません。</p>
          <ul>
            <li>お客様の同意がある場合</li>
            <li>法令に基づく場合</li>
          </ul>

          <div class="section-title">Cookieの使用</div>
          <p>
            当サイトでは、Cookieを使用しています。Cookieは、広告配信やアクセス解析に使用されますが、個人情報は含まれません。ブラウザ設定でCookieを無効にすることが可能です。
          </p>

          <div class="section-title">アクセス解析と広告サービス</div>
          <p>
            当サイトはGoogleアナリティクスおよびGoogleアドセンスを使用しています。詳細は各サービスのプライバシーポリシーをご確認ください。
          </p>

          <div class="section-title">プライバシーポリシーの変更</div>
          <p>
            プライバシーポリシーは適宜見直し、最新の内容は本ページにて公開します。
          </p>

          <div class="section-title">お問い合わせ</div>
          <p>
            プライバシーポリシーに関するお問い合わせは、info@example.co.jpまでご連絡ください。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'プライバシーポリシー | Jamstack構成のWebサイト制作',
  description: '当社のプライバシーポリシーをご確認ください。お客様の個人情報を適切に取り扱い、保護するための方針を明示しています。',
});

const route = useRoute();

const breadcrumbsArray = [
  {
    name: '個人情報保護方針',
    path: route.path
  }
]
</script>

<style lang="scss" scoped>
.privacy-policy-page {
  .page-title {
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
  }

  .policy-content {
    line-height: 1.8;

    .section-title {
      font-size: 1.2em;
      font-weight: bold;
      margin-top: 2em;
      color: #333;
    }

    p,
    ul {
      margin-bottom: 2em;
      color: #666;
    }

    ul {
      list-style: disc;
      padding-left: 20px;
    }

    li {
      list-style: disc;
    }
  }
}
</style>