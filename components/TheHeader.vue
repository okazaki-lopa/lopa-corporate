<template>
  <header :class="headerClass" class="header">
    <div class="container">
      <component :is="isHomePage ? 'h1' : 'div'" class="logo">
        <!--<nuxt-link to="/">MOTOKI LLC</nuxt-link>-->
        <nuxt-link to="/">
          <img src="~/assets/images/logo.svg" alt="MOTOKI LLC" class="h-6 w-auto relative top-1">
        </nuxt-link>
      </component>
      <nav class="pc-menu">
        <ul>
          <li><nuxt-link to="/about">私たちについて</nuxt-link></li>
          <li><nuxt-link to="/service">サービス</nuxt-link></li>
          <li><nuxt-link to="/news">お知らせ</nuxt-link></li>
          <li><nuxt-link to="/info">会社情報</nuxt-link></li>
        </ul>
        <PrimaryButton to="/contact" label="お問い合わせ" :showIcon="false" />
      </nav>
      <div class="hamburger" @click="toggleMenu">
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </div>
    </div>
    <NavigationDrawer :isOpen="isMenuOpen" @close="toggleMenu" />
  </header>
</template>

<script setup lang="ts">

// isMenuOpenの状態管理
const isMenuOpen = ref(false);

// 現在のページがトップページかどうかを判定
const route = useRoute();
const isHomePage = computed(() => route.path === '/');

// スクロール量を管理
const isScrolled = ref(false);

// スクロールイベントの処理
const handleScroll = () => {
  if (window.scrollY >= 900) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

// ヘッダーのクラスを計算
const headerClass = computed(() => ({
  'header-transparent': isHomePage.value && !isScrolled.value, // トップページかつスクロール位置が960px未満の場合のみ透明
}));

// メニューを開閉する関数
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// マウント時にスクロールイベントを登録し、アンマウント時に解除
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 0;
  z-index: 1000;
  background-color: #fff;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .container {
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: inherit;
  }

  .logo a {
    color: #333;
    text-decoration: none;
    font-size: 32px;
    line-height: 1.2;
    font-weight: 700;
  }

  /* PC用メニュー */
  .pc-menu {
    display: none;

    ul {
      display: flex;
      gap: 2em;
      list-style: none;
      margin: 0;
      padding: 0;

      li a {
        text-decoration: none;
        color: #333;
        transition: color 0.3s;

        &:hover {
          color: #007bff;
        }
      }
    }
  }

  /* ハンバーガーアイコン（モバイル用） */
  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    z-index: 1001;

    span {
      width: 25px;
      height: 2px;
      background-color: #333;
      transition: all 0.3s ease;
    }

    span.open:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    span.open:nth-child(2) {
      opacity: 0;
    }

    span.open:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }

  /* トップページのヘッダーを半透明に */
  &.header-transparent {
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: none;

    /* トップページは高さ確保しない */
    &::after {
      display: none;
    }
  }

  /* PC用レイアウト */
  @media (min-width: 960px) {
    .hamburger {
      display: none;
    }

    .pc-menu {
      display: flex;
      align-items: center;
      gap: 2em;
    }
  }
}
</style>