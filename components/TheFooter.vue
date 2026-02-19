<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-top">
        <div class="company-info">
          <!--<small class="catchphrase mb-1">SEO対策に強いWeb制作会社</small>-->
          <img src="~/assets/images/logo.svg" alt="MOTOKI LLC" class="h-6 w-auto relative right-1.5 mb-4"
            style="filter: invert(100%);">
          <div class="address-contact">
            <p>〒000-0000<br>
              東京都中央区銀座1丁目1番1号<br>
              <!--<a href="https://motoki-design.co.jp/" target="_blank">https://motoki-design.co.jp/</a>-->
            </p>
          </div>
        </div>

        <div class="footer-links">

          <div class="footer-menu">
            <div class="footer-menu-title font-bold mb-2">サイトマップ</div>
            <ul>
              <li>
                <NuxtLink to="/about">
                  私たちについて
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/service">
                  サービス
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/news">
                  お知らせ
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/info">
                  会社情報
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact">
                  お問い合わせ
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/privacy-policy">
                  個人情報保護方針
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="footer-menu">
            <div class="footer-menu-title font-bold mb-2">関連サービス</div>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">WordPress制作</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">ブログ</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">素材販売</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div class=" footer-bottom">
        <p class="copyright">
          <span lang="ja">©</span> 2021 ダミー株式会社
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #202020;
  padding: 40px 0 20px 0;
  width: 100%;
}

.footer-content {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: #fff;

  a {
    color: #fff;
    font-size: .9em;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #00bfff;
    }
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 20px;
  }

  .company-info {
    margin-bottom: 2em;

    h2 {
      margin-bottom: 10px;
      font-size: 24px;
    }

    .address-contact p {
      margin: 5px 0;
    }
  }

  .footer-links {
    display: flex;
    gap: 72px;
    margin-bottom: 2em;


    .footer-menu {
      h3 {
        margin-bottom: 10px;
        font-size: 18px;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 5px;
          margin-left: 5px;
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    margin-top: 20px;

    .copyright {
      font-size: 14px;
    }
  }

  /* レスポンシブ対応 */
  @media (max-width: 960px) {
    .footer-top {
      flex-direction: column;
    }

    .footer-links {
      flex-direction: column;
      gap: 2em;
    }


  }
}
</style>
