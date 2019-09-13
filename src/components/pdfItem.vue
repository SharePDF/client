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
      <!-- <div
        class="fb-share-button"
        :data-href="pdf.url"
        data-layout="button_count"
        data-size="large">
      </div> -->
      <button class="fb-share-button"  :data-href="pdf.url" >share button</button>
      <!-- <button class="fb-share-button btn btn-primary" data-layout="button_count"  :data-href="pdf.url">share</button> -->
        <!-- <a target="_blank" :href="''+pdf.url" class="fb-xfbml-parse-ignore">Bagikan</a> -->
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
