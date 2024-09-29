<template>
    <div class="container-header">
        <div class="decoracion-header">
          <img class="" src="../../assets/img/header.png" alt="bg" />
        </div>
        <div class="imagen-decoracion">
          <img src="../../assets/img/sceneHome.png" alt="imagen">
        </div>
        <div class="titulo-header">
            <div class="row">
                <h1 class="subtitulo subtitulo-header">{{ titulo }}</h1>
            </div>
            <div class="row">
                <p class="text texto-header">{{ descripcion }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    }
  });
</script>

<style scoped>
.subtitulo-header{
    color: #ffffff;
    margin-bottom: 2rem;
    font-size: 3rem;
}

.texto-header{
    color: #ffffff;
}

@media (max-width: 800px){
    .subtitulo-header{
    font-size: 1.6rem;
    }

    .texto-header{
        color: #ffffff;
    }
}
</style>
    