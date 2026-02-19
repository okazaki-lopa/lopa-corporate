<template>
  <div>
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// リアクティブにメタ情報を取得
const title = computed(() => route.meta?.title || 'MOTOKI LLC')
const description = computed(() => route.meta?.description || 'Web制作会社')
const fullPath = computed(() => route.fullPath || '')

// SEO メタ情報を設定する関数
const updateHead = () => {
  useHead({
    title: title.value,
    meta: [
      { name: 'description', content: `${description.value}` },
      { property: 'og:title', content: `${title.value}` },
      { property: 'og:description', content: `${description.value}` },
      { property: 'og:image', content: '/ogp.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'canonical', href: fullPath.value },
    ]
  })
}

// 初期設定
updateHead()

// ルートが変わったときにも更新
watch(route, () => {
  updateHead()
})
</script>
