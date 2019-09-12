<template>
  <div>
      <navbar @loginCondition="loginCondition"></navbar>
      <loginForm @loginCondition="loginCondition"  @fromLoginform="loginToggle"  v-if="!isLogin&&isLoginForm"></loginForm>
      <registerForm @loginCondition="loginCondition" @fromRegisterForm="loginToggle" v-if="!isLogin&&!isLoginForm"></registerForm>  
      <!-- <h1>Coba</h1> -->
      <pdfList></pdfList>
  </div>
</template>

<script>
import navbar from './components/navbar'
import loginForm from './components/loginForm'
import registerForm from './components/registerForm'
import pdfList from './components/pdfList'
export default {
    components : {
        navbar,
        loginForm,
        registerForm,
        pdfList
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
