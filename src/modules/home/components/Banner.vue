<template>
    <div class="banner">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="text">Fomentando la salud, la seguridad y el bienestar en todos los aspectos de la vida humana.</h1>
          </div>
          <div class="col datos">
            <span>
                43243
            </span>
            <span>
                43243
            </span>
            <span>
                43243
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
    margin-top: 5rem;
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
    }
  }
  </style>