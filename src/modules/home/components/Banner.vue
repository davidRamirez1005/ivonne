<template>
  <div class="banner">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="text">Fomentando la salud, la seguridad y el bienestar en todos los aspectos de la vida humana.</h1>
        </div>
        <div class="col datos">
          <span>
            Menos estrés y ausentismo
          </span>
          <span>
            Mejor clima organizacional
          </span>
          <span>
            Mayor productividad
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  </script>
  
  <style scoped>
  .banner {
    width: 100%;
  }
  
  .container {
    background-color: #F5F7FA;
    height: auto;
    padding: 1rem;
    margin: 0;
    max-width: 100%;
  }

  .col {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .datos{
    column-gap: 4rem;
  }

  @media (max-width: 800px) {
    .datos{
      margin-top: 2rem;
      column-gap: 1rem;
    }
    .banner {
      margin-top: 5rem;
    }
  }
  </style>