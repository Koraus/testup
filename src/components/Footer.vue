<template>
  <div class="footer">
    <div class="footer__top">
      <img class="footer__logo" src="../assets/img/logo-footer.svg" alt="" />
      <ul class="footer__list-items">
        <li><a href="">Terms & Conditions</a></li>
        <li><a href="">Privacy</a></li>
        <li><a href="">Notice at Collection</a></li>
        <li><a href="">CA Privacy Hub</a></li>
        <li><a href="">Contact Us</a></li>
        <li><a href="">Sitemap</a></li>
      </ul>
    </div>
    <hr class="footer__line" />
    <p class="footer__copyright-text">
      Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
      Opportunity Lender.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  box-sizing: border-box;
  background: var(--color_HF);
  width: 100%;
  min-height: 175px;
  display: flex;
  flex-direction: column;
  color: var(--color_white_text);
  padding-top: 30px;
  padding-bottom: 30px;

  &__top {
    display: flex;
    justify-content: space-between;
  }
  &__logo {
    max-width: fit-content;
  }
  &__list-items {
    display: flex;
  }
  &__list-items > li {
    list-style: none;
    margin-right: 10px;
    margin-left: 10px;
  }

  &__list-items > a:visited,
  a {
    text-decoration: none;
    color: var(--color_white_text);
  }
  &__line {
    width: 100%;
    margin-top: 18px;
  }

  &__copyright-text {
    text-align: left;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 156.69%;
    margin-top: 23px;
  }

  @media (max-width: 801px) {
    .footer {
      &__top {
        flex-direction: column;
      }
      &__list-items {
        flex-direction: column;
        font-size: 24px;
        line-height: 157%;
      }
    }
  }
}
</style>