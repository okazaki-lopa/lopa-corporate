<template>
  <section class="relative w-full h-[85vh] overflow-hidden flex justify-start bg-gray-100 py-16 px-0">
    <div class="mv-area relative z-10 text-left max-w-1280 w-full mx-auto flex flex-col">
      <div class="max-md:text-3xl text-5xl font-bold mb-4 leading-tight">
        モダンなウェブ体験を<br>手軽に実現</div>
      <p class="text-lg mb-8 leading-relaxed ">
        Jamstack構成 + Nuxt3 + microCMSで<br class="br-sp">圧倒的パフォーマンスを実現
      </p>
      <PrimaryButton to="/contact" label="お問い合わせする" />
    </div>
    <div class="absolute top-0 left-0 w-full h-full">
      <img src="~/assets/images/main-visual-sp.png" alt="Background" class="w-full md:hidden" />
      <img src="~/assets/images/main-visual.png" alt="Background" class="hidden md:block" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.mv-area {
  max-width: 1280px;
  width: 100%;
  margin: auto;
}

@media (max-width: 768px) {
  .mv-area {
    margin: 0 16px;
    align-self: end;
  }
}
</style>