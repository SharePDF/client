<template>
  <div>
      <navbar @loginCondition="loginCondition"></navbar>
      <loginForm @loginCondition="loginCondition"  @fromLoginform="loginToggle"  v-if="!isLogin&&isLoginForm"></loginForm>
      <registerForm @loginCondition="loginCondition" @fromRegisterForm="loginToggle" v-if="!isLogin&&!isLoginForm"></registerForm>  
      <!-- <h1>Coba</h1> -->
      <createPdf v-if="isLogin"></createPdf>
      <pdfList v-if="isLogin"></pdfList>
  </div>
</template>

<script>
import navbar from './components/navbar'
import loginForm from './components/loginForm'
import registerForm from './components/registerForm'
import pdfList from './components/pdfList'
import createPdf from './components/createPdf'
export default {
    components : {
        navbar,
        loginForm,
        registerForm,
        pdfList,
        createPdf
    },
    data(){
        return {
            isLogin : false,
            isLoginForm : false,
        }
    },
    methods : {

        loginToggle(cond){
            this.isLoginForm = cond
        },
        loginCondition(cond){
            this.isLogin = cond
        },

        showPageToggle(){



        }
    },
    created(){

        let token = localStorage.getItem("token")

    }

}
</script>

<style>

</style>
