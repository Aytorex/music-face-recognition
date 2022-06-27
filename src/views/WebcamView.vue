<template>
<div class="d-flex flex-column justify-content-center align-items-center">
<Webcam></Webcam>
<button class="btn btn-secondary absolute button" @click="this.$router.push('/')">Retour</button>
</div>
</template>

<script>
import Webcam from "@/components/Webcam";

export default {
  name: 'App',
  components: {
    Webcam,
  }
}
</script>

<style>
 .button {
  position:absolute;
  top: 800px !important;
 }
</style>