<template>
  <div class="card">
      <div class="text-titulo-tarjeta">{{ title }}</div>
    <div class="description">
      <div class="text">
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="benefits">
      <ul>
        <li v-for="benefit in benefits" :key="benefit">{{ benefit }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  benefits: Array
});
</script>

<style scoped>
.card {
  position: relative;
  width: 80vw;
  height: 30vh;
  background: #444444;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
  padding: 2rem;
  overflow: hidden;
}

.card::before,
.card::after {
  position: absolute;
  content: "";
  width: 15%;
  height: 21%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: #6D9886;
  transition: all 0.5s;
}

.card::before {
  top: 0;
  right: 0;
  border-radius: 0 15px 0 100%;
}

.card::after {
  bottom: 0;
  left: 0;
  border-radius: 0 100% 0 15px;
}

.card:hover::before,
.card:hover:after {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: all 0.5s;
}

.card:hover .description {
  display: none;
}

.card:hover .benefits {
  display: block;
  z-index: 10;
}

.text-titulo-tarjeta {
  color: #6D9886;
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: bold;
}

.text p {
  color: aliceblue;
  font-size: 1rem;
}

.benefits {
  display: none;
  color: aliceblue;
  font-size: 1rem;
}

.benefits ul {
  list-style-type: disc;
}

.benefits li {
  margin-bottom: 10px;
}

@media (max-width: 800px){
  .card {
    width: 90vw;
    height: auto;
  }
  .benefits {
    font-size: 0.7rem;
  }
  .text p {
    font-size: 0.7rem;
  }
  .text-titulo-tarjeta {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  .card::before,
  .card::after {
    width: 10%;
    height: 15%;
  }
}
</style>