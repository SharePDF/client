<template>
  <div>
    <b-container>
      <form>
        <b-row class="my-1">
          <b-col sm="3">
            <label>Title:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input type="text"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="3">
            <label>File:</label>
          </b-col>
          <b-col sm="9">
            <input type="file" />
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="3">
            <label>Description:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input type="text" placeholder="Describe your file"></b-form-input>
          </b-col>
        </b-row>
        <b-button variant="outline-primary">Submit PDF</b-button>
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
        description : ""
      }
    };
  },
  methods: {
    createPDF() {
      let token = localStorage.getItem("token");
      let { title, description } = this.formCreatePdf;
      axios({
        url: "http://localhost:3000/pdf",
        method: "POST",
        headers: { token }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(next);
    }
  },
  created() {}
};
</script>

<style>
</style>
