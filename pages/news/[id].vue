<script setup lang="ts">
const route = useRoute()
const contentId = route.params.id.toString()

type News = {
  id: string,
  publishedAt: Date,
  title: string,
  content: string
}

// 日付フォーマット関数を作成
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

// `useAsyncData` を使用して SSR 時にデータを取得
const { data: newsDetail } = await useAsyncData(`newsDetail-${contentId}`, async () => {
  const { data } = await useMicroCMSGetListDetail<News>({
    endpoint: 'news',
    contentId,
    queries: { fields: ['id', 'publishedAt', 'title', 'content'] },
  });

  return data.value || null;
});

const breadcrumbsArray = [
  {
    name: 'お知らせ一覧',
    path: '/news'
  },
  {
    name: newsDetail?.value?.title,
    path: route.path
  }
]

const description = newsDetail.value?.content.replace(/<[^>]+>/g, '').slice(0, 150);

useHead({
  title: newsDetail.value?.title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: newsDetail.value?.title },
    { property: 'og:description', content: description },
    //{ property: 'og:image', content: 'https://example.com/path/to/image.jpg' },
  ],
  link: [
    { rel: 'canonical', href: `https://example.com/news/${contentId}` }
  ]
});
</script>

<template>
  <div>
    <Breadcrumb :breadcrumbsArray="breadcrumbsArray" />

    <div class="news-detail">
      <h1 class="news-title">{{ newsDetail?.title }}</h1>
      <time class="news-date">{{ formatDate(newsDetail?.publishedAt) }}</time>
      <section class="news-content" v-html="newsDetail?.content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 全体レイアウト */
.news-detail {
  max-width: 960px;
  /* コンテンツの最大幅を設定 */
  margin: 0 auto;
  /* 水平方向中央揃え */
  padding: 60px 60px;
  background-color: #fff;

  .news-title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    word-break: break-word;
  }

  .news-date {
    display: block;
    text-align: center;
    font-size: 14px;
    color: #999;
    margin-bottom: 40px;
  }

  .news-content {
    font-size: 18px;
    line-height: 1.8;
    word-wrap: break-word;
    /* テキストの折り返し */
    overflow-wrap: break-word;


    p {
      margin-bottom: 20px;
    }

    img {
      max-width: 100%;
      /* 画像が親要素の幅を超えないように */
      height: auto;
      margin: 20px 0;
      border-radius: 8px;
      display: block;
    }

    h2,
    h3 {
      font-size: 28px;
      margin: 30px 0 10px;
      font-weight: bold;
    }

    ul {
      list-style: disc;
      padding-left: 20px;

      li {
        margin-bottom: 10px;
      }
    }
  }
}

@media (max-width: 768px) {
  .news-detail {
    padding: 60px 16px;
  }
}
</style>