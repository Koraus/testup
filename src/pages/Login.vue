<template>
  <div>
    <Header />

    <section class="login">
      <div class="login__top"></div>

      <div class="login__bottom">
        <div class="login__bottom-left">
          <h1 class="login__title">Welcome to <br> Business Analytics Online</h1>
          <p class="login__paragraph">
            <span class="login__main-word">Business Analytics</span> — a new,
            convenient tool for managing and forecasting your business
            performance, which will help analyze your own finances and cash
            flows, visualize your reporting, business processes, KPI's
          </p>
          <ul class="login__list">
            <li>
              <h3>Interactive Reporting</h3>
              <p>
                In just a few clicks, you can connect your data from 1C, CRM
                (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka,
                ebay), Logistic (Nova Poshta), Google Analytics and many more
                systems that reflect different aspects of business activities.
              </p>
            </li>
            <li>
              <h3>Automated data updates</h3>
              <p>
                The application automatically updates and structures the data in
                just 60 seconds, saving you time and money.
              </p>
            </li>
            <li>
              <h3>Data Security</h3>
              <p>
                The Bank guarantees the safety of your personal data, ensuring
                their integrity and confidentiality.
              </p>
            </li>
          </ul>
        </div>
        <div class="login__bottom-right"><LoginForm  class="login-form-p" /></div>
      </div>
    </section>

    <Footer />
  </div>
</template>
<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "Login",
  components: {
    LoginForm,
  },
  data() {
    return {


    };
  },
  computed: {},
  methods: {},
};
</script>



<style lang="scss" scoped>
.login {
  box-sizing: border-box;

  &__top {
    background: no-repeat url("../assets/img/login-bg.png");
    width: 100%;
    padding-top: 457px;
    padding-left: 374px;
    padding-right: 374px;
  }
  &__title {
    text-align: left;
    color: var(--color_white_text);
    font-size: 55px;
    font-family: "Roboto", sans-serif;
    line-height: 157%;
    margin-bottom: 110px;
  }
  &__bottom {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-right: 374px;
    padding-bottom: 40px;
    padding-left: 374px;
    margin-top: -270px;
  }
  &__bottom-left {
  }

  &__paragraph {
    width: 680px;
    box-sizing: border-box;
    text-align: left;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  &__main-word {
    font-weight: 500;
  }
  &__list {
    box-sizing: border-box;
    text-align: left;
    max-width: 664px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 156.69%;
  }
  &__list > li {
    list-style: none;
    padding-left: 38px;
    position: relative;
  }
  &__list > li::before {
    content: url("../assets/img/tick-login.svg");
    position: absolute;
    left: 0;
  }
  &__list > li > h3 {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 16px;
  }
  .login-form-p {
    margin-left: 16px;
  }
}
</style>