<template>
  <div>
    <navbar @loginCondition="loginCondition"></navbar>
    <loginForm
      @loginCondition="loginCondition"
      @fromLoginform="loginToggle"
      v-if="!isLogin&&isLoginForm"
    ></loginForm>
    <registerForm
      @loginCondition="loginCondition"
      @fromRegisterForm="loginToggle"
      v-if="!isLogin&&!isLoginForm"
    ></registerForm>
    <!-- <h1>Coba</h1> -->
    <createPdf @triggerReload="triggerReload" v-if="isLogin"></createPdf>
    <pdfList @triggerReload="triggerReload" v-if="isLogin" v-bind:allpdf="allpdf"></pdfList>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import loginForm from "./components/loginForm";
import registerForm from "./components/registerForm";
import pdfList from "./components/pdfList";
import createPdf from "./components/createPdf";
import axios from "axios";

export default {
  components: {
    navbar,
    loginForm,
    registerForm,
    pdfList,
    createPdf
  },
  data() {
    return {
      isLogin: false,
      isLoginForm: false,
      allpdf: []
    };
  },
  methods: {
    loginToggle(cond) {
      this.isLoginForm = cond;
    },
    loginCondition(cond) {
      this.isLogin = cond;
    },
    triggerReload() {
      this.getAllPdf();
    },

    showPageToggle() {},
    getAllPdf() {
      let token = localStorage.getItem("token");

      axios({
        url: "http://localhost:3000/pdfs",
        method: "GET",
        headers: { token }
      })
        .then(response => {
          console.log(response.data);
          this.allpdf = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    let token = localStorage.getItem("token");

    if (token) {
      this.isLogin = true;
      this.getAllPdf();
    } else {
      this.isLogin = false;
    }
  }
};
</script>

<style>
</style>
