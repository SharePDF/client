<template>





</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
        formRegister: {
        username: "",
        email: "",
        password: ""
      }
    };
  },

  methods : {

      register(){
          let {username, email, password} = formRegister

          axios({
              url : "http://localhost:3000/users/register",
              method : "POST",
              data : {username, email, password}
          })
          .then(response=>{
              console.log(response.data)
          })
          .catch(err=>{
              console.log(err)
          })
      }


  }
};
</script>

<style>
</style>
