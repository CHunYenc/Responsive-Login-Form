<template>
  <div id="main">
    <img class="wave" src="../../../img/wave.png" alt="" srcset="" />
    <div class="container">
      <div class="img">
        <img src="../../../img/bg.svg" alt="" srcset="" />
      </div>
      <div class="login-container">
        <form action="index.html">
          <img class="avatar" src="../../../img/avatar.svg" alt="" srcset="" />
          <h2>Welcome</h2>
          <div class="input-div one" v-bind:class="{ focus: nameis }">
            <div class="i">
              <v-icon icon="user"></v-icon>
            </div>
            <div>
              <h5>Username</h5>
              <input
                type="text"
                class="input"
                v-on:click="namefunc()"
                v-on:blur="namefunc()"
              />
            </div>
          </div>
          <div class="input-div two" v-bind:class="{ focus: pwdis }">
            <div class="i">
              <v-icon icon="lock"></v-icon>
            </div>
            <div>
              <h5>Password</h5>
              <input
                type="password"
                class="input"
                v-on:click="pwdfocus()"
                v-on:blur="pwdfocus()"
              />
            </div>
          </div>
          <a href="#">Forgot Password?</a>
          <input type="button" value="Login" class="btn" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      saveName: "",
      savePwd: "",
      nameis: false,
      pwdis: false,
    };
  },
  methods: {
    namefunc() {
      this.nameis = !this.nameis;
    },
    pwdfocus() {
      this.pwdis = !this.pwdis;
    },
  },
};
</script>

<style lang="scss" scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
  padding: 0 2rem;
}
.img {
  display: flex;
  justify-content: flex-end;
}

.img img {
  width: 500px;
}

.login-container {
  display: flex;
  align-items: center;
  text-align: center;
}
form {
  width: 360px;
}

.avatar {
  width: 100px;
}

form h2 {
  font-size: 2.9rem;
  text-transform: uppercase;
  margin: 15px 0;
  color: #333;
}

.i {
  display: flex;
  justify-content: center;
  align-items: center;
}
.i svg {
  color: #d9d9d9;
  transition: 0.3s;
}

.input {
  font-family: "Poppins", sans-serif;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 10px;
  border: none;
  outline: none;
  background-color: none;
  padding: 0.5rem, 0.7rem;
  font-size: 1.2rem;
  color: #555;
}

.input-div {
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
}

.input-div::after,
.input-div::before {
  content: "";
  position: absolute;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: #38d39f;
  transition: 0.3s;
}

.input-div.focus::after,
.input-div.focus::before {
  width: 50%;
}

.input-div::after {
  right: 50%;
}
.input-div::before {
  left: 50%;
}

.input-div.two {
  margin-bottom: 4px;
}

.input-div > div {
  position: relative;
  height: 45px;
}
.input-div > div > h5 {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 18px;
  transition: 0.3s;
}
.input-div.focus::after,
.input-div.focus::before {
  width: 50%;
}
.input-div.focus .i svg {
  color: #38d39f;
}
.input-div.focus > div > h5 {
  top: -5px;
  font-size: 15px;
}
.input-div.one {
  margin-top: 0px;
}

.input-div > div > input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem 0.7rem;
  font-size: 1.2rem;
  color: #555;
  font-family: "poppins", sans-serif;
}

a {
  display: block;
  text-align: right;
  text-decoration: none;
  color: #999;
  font-size: 0.9rem;
  transition: 0.3s;
}
a:hover {
  color: #38d39f;
}
.btn {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  margin: 1rem 0;
  font-size: 1.2rem;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #32be9f, #38d39f, #32be8f);
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  text-transform: uppercase;
  background-size: 200%;
}
.btn:hover {
  background-position: right;
}

@media screen and (max-width: 1050px) {
  .container {
    grid-gap: 5rem;
  }
}

@media screen and (max-width: 1000px) {
  form {
    width: 290px;
  }
  form h2 {
    font-size: 2.4rem;
  }
  .img img {
    width: 400px;
  }
}
@media screen and (max-width: 900px) {
  .img {
    display: none;
  }
  .container {
    grid-template-columns: 1fr;
  }
  .wave {
    display: none;
  }
  .login-container {
    justify-content: center;
  }
}
</style>
