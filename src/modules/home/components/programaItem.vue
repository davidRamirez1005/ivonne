<template>
    <div class="col">
      <div class="col container-numero">
        <h2>{{ number }}</h2>
      </div>
      <div class="col">
        <p class="text-programas">{{ title }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    number: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .container-numero {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .text-programas {
    font-size: 1rem;
    color: aliceblue;
  }
  </style>