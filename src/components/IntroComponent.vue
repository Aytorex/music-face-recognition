<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light top mb-10">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Music with Face</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" @click="this.$router.push('/')">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="this.$router.push('/webcam')">Webcam</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div>
  <h1 class="text-white">Comment ça marche ? </h1>
  <h2 class="text-white">Trois types de mouvements sont possibles :</h2>
  <br/>
  <h3 class="text-white">- Mouvement latéral</h3>
  <h3 class="text-white">- Basculement latéral</h3>
  <h3 class="text-white">- Ouverture de bouche</h3>

  <button class="btn btn-light m-4" @click="this.$router.push('webcam')">Essayer !</button>
</div>
</template>

<script>
export default {
  name : "IntroComponent",
}
</script>

<style scoped>
.container {
  display:flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.top {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 2000px;
}
.text-white {
  color: white;
}
</style>