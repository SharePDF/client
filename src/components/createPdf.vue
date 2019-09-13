<template>
  <div>
    <b-container>
      <form>
        <b-row class="my-1">
          <b-col sm="3">
            <label>Title:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input v-model="formCreatePdf.title" type="text"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="3">
            <label>File:</label>
          </b-col>
          <b-col sm="9">
            <input @change="previewFile" type="file" />
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="3">
            <label>Description:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input v-model="formCreatePdf.description"   type="text" placeholder="Describe your file"></b-form-input>
          </b-col>
        </b-row>
        <b-button @click.prevent="createPDF" variant="outline-primary">Submit PDF</b-button>
        <b-button variant="outline-primary">Close</b-button>
      </form>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formCreatePdf: {
        title: "",
        description : "",
        pdf : ""
      }
    };
  },
  methods: {

    createPDF() {
      // Swal.showLoading();
      this.$swal.fire({
        title : "wait a minute to upload data",
        allowOutsideClick: () => !this.$swal.isLoading()
      });
      this.$swal.showLoading("wait a minute ")

      let { title, description, pdf } = this.formCreatePdf;  
      var bodyFormData = new FormData();
      bodyFormData.append("pdf", pdf);
      bodyFormData.append("title", title);
      bodyFormData.append("description", description);

      let token = localStorage.getItem("token");
      
      axios({
        url: "http://localhost:3000/pdfs",
        method: "POST",
        headers: { token },
        data : bodyFormData
      })
        .then(response => {
          // console.log(response.data);
          this.$emit("triggerReload")
        
          // FB.XFBML.parse();
          this.$swal.close()
          this.$swal.fire({
            type : "success",
            title : "successfully upload data",
            showConfirmButton : false,
            timer : 2000
          })
        })
        .catch(err=>{
          let message = err.response && err.response.data &&err.response.data.message || "error failed to upload data"
            // console.log("masuk ke error")
            // this.$swal('Hello Vue world!!!')
            this.$swal.fire({
              type : "error",
              title : "failed to upload data ",
              text : message,
              showConfirmButton : false,
              timer : 2000
            })
            // console.log(err.response)
        });
    },

    previewFile(event){
        this.formCreatePdf.pdf = event.target.files[0]
    }
  },
  created() {}
};
</script>

<style>
</style>
