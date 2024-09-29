<template>
  <div>
    <div class="redirigir-contacto" @click="scrollToContact">
      <i class="fas fa-phone-alt"></i>
    </div>
    <div class="decoracionNegra">
      <!-- <img class="" src="../../assets/img/bgTop.png" alt="bg" /> -->
      <div class="persona">
        <img class="" src="../../assets/img/foto-removebg-preview.png" alt="persona" />
      </div>
    </div>
    <div class="decoracionNegraCelular">
      <img class="" src="../../assets/img/bgCelular.png" alt="bgcelular" />
    </div>
    <div class="linea1 scroll">
      <img class="" src="../../assets/img/linea1.png" alt="linea1" />
    </div>
    <div class="linea2 scroll">
      <img class="" src="../../assets/img/linea2.png" alt="linea2" />
    </div>
    <div class="linea3 scroll">
      <img class="" src="../../assets/img/linea3.png" alt="linea3" />
    </div>
    <div class="relative isolate px-6 pt-14 lg:px-10">
      <div class="mx-auto max-w-2xl  presentacion">
        <div class="sm:mb-4 sm:flex sm:justify-center scroll">
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
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl scroll"
          >
          IVONNE MARITZA
          RUEDA CRISTANCHO
          </h1>
          <br />
          <div class="PersonaCelular">
            <img class="" src="../../assets/img/foto-removebg-preview.png" alt="tonico" width="50%" />
          </div>
          <br>
          <div
            class="profesion"
            style="display: flex; justify-content: center; gap: 2rem"
          >
            <div class="scroll">
              <h2
                class="font-bold text-[#6D9886] animate__animated animate__jello profesion scroll"
              >
              PSICOLOGIA INTEGRAL
              </h2>
            </div>
          </div>
          <div :class="{ 'dark-text': isDark }">
            <p class="mt-6 text-lg leading-8 scroll text scroll">
              Como psicóloga y especialista en salud ocupacional, he dedicado mi carrera a diseñar estrategias integrales para el bienestar laboral y el desarrollo del talento humano. Mi experiencia de más de una década me ha permitido perfeccionar herramientas de evaluación de clima organizacional, liderazgo y resolución de conflictos.
            </p>
          </div>
          <br />
          <div class="scroll publicidad">
            <el-tooltip
            class="box-item"
            effect="dark"
            content="Profundo conocimiento de la normatividad legal vigente en seguridad y salud en el trabajo (SST)"
            placement="bottom-end"
            >
              <ContainerImg :src="imageRed" />
            </el-tooltip>
            <el-tooltip
            class="box-item"
            effect="dark"
            content="Capacidad para elaborar y gestionar presupuestos de recursos humanos, utilizar indicadores clave de desempeño (KPIs)"
            placement="bottom-end"
            >
              <ContainerImg :src="lapiz" />
            </el-tooltip>
            <el-tooltip
            class="box-item"
            effect="dark"
            content="Capacitadora y docente en temas de salud ocupacional"
            placement="bottom-end"
            >
              <ContainerImg :src="reloj" />
            </el-tooltip>
          </div>
          <br />
        </div>
      </div>
    </div>
    <div class="banner scroll">
      <Banner />
    </div>
    <div class="mision ">
        <div class="row">
          <div class="col">
            <img class="img-scene scroll" src="../../assets/img/sceneMision.png" alt="scene-mision">
          </div>
          <div class="col mision-vision-responsive">
            <div class="titulo-mision">
              <h2 class="subtitulo scroll">Misión</h2>
            </div>
            <p class="text scroll">Brindar soluciones integrales en salud ocupacional y bienestar organizacional, promoviendo ambientes de trabajo seguros, saludables y empáticos. A través de la evaluación psicosocial, la implementación de estrategias de liderazgo y el fomento del desarrollo personal y profesional, buscamos optimizar el rendimiento de las organizaciones, alineando los objetivos empresariales con el bienestar de sus colaboradores.</p>
          </div>
        </div>
    </div>
    <div class="mision vision">
        <div class="row mision-vision ">
          <div class="col mision-vision-responsive">
            <div class="titulo-vision">
              <h2 class="subtitulo scroll">Visión</h2>
            </div>
            <p class="text scroll">Ser una consultora líder en salud ocupacional y bienestar laboral en la región, reconocida por generar cambios positivos y sostenibles en la cultura organizacional de las empresas, contribuyendo a su éxito y crecimiento a largo plazo. Nos proponemos ser un referente en la creación de entornos laborales saludables, innovadores y comprometidos con el desarrollo integral de las personas.</p>
          </div>
          <div class="col img-vision">
            <img class="img-scene scroll" src="../../assets/img/sceneVision.png" alt="scene-vision">
          </div>
        </div>
    </div>
    <div class="valore-servicios">
      <div class="row row-container-services">
        <div class="col col-container-services bg-valores">
          <h2 class="subtitulo scroll">Valores</h2>
          <br><br>
          <div class="items-valores">
              <squareValores
                :src="tuerca" 
                title="Innovación" 
                description="Buscamos constantemente nuevas formas de mejorar el bienestar y la seguridad en el trabajo, implementando prácticas innovadoras." 
                color="#E4FFEE" 
                class="scroll"
              />
              <br>
              <br>
            <squareValores
              :src="tablero" 
              title="Compromiso" 
              description="Estamos dedicados a generar valor a largo plazo tanto para las empresas como para sus colaboradores." 
              color="#F4F4FF" 
              class="scroll"
            />
              <br>
              <br>
            <squareValores
              :src="trofeo" 
              title="Excelencia" 
              description="Nos comprometemos a ofrecer servicios de alta calidad, ajustados a las necesidades específicas de cada cliente." 
              color="#EAF9FF" 
              class="scroll"
            />
              <br>
              <br>
            <squareValores
              :src="nube" 
              title="Ética" 
              description="Actuamos con integridad, respetando la normativa legal y los principios éticos en cada acción que realizamos." 
              color="#FFF6D3" 
              class="scroll"
            />
          </div>
        </div>
        <div class="col col-container-services" style="margin-top: 2rem;">
          <h2 class="subtitulo scroll">Servicios</h2>
          <br><br>
          <div class="container-list">
            <ul class="services-list">
              <li class="text scroll" v-for="(service, index) in services" :key="index">
                <i  class="fas fa-check"></i> {{ service }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="programas">
      <div class="title-progra scroll">
        <h2>Programas y Capacitaciones</h2>
      </div>
      <div class="row scroll">
        <div class="col square">
          <div class="col container-numero">
            <h2>01</h2>
          </div>
          <div class="col">
            <p class="text-programas">Programas de Bienestar y Salud Ocupacional</p>
          </div>
        </div>
        <div class="col square">
          <div class="col container-numero">
            <h2>02</h2>
          </div>
          <div class="col">
            <p class="text-programas">Capacitaciones en Liderazgo y Gestión del Personal
            </p>
          </div>
        </div>
        <div class="col square">
          <div class="col container-numero">
            <h2>03</h2>
          </div>
          <div class="col">
            <p class="text-programas">Talleres de Manejo de Emociones y Estrés Laboral</p>
          </div>
        </div>
        <div class="col square">
          <div class="col container-numero">
            <h2>04</h2>
          </div>
          <div class="col">
            <p class="text-programas">Talleres de Evaluación de Desempeño y Desarrollo Profesional</p>
          </div>
        </div>
      </div>
      <br>
      <div class="row scroll">
        <div class="col square">
          <div class="col container-numero">
            <h2>05</h2>
          </div>
          <div class="col">
            <p class="text-programas">Conferencias sobre Riesgo Psicosocial y Bienestar en el Trabajo</p>
          </div>
        </div>
        <div class="col square">
          <div class="col container-numero">
            <h2>06</h2>
          </div>
          <div class="col">
            <p class="text-programas">Capacitaciones en Seguridad y Salud en el Trabajo (SG-SST)</p>
          </div>
        </div>
        <div class="col square">
          <div class="col container-numero">
            <h2>07</h2>
          </div>
          <div class="col">
            <p class="text-programas">Conferencias sobre Responsabilidad Social Empresarial (RSE)</p>
          </div>
        </div>
        <div class="col square">
          <div class="col container-numero">
            <h2>08</h2>
          </div>
          <div class="col">
            <p class="text-programas">Programas de Formación para Procesos de Selección y Evaluación de Personal
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="testimonios">
      <h2 class="subtitulo scroll">Satisfacción del cliente</h2>
      <br>
      <h3 class="mini-subtitulo scroll">Testimonios</h3>
      <div class="cartas-testimonios scroll">
        <div>
          <client
            comentario="Ivonne es una profesional excepcional, su trabajo ha sido fundamental para mejorar el clima laboral en nuestra empresa."
            nombre="Juan Pérez"
            compania="Gerente General"
          />
        </div>
        <div>
          <client
            comentario="Gracias a Ivonne, hemos logrado implementar un sistema de gestión de seguridad y salud en el trabajo."
            nombre="María Rodríguez"
            compania="Directora de Recursos Humanos"
          />
        </div>
        <div>
          <client
            comentario="Ivonne es una profesional excepcional, su trabajo ha sido fundamental para mejorar el clima laboral en nuestra empresa."
            nombre="Juan Pérez"
            compania="Gerente General"
          />
        </div>
      </div>
      <div class="container-slider">
        <el-carousel :interval="4000" type="card">
          <el-carousel-item v-for="(image, index) in images" :key="index">
            <img :src="image" alt="Carousel Image" class="carousel-image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="contacto " id="section-contacto">
        <div class="section-contacto">
          <div class="row">
            <div class="col">
              <div class="barras-primero scroll">
                <img class="img-barras-1 " src="../../assets/img/barras.png" alt="scene">
              </div>
              <div class="barras-primero scroll">
                <img class="img-barras-2 scroll" src="../../assets/img/barras.png" alt="scene">
              </div>
              <div class="text-contacto scroll">
                <h2 class="subtitulo">¡Contáctanos!</h2>
                <br>
                <p class="text scroll">Si tienes alguna pregunta, deseas más información sobre nuestros servicios o quieres agendar una consulta, por favor llena el siguiente formulario. Nos pondremos en contacto contigo lo antes posible.</p>
              </div>
              <div class="container-circular scroll">
                <img class="img-circular" src="../../assets/img/group.png" alt="circular">
              </div>
            </div>
            <div class="col container-form">
              <form class="space-y-4 p-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700">Nombre Completo</label>
                  <input v-model="form.nombre" type="text" id="name" name="name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                  <input v-model="form.email" type="email" id="email" name="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
                <div>
                  <label for="empresa" class="block text-sm font-medium text-gray-700">Empresa (opcional)</label>
                  <input v-model="form.empresa" type="text" id="empresa" name="empresa" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
                <div class="relative z-10">
                  <label for="servicio" class="block text-sm font-medium text-gray-700">Servicio de Interés</label>
                  <VueMultiselect
                  id="servicio"
                  v-model="selectedServices"
                  :options="servicesform"
                  :multiple="true"
                  :close-on-select="true"
                  placeholder="Seleccione servicios"
                  label="nombre"
                  track-by="numero"
                  class="custom-multiselect"
                  />
                </div>
                <div>
                  <label for="mensaje" class="block text-sm font-medium text-gray-700">Mensaje</label>
                  <textarea v-model="form.mensaje" id="mensaje" name="mensaje" rows="4" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                </div>
                <div class="flex justify-end " style="z-index: -1;">
                  <button @click="submitForm" type="submit" class="mt-4 px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row container-info " id="contact">
        <div class="col vacio"></div>
        <div class="col info-contacto">
          <h1>Contacto:</h1>
          <br>
          <div class="item-contacto">
            <p><i class="fas fa-phone"></i> +57 3154665780</p>
          </div>
          <div class="item-contacto">
            <p><i class="fas fa-envelope"></i> ivonnemaritzaruedacristancho@gmail.com</p>
          </div>
          <div class="item-contacto">
            <p><i class="fas fa-map-marker-alt"></i> Bucaramanga-Santander</p>
          </div>
        </div>
        <div class="col">
          <div class="icon-container">
            <i class="fab fa-linkedin icon-link"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from "vue";
import ContainerImg from "../home/components/ContainerImg.vue";
import Banner from "../home/components/Banner.vue";
import squareValores from "../home/components/squareValores.vue";
import client from "../home/components/client.vue";
import imageRed from "../../assets/img/Shape1.png";
import reloj from "../../assets/img/reloj.png";
import lapiz from "../../assets/img/lapiz.png";
import tuerca from "../../assets/img/tuerca.png";
import tablero from "../../assets/img/tablero.png";
import trofeo from "../../assets/img/trofeo.png";
import nube from "../../assets/img/nube.png";
import VueMultiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.css';

const scrollToContact = () => {
  const contactSection = document.getElementById('section-contacto');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
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

const images = ref([
  'https://mybucketgatos.s3.us-east-2.amazonaws.com/ivonee/logo-frase.jpg',
  'https://mybucketgatos.s3.us-east-2.amazonaws.com/ivonee/recracion.png',
  'https://mybucketgatos.s3.us-east-2.amazonaws.com/ivonee/recreacion-2.png',
  'https://mybucketgatos.s3.us-east-2.amazonaws.com/ivonee/recreacion-3.png',
  'https://mybucketgatos.s3.us-east-2.amazonaws.com/ivonee/recreacion-4.png'
]);

const services = [
  "Evaluación de Riesgo Psicosocial",
  "Programas de Bienestar y Clima Laboral",
  "Evaluaciones de Desempeño",
  "Procesos de Selección y Pruebas de Personalidad",
  "Direccionamiento Estratégico Organizacional",
  "Implementación y Seguimiento del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)",
  "Capacitaciones y Talleres",
  "Conferencias y Charlas",
];

const servicesform = ref([
  { nombre: 'Evaluación de Riesgo Psicosocial', numero: 1 },
  { nombre: 'Programas de Bienestar y Clima Laboral', numero: 2 },
  { nombre: 'Evaluaciones de Desempeño', numero: 3 },
  { nombre: 'Procesos de Selección y Pruebas de Personalidad', numero: 4 },
  { nombre: 'Direccionamiento Estratégico Organizacional', numero: 5 },
  { nombre: 'Implementación y Seguimiento del SG-SST', numero: 6 },
  { nombre: 'Capacitaciones y Talleres', numero: 7 },
  { nombre: 'Conferencias', numero: 8 },
  { nombre: 'Otros', numero: 9 }
]);

const form = ref({
  nombre: '',
  email: '',
  empresa: '',
  mensaje: '',
  servicios: []
});

const selectedServices = ref([]);

// Submit form
const submitForm = () => {
  const formData = {
    nombre: form.value.nombre,
    email: form.value.email,
    mensaje: form.value.mensaje,
    servicios: selectedServices.value.map((service) => service.nombre),
    empresa: form.value.empresa
  };

  const numeroTelefono = "3177289785";
  const mensajeWhatsApp = `
    ¡Hola!
    
    Nombre: ${formData.nombre}.

    Email: ${formData.email}.
    
    ${formData.mensaje}

    Servicios de interés: ${formData.servicios.join(', ')}.

    ${formData.empresa ? `Empresa: ${formData.empresa}` : ''}

    ¡Gracias!
  `;

  try {
    window.open(
      `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(
        mensajeWhatsApp
      )}`,
      "_blank"
    );
    alert('Mensajes enviados exitosamente');
  } catch (error) {
    console.error('Error enviando mensajes:', error);
    alert('Hubo un error enviando los mensajes');
  }
};
onMounted(() => {
});
</script>

<style scope>

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
.redirigir-contacto {
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  font-size: 2.1rem;
  color: #95DFC0;
  cursor: pointer;
  z-index: 999;
}
.text{
  font-size: 1.2rem;
}

.decoracionNegra {
  display: flex;
  height: 85%;
  width: 35%;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  background-image: url('../../assets/img/bgTop.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.persona {
  display: flex;
  position: absolute;
  z-index: 1;
  top: 10rem;
  right: 0;
  flex-direction: column;
  align-items: center;
}
.persona img{
  width: 80%;
  border-radius: 40px;
}
.tonico {
  display: flex;
  position: absolute;
  z-index: 1;
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
.PersonaCelular {
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

.profesion h2 {
  font-size: 1.5rem;
}

.presentacion{
  position: relative;
  left: -15rem;
}

.banner{
  margin-top: 5rem;
  width: 100%;
}

.mision {
  margin-top: 2rem;
  width: 100%;
}

.vision{
  margin-top: 5rem;
}

.mision .row .col {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
  row-gap: 3rem;
  padding: 3rem
}

.mision-vision {
  top: -7rem;
  position: relative;
}

.img-scene{
  width: 26rem;
}

.valore-servicios {
  margin-top: -5rem;
  width: 100%;
}

.container-list {
  display: flex;
  justify-content: center;
  padding-left: 2em;
  padding-right: 2em;
}

.services-list {
  list-style: none;
  padding: 0;
}

.services-list li {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.services-list i {
  color: green;
  margin-right: 0.5rem;
}

.container-list-valores {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 100%;
}

.bg-valores {
  background-image: url('../../assets/img/bgValores.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 3rem;
}

.programas {
  margin-top: 5rem;
  background-image: url('../../assets/img/bgProgramas.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding-left: 3em;
  padding-right: 3em;
  padding-bottom: 3rem;
}

.title-progra {
  display: flex;
  justify-content: center;
  font-size: 2rem;
}

.title-progra h2{
  margin-top: 2rem;
  margin-bottom: 4rem;
  color: aliceblue;
}

.container-numero{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  color: #181A17;
  margin-bottom: 2rem;
}

.text-programas{
  color: aliceblue;
  font-size: 1.2rem;
}

.testimonios{
  margin-top: 3rem;
}

.testimonios h3{
  margin-bottom: 2rem;
}

.cartas-testimonios{
  display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}

.container-slider{
  margin-top: 3rem;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contacto{
  margin-top: 3rem;
  background-color: #F5F7FA;
  border-radius: 100px;
}

.container-form{
  padding: 3rem;
}

.custom-multiselect {
  width: 100%;
}

.multiselect__tags {
  border-radius: 100px !important;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.text-contacto{
    display: flex;
    flex-direction: column;
    padding-top: 7rem;
    padding-left: 2rem;
    padding-right: 19rem;
}

.barras-primero{
  display: flex;
  position: absolute;
}

.img-barras-1{
    display: flex;
    position: relative;
    left: 26rem;
    top: -1rem;
}

.img-barras-2{
    display: flex;
    position: relative;
    left: 27rem;
    top: 25rem;
    z-index: 1;
}

.img-circular{
  z-index: 3;
  display: flex;
  position: relative;
  top: 5rem;
  left: 6rem;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.icon-link {
  margin: 0 0.5rem;
  transition: transform 0.3s;
  font-size: 2rem;
}

.icon-link:hover {
  transform: scale(1.1);
}

.container-info {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

.info-contacto {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
}

.info-contacto h1{
  font-size: 1.5rem;
}

.item-contacto{
  margin-bottom: 1rem;
}
@media (max-width: 800px) {
  .decoracionNegra {
    display: none;
  }

  .text{
    font-size: 1rem;
  }

  .presentacion{
    position: relative;
    left: 0;
  }

  .decoracionNegraCelular {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    width: 57%;
  }

  .text-center h1{
    font-size: 1.6rem;
  }

  .profesion h2 {
    font-size: 1rem;
  }

  .publicidad {
    column-gap: 0.5rem;
  }

  .PersonaCelular {
    display: flex;
    z-index: 1;
    display: flex;
    justify-content: center;
  }

  .PersonaCelular img{
    border-radius: 40px;
  }

  .solicitarMovil {
    display: block;
  }

  .linea1 {
    top: 45%;
    left: -12%;
  }

  .linea2 {
    top: 85%;
    left: 65%;
  }

  .linea3 {
    top: 100%;
    left: 5%;
  }

  .publicidad {
    border-radius: 40px;
  }

  .mision {
    margin-top: 2rem;
  }

.mision-vision-responsive {
  position: relative;
  top: -2rem;
}
.mision .row .col {
  row-gap: 2rem;
  padding: 2rem
}

.mision .row {
  display: contents;
}

.img-vision {
  position: relative;
  top: -3rem;
}

.img-scene{
  width: 11rem;
}

.vision{
  margin-top: -1rem;
}

.banner {
  margin-top: -3rem;
}

.valore-servicios {
  margin-top: -1rem;
  width: 100%;
}
.row-container-services {
    flex-direction: column;
    flex-wrap: wrap;
  }

.col-container-services {
  width: 100%;
  padding: 1rem;
  padding-left: 2em;
  padding-right: 2em;
}

.bg-valores {
  width: 100%;
  left: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.container-list {
  padding-left: 1em;
  padding-right: 1em;
}

.services-list li {
  margin-bottom: 1rem;
}

.programas{
  margin-top: 2rem;
  background-attachment: fixed;
}
.title-progra h2{
  font-size: 1.4rem;
}

.square{
  display: block;
  margin-bottom: 2rem;
}

.testimonios{
  margin-top: 3rem;
}

.cartas-testimonios{
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow-x: auto;
}

.text-contacto {
    display: flex;
    flex-direction: column;
    padding: 3rem;
}

.barras-primero{
  overflow-x: hidden;
}
.img-barras-1 {
    left: 14rem;
    top: -1rem;
}
.img-barras-2{
  display: none;
}
.img-circular {
    top: -1rem;
    left: 1rem;
    width: 13rem;
}

.container-form {
    padding: 1rem;
}

.vacio{
  display: none;
}
.info-contacto {
    padding: 2rem;
}

.container-info {
  margin-top: 0rem;
}

}
@media(min-width: 1280px) and (max-width: 1400px){
  .decoracionNegra {
  display: flex;
  height: 95%;
  width: 42%;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  background-image: url('../../assets/img/bgTop.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.persona {
  display: flex;
  position: absolute;
  z-index: 1;
  top: 10rem;
  right: -3rem;
  flex-direction: column;
}
.persona img{
  width: 80%;
}
}
</style>
