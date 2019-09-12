<template>
  
</template>

<script>

import axios from "axios"

export default {
    data(){
        return {
            formCreatePdf : {
                title : "",
                description
            }
        }
    },
    methods :  {

        createPDF(){

            let token = localStorage.getItem("token")
            let {title, description} = formCreatePdf
            axios({
                url : "http://localhost:3000/pdf",
                method : "POST",
                headers : {token}
            })
            .then(response=>{
                console.log(response.data)
            })
            .catch(next)
        }

    },
    created(){

    }

}
</script>

<style>

</style>
