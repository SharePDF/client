<template>
  <div>
    
    <b-card
      :title="pdf.title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>{{pdf.description}}</b-card-text>
      <a :href="''+pdf.url" target="_blank"> read detail </a>
   
        <a class="facebook"  :href="'http://www.facebook.com/sharer.php?+u='+pdf.url+'&t='" title="share on facebok" onclick="window.open(this.href); return false;">Share on Facebook</a>
        <button id="deletePDF" class="btn btn-primary" @click.prevent="removeArticle(pdf._id)">delete</button>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    pdf: Object
  },
  methods : {

    removeArticle(id){
      console.log(id)
      let token = localStorage.getItem("token")
      axios({
        url : `http://localhost:3000/pdfs/${id}`,
        method : "DELETE",
        headers : {token}
      })
      .then(response=>{
        console.log(response.data)
        this.$emit("triggerReload")
      })
      .catch(err=>{
        console.log(err.response.data)
      })





    }

  }
};
</script>

<style>
</style>
