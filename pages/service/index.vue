<template>
  <div>
    <Breadcrumb :breadcrumbsArray="breadcrumbsArray" />

    <section class="services-section">
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
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: '会社概要 | Jamstack構成のWebサイト制作',
  description: '当社の企業情報や理念をご紹介します。Jamstack技術を駆使した高性能なWebサイト制作でビジネスの成功を支援します。',
});

const route = useRoute();

const breadcrumbsArray = [
  {
    name: 'サービス',
    path: route.path
  }
]

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
</script>


<style lang="scss" scoped></style>