<template>
  <div>
    <Breadcrumb :breadcrumbsArray="breadcrumbsArray" />

    <section class="about-us-section">
      <div class="content columns">
        <div class="content-column-left">
          <small class="ml-[0.2em]">私たちについて</small>
          <h2>About us</h2>
          <p>培ったデザインと技術で<br class="br-sp">SEOに強いWebサイトを実現します。</p>
        </div>
        <div class="content-column-right">
          <img src="~/assets/images/about-us.jpg" alt="About us" />
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
    name: '私たちについて',
    path: route.path
  }
]
</script>


<style lang="scss" scoped></style>