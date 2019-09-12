<template>
  <div>
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
  </div>
</template>

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
