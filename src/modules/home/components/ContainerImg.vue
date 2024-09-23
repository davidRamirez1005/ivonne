<template>
    <div class="container">
      <img :src="src" alt="Centered Image" class="centered-image" />
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .container {
    width: 7em; 
    height: 7em;
    background-color: #E4FFEE;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
  }
  
  .centered-image {
    max-width: 100%;
    max-height: 100%;
  }
  @media (max-width: 800px) {
    .container {
      width: 4em;
      height: 4em;
    }
  }
  </style>