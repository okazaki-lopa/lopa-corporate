<template>
  <div>
    <Breadcrumb :breadcrumbsArray="breadcrumbsArray" />

    <section class="news-section">
      <div class="content news-content">
        <div class="news-header">
          <small>お知らせ</small>
          <h1>News</h1>
        </div>
        <ul v-if="newsList && newsList.length" class="news-list">
          <li v-for="news in newsList" :key="news.id" class="news-item">
            <NuxtLink :to="`/news/${news.id}`" class="news-link">
              <div class="news-date">{{ formatDate(news.publishedAt) }}</div>
              <div class="news-description">{{ news.title }}</div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'お知らせ一覧 | Jamstack構成のWebサイト制作',
  description: '最新のお知らせやニュースを掲載しています。サービスに関する最新情報をご確認ください。',
});

const route = useRoute();

const breadcrumbsArray = [
  {
    name: 'お知らせ一覧',
    path: route.path
  }
]

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
</script>


<style lang="scss" scoped>
.news-section .news-content {
  gap: 0;
  flex-direction: column;
}
</style>