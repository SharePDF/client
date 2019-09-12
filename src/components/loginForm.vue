<template>
  <div>
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
  </div>
</template>

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
          const token = response.data.token
          localStorage.setItem("token", token)
          this.$emit("loginCondition" , true)
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
