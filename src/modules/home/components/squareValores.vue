<template>
    <div class="container-valores">
        <div class="row">
            <div class="col-2 cont-img" :style="{ backgroundColor: color }">
                <img :src="src" alt="image"  class="centered-image">
            </div>
            <div class="col-9">
                <div class="row">
                    <h3>{{ title }}</h3>
                </div>
                <br>
                <div class="row">
                    <p class="text">{{ description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
        src: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
    });
</script>

<style scoped>
  .container-valores {
    border-radius: 40px;
  }

  .cont-img {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
  }
  
  .centered-image {
    max-width: 100%;
    max-height: 100%;
  }

  h3{
    font-size: 1.2em;
    font-weight: bold;
    color: aliceblue;
  }

  p{
    color: aliceblue;
  }
  @media (max-width: 800px) {

    h3{
        font-size: 1rem;
    }

    p{
        font-size: 0.9em;
    }
  }
</style>
