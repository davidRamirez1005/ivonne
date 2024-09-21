<template>
  <div>
    <div class="decoracionNegra">
      <img class="" src="../../assets/img/bgTop.png" alt="bg" />
    </div>
    <!-- <div class="tonico">
      <img class="" src="" alt="persona" />
    </div> -->
    <div class="decoracionNegraCelular">
      <img class="" src="../../assets/img/bgCelular.png" alt="bgcelular" />
    </div>
    <div class="linea1">
      <img class="" src="../../assets/img/linea1.png" alt="linea1" />
    </div>
    <div class="linea2">
      <img class="" src="../../assets/img/linea2.png" alt="linea2" />
    </div>
    <div class="linea3">
      <img class="" src="../../assets/img/linea3.png" alt="linea3" />
    </div>
    <div class="relative isolate px-6 pt-14 lg:px-10">
      <div class="mx-auto max-w-2xl sm:py-38 lg:py-25 presentacion">
        <div class="sm:mb-4 sm:flex sm:justify-center">
          <p
            class="mt-4 font-bold text-base sm:text-lg lg:text-xl leading-4 text-[#393E46] animate__animated animate__jello text-center  items-center justify-center"
          >
          “Promoviendo el bienestar, la seguridad y la salud en
          los diferentes entornos del ser humano”
          </p>
        </div>
        <br />
        <div class="text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl scroll"
          >
          IVONNE MARITZA
          RUEDA CRISTANCHO
          </h1>
          <br />
          <div class="tonicoCelular">
            <img class="" src="./assets/tonico.png" alt="tonico" />
          </div>
          <div
            class="precio"
            style="display: flex; justify-content: center; gap: 2rem"
          >
            <div class="scroll">
              <h2
                class="font-bold text-[#6D9886] animate__animated animate__jello"
              >
              PSICOLOGIA INTEGRAL
              </h2>
            </div>
          </div>
          <br />
          <div :class="{ 'dark-text': isDark }">
            <p class="mt-6 text-lg leading-8 scroll text">
              Como psicóloga y especialista en salud ocupacional, he dedicado mi carrera a diseñar estrategias integrales para el bienestar laboral y el desarrollo del talento humano. Mi experiencia de más de una década me ha permitido perfeccionar herramientas de evaluación de clima organizacional, liderazgo y resolución de conflictos.
            </p>
          </div>
          <br />
          <div class="scroll publicidad">
            <el-tooltip
            class="box-item"
            effect="dark"
            content="Bottom Right prompts info"
            placement="bottom-end"
            >
              <ContainerImg :src="imageRed" />
            </el-tooltip>
            <el-tooltip
            class="box-item"
            effect="dark"
            content="Bottom Right prompts info"
            placement="bottom-end"
            >
              <ContainerImg :src="lapiz" />
            </el-tooltip>
            <el-tooltip
            class="box-item"
            effect="dark"
            content="Bottom Right prompts info"
            placement="bottom-end"
            >
              <ContainerImg :src="reloj" />
            </el-tooltip>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from "vue";
import ContainerImg from "../home/components/ContainerImg.vue";
import imageRed from "../../assets/img/Shape1.png";
import reloj from "../../assets/img/reloj.png";
import lapiz from "../../assets/img/lapiz.png";

let isDark = ref(false);

function isDarkColor(color) {
  const rgb = color.replace(/[^0-9,]/g, "").split(",");
  const brightness = Math.round(
    (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
      1000
  );
  return brightness < 125;
}

watchEffect(() => {
  const bgColor = window.getComputedStyle(document.body).backgroundColor;
  isDark.value = isDarkColor(bgColor);
});

onMounted(() => {
});
</script>

<style scope>
.text {
  color: var(--text-color);
}

.dark-background {
  --text-color: white;
}

:not(.dark-background) {
  --text-color: #181a17;
}

.dark-text {
  color: white;
}
@keyframes show {
  from {
    opacity: 0;
    scale: 25%;
  }

  to {
    opacity: 1;
    scale: 100%;
  }
}
.decoracionNegra {
  display: flex;
  height: 85%;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
}
.tonico {
  display: flex;
  position: absolute;
  z-index: 1;
  /* top: 7%; */
  /* right: 3%; */
}

.publicidad {
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 1;
  background-color: #95DFC0;
  width: 100%;
  height: auto;
  padding: 1rem;
  border: 1px solid #95DFC0;
  border-radius: 40px;
}


.publicidad img {
  border-radius: 30px;
}

.promocion img {
  width: 10rem;
}

.solicitarMovil {
  display: none;
}
.tonicoCelular {
  display: none;
}
.tonico img {
  width: 24rem;
}
.decoracionNegraCelular {
  display: none;
}
.linea1 {
  display: flex;
  position: absolute;
  top: 30%;
  left: 7%;
}
.linea2 {
  display: flex;
  position: absolute;
  top: 55%;
  left: 55%;
}
.linea3 {
  display: flex;
  position: absolute;
  top: 40%;
  left: 56%;
}
.precio h2 {
  font-size: 1.5rem;
}

.presentacion{
  position: relative;
  left: -15rem;
}

@media (max-width: 800px) {
  .decoracionNegra {
    display: none;
  }
  .decoracionNegraCelular {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    width: 67%;
  }
  .solicitar {
    display: none;
  }
  .promocion img{
    width: 8rem;
  }
  .promocion {
    display: flex;
    position: absolute;
    z-index: -1;
    top: 65%;
    right: 4%;
  }
  .tonico {
    display: none;
  }
  .tonicoCelular {
    display: flex;
    z-index: 1;
  }
  .solicitarMovil {
    display: block;
  }
  .linea1 {
    top: 45%;
    left: 2%;
  }
  .linea2 {
    top: 95%;
    left: 65%;
  }
  .linea3 {
    top: 105%;
    left: 14%;
  }
  .precio h2 {
    font-size: 3rem;
  }
  .precio del {
    font-size: 1.5rem;
  }
  .publicidad {
    border-radius: 50px 100px 50px 50px;
  }
  .anticaida {
    width: 70vw;
    height: 45vh;
  }
  .logofusion {
    display: none;
  }
}
</style>
