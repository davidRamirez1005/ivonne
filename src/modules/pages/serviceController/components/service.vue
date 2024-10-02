<template>
    <div class="row">
      <div class="col-12">
        <h2 :class="['scroll', 'subtitulo-servicio', textAlignClass]">
          <i :class="['fas', iconName]"></i>
          {{ title }}
        </h2>
        <br>
        <p class="scroll text text-start">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    title: String,
    description: String,
    align: {
      type: String,
      default: 'start'
    },
    iconName: {
    type: String,
    default: 'fa-icon-name'
  }
  });
  
  const textAlignClass = `text-${props.align}`;
  </script>
  
  <style scoped>
  .subtitulo-servicio {
    font-size: 2rem;
    font-weight: 400;
    color: #6D9886;
  }
  
  @media (max-width: 800px) {
    .subtitulo-servicio {
      font-size: 1.5rem;
    }
  }
  </style>