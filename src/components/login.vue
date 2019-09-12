<template>
  
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            formLogin : {
                email: "",
                password : ""
            }
        }
    },
    methods: {
        login(){
            
            let {email,password} = formLogin
            
            axios({
                url : "http://localhost:3000/users/login",
                method : "POST",
                data : {email,password}
            })
            .then(response=>{
                console.log(response.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }

}
</script>

<style>

</style>
