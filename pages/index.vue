<template>
  <div>
    <!-- メインビジュアル -->
    <MainVisual />

    <!-- About us セクション -->
    <section class="about-us-section px-0 py-16 md:py-32">
      <div class="content columns">
        <div class="content-column-left">
          <small class="ml-[0.2em]">私たちについて</small>
          <h2>About us</h2>
          <p>培ったデザインと技術で<br class="br-sp">SEOに強いWebサイトを実現します。</p>
          <SecondaryButton to="/about" label="もっと見る" class="justify-start mr-auto" />
        </div>
        <div class="content-column-right">
          <img src="~/assets/images/about-us.jpg" alt="About us" />
        </div>
      </div>
    </section>

    <!-- 事業内容セクション -->
    <section class="services-section px-0 py-16 md:py-32">
      <div class="content">
        <small>サービス</small>
        <h2>Services</h2>
        <p>高速・セキュアなJamstack構成のサイトを提供します。</p>
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index">
            <div class="service-text">
              <div class="service-number">{{ index < 10 ? '0' + (index + 1) : index + 1 }}</div>
                  <div class="service-title">{{ service.title }}</div>
                  <p class="service-description">{{ service.description }}</p>
              </div>
            </div>
          </div>
          <SecondaryButton to="/service" label="もっと見る" class="mt-4 justify-end ml-auto" />
        </div>
    </section>

    <!-- お知らせ一覧 -->
    <section class="news-section px-0 py-16 md:py-32">
      <div class="content columns">
        <div class="content-column-left">
          <small class="ml-[0.2em]">お知らせ</small>
          <h2>News</h2>
        </div>
        <div class="content-column-right">
          <ul v-if="newsList && newsList.length" class="news-list">
            <li v-for="news in limitedNewsList" :key="news.id" class="news-item">
              <NuxtLink :to="`/news/${news.id}`">
                <div class="news-date">{{ formatDate(news.publishedAt) }}</div>
                <div class="news-description">{{ news.title }}</div>
              </NuxtLink>
            </li>
          </ul>
          <SecondaryButton to="/news" label="もっと見る" class="mt-4 justify-end ml-auto" />
        </div>
      </div>
    </section>

    <!-- 会社概要 -->
    <section class="company-info-section py-16 md:py-32">
      <div class="content columns">
        <div class="content-column-left">
          <small class="ml-[0.2em]">会社情報</small>
          <h2>COMPANY</h2>
        </div>
        <div class="content-column-right">
          <table>
            <tbody>
              <tr>
                <th>会社名</th>
                <td>ダミー株式会社</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>〒000-0000<br> 東京都中央区銀座1丁目1番1号</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>2021年1月1日</td>
              </tr>
              <tr>
                <th>代表者名</th>
                <td>山田 太郎</td>
              </tr>
              <tr>
                <th>資本金</th>
                <td>1,000,000円</td>
              </tr>
            </tbody>
          </table>
          <SecondaryButton to="/info" label="もっと見る" class="mt-4 justify-end ml-auto" />
        </div>
      </div>
    </section>

    <!-- お問い合わせ -->
    <section class="contact-section px-0 py-16 md:py-32 bg-[#3A4354] text-white">
      <div class="content columns">
        <div class="content-column-left">
          <small class="ml-[0.2em]">お問い合わせ</small>
          <h2>Contact</h2>
        </div>
        <div class="content-column-right">
          <p>
            Webサイト制作について、<br class="br-sp">お気軽にご相談ください。
          </p>
          <div>
            <PrimaryButton to="/contact" label="お問い合わせする" />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'top',
  title: 'Jamstackで構築する次世代の高速Webサイト',
  description: '高速表示とセキュアな環境を実現するJamstack構成のWebサイト制作サービス。SEO対策で集客力アップに貢献します。',
});
type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  { title: 'サーバー代0円', description: '' },
  { title: '超高速表示', description: '' },
  { title: '内部SEO最適化', description: '' },
  { title: 'アクセス負荷対応', description: '' },
  { title: '高セキュリティ', description: '' },
  { title: 'ヘッドレスCMS', description: '' }
];

type News = {
  id: string;
  publishedAt: string;
  title: string;
};

// 日付フォーマット関数を作成
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

const { data: newsList } = await useAsyncData('newsList', async () => {
  const { data } = await useMicroCMSGetList<News>({
    endpoint: 'news',
    queries: { fields: ['id', 'publishedAt', 'title'] },
  });

  return data.value?.contents || [];
});

const limitedNewsList = computed(() => {
  return newsList.value?.slice(0, 3) || [];
});
</script>

<style lang="scss" scoped>
section:nth-of-type(odd) {
  background-color: #f8f8f8;
}

section:nth-of-type(even) {
  background-color: #fff;
}

section:last-of-type {
  background-color: #3A4354;
}
</style>