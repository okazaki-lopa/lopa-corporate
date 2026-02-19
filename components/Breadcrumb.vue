<template>
  <nav aria-label="パンくずリスト">
    <ol class="breadcrumb">
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <template v-if="index === breadcrumbs.length - 1">
          <!-- 最後の要素は span タグで表示 -->
          <span>{{ crumb.name }}</span>
        </template>
        <template v-else>
          <!-- それ以外は通常リンク -->
          <NuxtLink :to="crumb.path || ''">{{ crumb.name }}</NuxtLink>
        </template>
      </li>
    </ol>
  </nav>

</template>

<script setup lang="ts">
// 親からページタイトルを受け取る
const props = defineProps<{
  breadcrumbsArray: Array<{ name: string; path: string }>
}>();


// パンくず
const breadcrumbs = computed(() => {
  return [
    { name: 'ホーム', path: '/' },
    ...props.breadcrumbsArray,
  ];
});
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  list-style: none;
  padding: 0;
  max-width: 1200px;
  margin: 0 auto 0;
  font-size: .8em;
  padding: 16px;
}

.breadcrumb li {
  align-items: center;
  display: inline-flex;
  position: relative;
}

.breadcrumb li a {
  align-items: center;
  color: inherit;
  display: inline-flex;
  text-decoration: none;
  white-space: nowrap;
}

.breadcrumb li:not(:last-child)::after {
  background-color: currentcolor;
  -webkit-clip-path: polygon(45% 9%, 75% 51%, 45% 90%, 30% 90%, 60% 50%, 30% 10%);
  clip-path: polygon(45% 9%, 75% 51%, 45% 90%, 30% 90%, 60% 50%, 30% 10%);
  content: "";
  display: block;
  height: 10px;
  margin: 0 0.5em;
  opacity: .8;
  width: 10px;
}
</style>
