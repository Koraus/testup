<template>
  <div>
    <Header />

    <section class="login">
      <div class="login__top"></div>

      <div class="login__bottom _container">
        <div class="login__bottom-left">
          <h1 class="login__title">
            Welcome to <br />
            Business Analytics Online
          </h1>
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
        <div class="login__bottom-right">
          <LoginForm class="login-form-p" />
        </div>
      </div>
    </section>

    <Footer class="_container" />
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
    return {};
  },
  computed: {},
  methods: {},
};
</script>



<style lang="scss" scoped>
.login {
  box-sizing: border-box;

  &__top {
    background: url("../assets/img/login-bg.png") no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 457px;
  }
  &__title {
    text-align: left;
    color: var(--color_white_text);
    font-size: 55px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 157%;
    margin-bottom: 106px;
    padding-inline-start: 0px;
  }
  &__bottom {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 13px;
    margin-top: -277px;
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
    line-height: 156.69%;
    margin-bottom: 30px;
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
    padding-inline-start: 0px;
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
    margin-bottom: 50px;
  }

  @media (max-width: 1400px) {
    .login {
      &__bottom {
        flex-direction: column;
      }
      &__bottom-left {
        margin-bottom: 20px;
      }
    }
  }
  @media (max-width: 801px) {
    .login {
      &__bottom {
        margin-top: -390px;
      }
      &__title {
        margin-bottom: 10px;
      }
      &__bottom-left {
        width: 400px;
      }
      &__paragraph {
        width: 400px;
      }
    }
  }
  @media (max-width: 478px) {
    .login {
      &__top {
        padding-top: 300px;
      }
      &__bottom {
        margin-top: -280px;
        padding: 20px;
      }
      &__title {
        margin-bottom: 70px;
        font-size: 40px;
      }
      &__bottom-left {
        width: 100%;
      }
      &__paragraph {
        width: 100%;
      }
      &__list {
        padding-left: 10px;
      }
    }
  }
}
</style>