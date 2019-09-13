<template>
  <section id="register">
    <div class="register-container">
      <div class="huge-logo">
        <img src="assets/img/Share-PDF-logo-production.png" alt="share-pdf" />
      </div>
      <div class="register-form">
        <div class="register-header">
          <form action id="register-form">
            <div>
              <h2>Register</h2>
            </div>
            <div>
              <label for="email">Email</label>
              <input
                v-model="formRegister.email"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                v-model="formRegister.password"
              />
            </div>
            <div>
              <button type="submit" @click.prevent="register" class="button-submit">Submit</button>
              <a href="#" @click.prevent="showLoginForm()">here</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- <div>
    <p>register</p>
    <b-container>
      <b-form>
        <b-row class="my-1">
          <b-col sm="3">
            <label>Email:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input v-model="formRegister.email" placeholder="Enter your email"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="3">
            <label>Password:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input
              v-model="formRegister.password"
              type="password"
              placeholder="Enter password"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-button @click.prevent="register" variant="outline-primary">register</b-button>
        <hr />
        <hr />
        <center>
          <span>Already have an account?</span>
        </center>
        <center>
          <span>
            Login
            <a href="#" @click.prevent="showLoginForm()">here</a>
          </span>
        </center>
        <hr />
      </b-form>
    </b-container>
  </div>-->
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Itim&display=swap");

#register {
  font-family: "Itim", cursive;
  flex-grow: 1;
  background-color: #6dc1ff;
  min-height: 100vh;
}

.register-container {
  height: 100vh;
  margin: auto;
  width: 60%;
  display: flex;
  align-items: center;
}

.register-container div {
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
  padding-right: 3vw;
}

.register-form {
  background-color: #b2ddff;
  flex-grow: 1;
  width: 60%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2rem;
}

#register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px dashed black; */
  padding: 0 10%;
}

#register-form > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* border: 1px dashed black; */
}

.register-footer {
  display: flex;
}

.button-submit,
.register-footer a,
#register-form h2 {
  margin: 0 auto;
}

#register-form div input {
  flex-grow: 2;
  max-width: 70%;
  border-radius: 25px;
  padding-left: 1em;
  min-height: 2rem;
}

#register-form div label {
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
      formRegister: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    showLoginForm() {
      this.$emit("fromRegisterForm", true);
    },
    register() {
      let { email, password } = this.formRegister;

      axios({
        url: "http://localhost:3000/users/register",
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
