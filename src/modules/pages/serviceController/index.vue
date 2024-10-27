<template>
    <div id="inicio-servicios">
        <HeaderPaginas
            titulo="Descripción de Servicios"
            descripcion="Este conjunto de servicios tiene como finalidad mejorar el desempeño organizacional, fortalecer el bienestar de los empleados y crear una cultura empresarial más resiliente y alineada con los estándares actuales de seguridad y salud en el trabajo."
        />
        <div class="contenedor">
            <ServiceSection
                title="Evaluación de Riesgo Psicosocial"
                description="Realizamos diagnósticos exhaustivos del riesgo psicosocial dentro de las organizaciones a través de la aplicación de baterías especializadas. Este proceso incluye la identificación de factores que pueden afectar la salud mental y emocional de los trabajadores, brindando un análisis profundo que permite desarrollar estrategias efectivas para mitigar riesgos, mejorar el bienestar y cumplir con la normativa vigente en salud ocupacional."
                align="start"
                iconName="fa-user-shield"
            />
            <ServiceSection
                title="Programas de Bienestar y Clima Laboral"
                description="Desarrollamos e implementamos programas integrales de bienestar que promueven un ambiente de trabajo saludable, equilibrado y positivo. Estas iniciativas están diseñadas para mejorar la satisfacción, la motivación y el rendimiento de los empleados, contribuyendo a un clima laboral armónico y alineado con los objetivos empresariales."
                align="start"
                iconName="fa-smile" 
            />
            <ServiceSection
                title="Evaluaciones de Desempeño"
                description="Aplicamos evaluaciones de desempeño personalizadas para medir las competencias, habilidades y potencial de los colaboradores. Este proceso incluye retroalimentación estructurada, identificación de áreas de mejora y recomendaciones para el desarrollo profesional, garantizando que el talento humano se alinee con las metas organizacionales y promueva el crecimiento continuo."
                align="start"
                iconName="fa-chart-line"
            />
            <ServiceSection
                title="Procesos de Selección y Pruebas de Personalidad"
                description="Ofrecemos servicios especializados de selección de personal, utilizando entrevistas estructuradas, pruebas psicológicas y valoraciones de competencias para identificar el talento que mejor se ajusta a las necesidades de la empresa. Este enfoque asegura que las decisiones de contratación sean basadas en criterios objetivos y ajustados a la cultura y los valores de la organización."
                align="start"
                iconName="fa-tasks"
            />
            <ServiceSection
                title="Direccionamiento Estratégico Organizacional"
                description="Asesoramos a las empresas en la creación y ejecución de estrategias organizacionales enfocadas en el desarrollo del capital humano y la mejora continua. Acompañamos a los líderes en la toma de decisiones que optimicen los recursos, aumenten la competitividad y potencien el crecimiento de la organización a través de una visión clara y coherente."
                align="start"
                iconName="fa-compass"
            />
            <ServiceSection
                title="Implementación y Seguimiento del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)"
                description="Ofrecemos servicios especializados de selección de personal, utilizando entrevistas estructuradas, pruebas psicológicas y valoraciones de competencias para identificar el talento que mejor se ajusta a las necesidades de la empresa. Este enfoque asegura que las decisiones de contratación sean basadas en criterios objetivos y ajustados a la cultura y los valores de la organización."
                align="start"
                iconName="fa-shield-alt"
            />
            <ServiceSection
                title="Capacitaciones y Talleres"
                description="Ofrecemos una amplia gama de capacitaciones y talleres enfocados en temas clave como liderazgo, manejo de emociones, administración de personal, y prevención de riesgos psicosociales. Estos programas están diseñados a medida para las necesidades de cada organización, fomentando el desarrollo de habilidades y la mejora del desempeño individual y colectivo."
                align="start"
                iconName="fa-chalkboard-teacher"
            />
            <ServiceSection
                title="Conferencias y Charlas"
                description="Proporcionamos conferencias y charlas dinámicas sobre bienestar laboral, salud ocupacional, responsabilidad social empresarial (RSE), y tendencias en seguridad en el trabajo. Estas sesiones están dirigidas a directivos, gerentes y empleados, con el objetivo de sensibilizar y capacitar a los equipos sobre la importancia de un entorno laboral saludable y seguro."
                align="start"
                iconName="fa-microphone-alt"
            />
        </div>
        <el-dialog v-model="dialogVisible" title="" width="700" center>
            <span>
            <img :src="selectedImage" alt="Selected Image" class="large-image" style="border-radius: 20px;">
            </span>
        </el-dialog>
        <div class="container-slider">
            <el-carousel :interval="4000" type="card">
            <el-carousel-item v-for="(image, index) in images" :key="index">
                <img :src="image" alt="Carousel Image" class="carousel-image" @click="openModalCarrusel(image)">
            </el-carousel-item>
            </el-carousel>
            
        </div>
        <div class="contacto-paginas">
            <ContactoPaginas />
        </div>
    </div>
    </template>
    
    <script setup>
    import { ref } from 'vue';
    import { ElCarousel, ElCarouselItem } from 'element-plus';
    import HeaderPaginas from '../../../shared/components/HeaderPaginas.vue';
    import ContactoPaginas from '../../../shared/components/ContactoPaginas.vue';
    import ServiceSection from './components/service.vue';

    const images = ref([
        'https://mybucketgatos.s3.us-east-2.amazonaws.com/ivonee/certificado-1.jpg',
        'https://mybucketgatos.s3.us-east-2.amazonaws.com/ivonee/certificado-2.jpg',
        'https://mybucketgatos.s3.us-east-2.amazonaws.com/ivonee/certificado-3.jpg',
        'https://mybucketgatos.s3.us-east-2.amazonaws.com/ivonee/certificado-6.jpg'
    ]);

    let dialogVisible = ref(false)
    let selectedImage = ref('')

    function openModalCarrusel(image) {
        dialogVisible.value = true;
        selectedImage.value = image;
    }

    </script>
    
    <style scoped>
    .contenedor {
        margin-right: 8rem;
        margin-left: 8rem;
    }
    
    .row {
        margin-bottom: 3rem;
    }

    .contacto-paginas{
        margin-top: 3rem;
    }

    .carousel-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: 999;
    }
    
    .carousel-image {
        cursor: pointer;
    }

    .large-image {
        width: 100%;
        height: auto;
    }
    @media (max-width: 800px) {
        .contenedor {
            margin-right: 1rem;
            margin-left: 1rem;
        }
        .el-dialog {
            width: 100% !important;
        }
    }
    </style>