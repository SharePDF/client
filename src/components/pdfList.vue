<template>
<div>
    <pdfItem @triggerReload="$emit('triggerReload')"  v-for="pdf in allpdf" :key="pdf._id" v-bind:pdf="pdf"></pdfItem>
</div>
</template>

<script>

import pdfItem from "./pdfItem"
export default {

    props : {
        allpdf : Array
    },

    components : {
        pdfItem
    }

}
</script>

<style>

</style>
