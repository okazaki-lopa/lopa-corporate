<template>
  <div>
    <Breadcrumb :breadcrumbsArray="breadcrumbsArray" />

    <section class="company-info-section">
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
    name: '会社情報',
    path: route.path
  }
]
</script>


<style lang="scss" scoped></style>