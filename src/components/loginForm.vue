<template>
  <div id="login">
    <div class="login-container">
      <div class="huge-logo">
        <img src="assets/img/Share-PDF-logo-production.png" alt="share-pdf" />
      </div>
      <div class="login-form">
        <div class="login-header">
          <form action id="login-form">
            <div>
              <h2>login</h2>
            </div>
            <div>
              <label for="email">Email</label>
              <input
                v-model="formLogin.email"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label for="password">Password</label>
              <input
                v-model="formLogin.password"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button
                type="submit"
                class="button-submit"
                @click.prevent="login"
                variant="outline-primary"
              >Submit</button>
            </div>
          </form>
        </div>
        <div class="login-footer">
          <a href="#" @click.prevent="showRegisterFrom()">Haven't join us yet? Sign Up here!</a>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <p>Login</p>
    <b-container>
        <b-form>
      <b-row class="my-1">
        <b-col sm="3">
          <label>Email:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input v-model="formLogin.email" placeholder="Enter your email"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label>Password:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input v-model="formLogin.password" type="password" placeholder="Enter password"></b-form-input>
        </b-col>
      </b-row>
      <b-button @click="login" variant="outline-primary">Log In</b-button>
      <hr />
      <hr />
      <center>
        <span>Don't have an account?</span>
      </center>
      <center>
        <span>
          Register
          <a href="#" @click.prevent="showRegisterFrom()">here</a>
        </span>
      </center>
      <hr />
      </b-form>
    </b-container>
  </div>-->
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Itim&display=swap");

#login {
  font-family: "Itim", cursive;
  flex-grow: 1;
  background-color: #6dc1ff;
  min-height: 100vh;
}

.login-container {
  height: 100vh;
  margin: auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-container div {
  margin: 3vh 0;
}

.huge-logo {
  height: 40vh;
  /* border: 1px dashed black;
    vertical-align: middle;
    /* ! handled in sign-in-logo */
  /* height: 100% */
  display: flex;
  justify-content: center;
  align-items: center;
}

.huge-logo img {
  height: 20vh;
  width: auto;
}

.login-form {
  background-color: #b2ddff;
  flex-grow: 1;
  width: 60%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2rem;
}

#login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px dashed black; */
  padding: 0 10%;
}

#login-form > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* border: 1px dashed black; */
}

.login-footer {
  display: flex;
}

.button-submit,
.login-footer a,
#login-form h2 {
  margin: 0 auto;
}

#login-form div input {
  flex-grow: 2;
  max-width: 70%;
  border-radius: 25px;
  padding-left: 1em;
  min-height: 2rem;
}

#login-form div label {
  flex-grow: 1;
  text-align: right;
  padding-right: 10px;
}

button {
  box-shadow: 0px 10px 14px -7px #276873;
  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
  background-color: #599bb3;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 16px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
}

button:hover {
  background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
  background-color: #408c99;
}

button:active {
  position: relative;
  top: 1px;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formLogin: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    showRegisterFrom() {
      this.$emit("fromLoginform", false);

      // this.$emit("")
    },
    login() {
      let { email, password } = this.formLogin;

      axios({
        url: "http://localhost:3000/users/login",
        method: "POST",
        data: { email, password }
      })
        .then(response => {
          console.log(response.data);
          const token = response.data.token;
          localStorage.setItem("token", token);
          this.$emit("loginCondition", true);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
