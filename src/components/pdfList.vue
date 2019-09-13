<template>
  <div style="display : flex ; flex-wrap: wrap; justify-content: center">
    <pdfItem
      style="margin : 70px"
      @triggerReload="$emit('triggerReload')"
      v-for="pdf in allpdf"
      :key="pdf._id"
      v-bind:pdf="pdf"
    ></pdfItem>
    <div style="flex-basis:100%; height:0"></div>
  </div>
</template>

<script>
import pdfItem from "./pdfItem";
export default {
  props: {
    allpdf: Array
  },

  components: {
    pdfItem
  }
};
</script>

<style>
</style>
