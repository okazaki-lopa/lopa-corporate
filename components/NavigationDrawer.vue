<template>
  <div :class="{ opened: isOpen }" class="p-spMenu">
    <ul>
      <li><nuxt-link to="/about" @click="closeMenu">私たちについて</nuxt-link></li>
      <li><nuxt-link to="/service" @click="closeMenu">サービス</nuxt-link></li>
      <li><nuxt-link to="/news" @click="closeMenu">お知らせ</nuxt-link></li>
      <li><nuxt-link to="/info" @click="closeMenu">会社情報</nuxt-link></li>
    </ul>
    <PrimaryButton to="/contact" label="お問い合わせ" :showIcon="false" @click="closeMenu" />
  </div>
</template>


<script setup lang="ts">
// Propsの定義
defineProps<{
  isOpen: boolean;
}>();

// Emitsの定義
const emit = defineEmits<{
  (e: 'close'): void;
}>();

// メニューを閉じる関数
const closeMenu = () => {
  emit('close');
};
</script>

<style lang="scss" scoped>
.p-spMenu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transform: translateX(100%);
  opacity: 0;
  transition: transform 0.45s ease, opacity 0.45s ease;
  gap: 1em;
  flex-direction: column;
  text-align: center;

  &.opened {
    transform: translateX(0);
    opacity: 1;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

    li a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
      transition: color 0.3s;

      &:hover {
        color: #007bff;
      }
    }
  }
}
</style>
