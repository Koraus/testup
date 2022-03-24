<template>
  <div id="loginForm">
    <div class="login-form">
      <label for="name" class="login-form__label" >
        <span class="login-form__label-text"
        > Name </span>
        <input class="login-form__input" type="text"  placeholder="Enter you name"  v-model="username" />
        <span class="login-form__error" v-if="login" > incorrect name or password </span>
      </label>
      <label for="password" class="login-form__label">
        <span class="login-form__label-text" > Password</span>
        <input
          class="login-form__input"
          placeholder="Enter you password"
          type="password"
          v-model="password"
          @keydown.enter="authorization()"
          
        />
         <span class="login-form__error" v-if="login"> incorrect name or password </span>

         
      </label>
      <button class="login-form__btn" @click="authorization()">LOGIN</button>
      <div>
        <a href="" class="login-form__forgot-link"> Forgot Password</a>
      </div>
      <button class="login-form__register-btn">Register now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",

  data() {
    return {
      login: false,
      password: "",
      username: "",
      registeredUsers: { user: "Admin", password: "12345" },
    };
  },
  props: {},
  emits: {},

  methods: {
    authorization() {
      this.login = true;
      if (
        this.password === this.registeredUsers.password &&
        this.username === this.registeredUsers.user
      ) {
        this.$router.push("Todo").then(() => window.scrollTo(0, 0));
        localStorage.isAuthorized = true;
        localStorage.username = this.username;
      }
      // this.$router.push("Todo").then(() => window.scrollTo(0, 0));
    },
  },
};
</script>

<style lang="scss" >
.login-form {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  width: 481px;
  height: 464px;
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
  background: white;

  &__label-text {
    display: block;
    text-align: left;
    margin-bottom: 7px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 18px;
  }
  &__input {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 40px;
    border: 1px solid #9a9a9a;
    color: #333333;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 15px;
    padding-left: 15px;
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  &__btn {
    width: 100%;
    min-height: 53px;
    background: var(--color_btn);
    color: var(--color_white_text);
    border: none;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 25px;
    margin-bottom: 20px;
    cursor: pointer;
  }
  &__btn:hover {
    background: var(--color_white_text);
    color: var(--color_btn);
    border: 2px solid var(--color_btn);
  }

  &__forgot-link {
    color: #056dae;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 20px;
    text-decoration: none;
  }

  &__register-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    border: none;
    background: #f6f6f6;
    width: 100%;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 25px;
    text-decoration: none;
    color: var(--color_HF);
    padding-bottom: 17px;
    padding-top: 17px;
    cursor: pointer;
  }

  &__error{
      position: absolute;
      left: 0;
      bottom: 10px;
      padding-left: 19px;
      color: var(--color_error);
  }
    &__error::before{
        content: url("../assets/img//errorX.svg");
        position: absolute;
        left: 1px;
    }
  &__label{
      position: relative;
  }
}
@media (max-width: 574px) {
  .login-form {
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    width: 380px;
    height: 464px;
  }
}
@media (max-width: 478px) {
  .login-form {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    width: 320px;
    height: 464px;
  }
}
</style>



