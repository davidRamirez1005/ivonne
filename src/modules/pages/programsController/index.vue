<template>
    <div id="inicio-Programas">
        <HeaderPaginas
            titulo="Programas y Capacitaciones"
            descripcion="Estas capacitaciones están diseñadas para gerentes y jefes de área, enfocándose en el desarrollo de habilidades de liderazgo efectivo, toma de decisiones, comunicación asertiva, y resolución de conflictos. Los módulos cubren aspectos clave como motivación de equipos, delegación de tareas, retroalimentación constructiva, y manejo de situaciones de estrés en la gestión diaria."
        />
        <div class="contenedor-implementacion">
            <div class="row">
                <h2 class="subtitulo">Implementación del SG-SST (Sistema de Gestión de Seguridad y Salud en el Trabajo)</h2>
            </div>
            <br>
            <br>
            <div class="row">
                <div class="col">
                    <h2 class="subtitulo" style="color: #C0C4CB;">Fases del Servicio</h2>
                    <br>
                    <div class="accordion">
                        <div v-for="(phase, index) in phases" :key="index" class="mb-4">
                            <button @click="togglePhase(index)" class="w-full text-left bg-gray-200 p-4 rounded-lg focus:outline-none">
                                <div class="flex justify-between items-center">
                                    <span>{{ phase.title }}</span>
                                    <i :class="{'fas fa-chevron-down': !phase.isOpen, 'fas fa-chevron-up': phase.isOpen}"></i>
                                </div>
                            </button>
                            <div v-if="phase.isOpen" class="p-4 bg-gray-100 rounded-lg mt-2">
                                <p>{{ phase.content }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h2 class="subtitulo" style="color: #C0C4CB;">Beneficios del Servicio</h2>
                    <br>
                    <div class="accordion">
                        <div v-for="(benefict, index) in beneficts" :key="index" class="mb-4">
                            <button @click="toggleBenefit(index)" class="w-full text-left bg-gray-200 p-4 rounded-lg focus:outline-none">
                                <div class="flex justify-between items-center">
                                    <span>{{ benefict.title }}</span>
                                    <i :class="{'fas fa-chevron-down': !benefict.isOpen, 'fas fa-chevron-up': benefict.isOpen}"></i>
                                </div>
                            </button>
                            <div v-if="benefict.isOpen" class="p-4 bg-gray-100 rounded-lg mt-2">
                                <p>{{ benefict.content }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="border-t-2 border-gray-300 my-4 mx-8">
        <br>
        <div class="contenedor-tarjetas">
            <transition-group name="list" tag="div">
                <div class="scroll tarjeta" v-for="(card, index) in paginatedCards" :key="index">
                    <tarjeta
                        :title="card.title"
                        :description="card.description"
                        :benefits="card.benefits"
                    />
                </div>
            </transition-group>
        </div>
        <div class="navigation-buttons">
            <button @click="prevPage" :disabled="currentPage === 0" class="bg-gray-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed flex items-center">
                <i class="fas fa-arrow-left mr-2"></i> Anterior
            </button>
            <button @click="nextPage" :disabled="currentPage >= totalPages - 1" class="bg-gray-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed flex items-center">
                Siguiente <i class="fas fa-arrow-right ml-2"></i>
            </button>
        </div>
        <div class="contacto-paginas">
            <ContactoPaginas />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import HeaderPaginas from '../../../shared/components/HeaderPaginas.vue';
import tarjeta from './components/tarjeta.vue';
import ContactoPaginas from '../../../shared/components/ContactoPaginas.vue';

const cards = ref([
    {
        title: "Programas de Bienestar y Salud Ocupacional",
        description: "Abordar de manera integral las necesidades de los trabajadores, tanto a nivel físico como emocional. Incluyen actividades orientadas al autocuidado, ergonomía, promoción de hábitos saludables, gestión del estrés y equilibrio entre la vida personal y profesional.",
        benefits: [
            'Reducción de índices de estrés y ausentismo laboral.',
            'Mejora del clima organizacional y de la satisfacción de los empleados.',
            'Mayor compromiso y productividad.',
            'Fortalecimiento de la cultura de bienestar dentro de la empresa.'
        ]
    },
    {
        title: "Capacitaciones en Liderazgo y Gestión del Personal",
        description: "Estas capacitaciones están diseñadas para gerentes y jefes de área, enfocándose en el desarrollo de habilidades de liderazgo efectivo, toma de decisiones, comunicación asertiva, y resolución de conflictos.  Los módulos cubren aspectos clave como motivación de equipos, delegación de tareas, retroalimentación constructiva, y manejo de situaciones de estrés en la gestión diaria.",
        benefits: [
            'Mejora en la toma de decisiones y gestión de equipos.',
            'Aumento en la confianza y competencias de liderazgo.',
            'Reducción de conflictos internos y mejora de la comunicación organizacional.',
            'Equipos más cohesivos y orientados a los resultados.'
        ]
    },
    {
        title: "Talleres de Manejo de Emociones y Estrés Laboral",
        description: "Este taller brinda a los empleados las herramientas necesarias para identificar, gestionar y regular sus emociones en el entorno laboral. A través de dinámicas grupales, ejercicios de mindfulness, y técnicas de respiración y relajación, los participantes aprenden a manejar el estrés, prevenir el burnout, y fomentar un equilibrio emocional.",
        benefits: [
            'Mejora del bienestar emocional de los colaboradores',
            'Reducción del estrés y sus efectos negativos en el desempeño.',
            'Equipos más resilientes y preparados para enfrentar desafíos laborales.',
            'Aumento de la motivación y el compromiso.'
        ]
    },
    {
        title: "Talleres de Evaluación de Desempeño y Desarrollo Profesional",
        description: "Este taller proporciona a los líderes y gestores de recursos humanos las herramientas para aplicar correctamente las evaluaciones de desempeño, con énfasis en la retroalimentación constructiva y el seguimiento del desarrollo profesional. Se trabaja en la identificación de competencias clave, establecimiento de metas claras y la creación de planes de acción para el crecimiento de los empleados.",
        benefits: [
            'Evaluaciones de desempeño más objetivas y orientadas al desarrollo.',
            'Clarificación de metas y expectativas dentro de los equipos.',
            'Promoción del crecimiento profesional de los empleados.',
            'Mejor alineación entre los objetivos personales y los de la organización.'
        ]
    },
    {
        title: "Conferencias sobre Riesgo Psicosocial y Bienestar en el Trabajo",
        description: "Estas conferencias abordan temas como la identificación y gestión de riesgos psicosociales, el impacto del estrés laboral, y la importancia de la promoción del bienestar integral en las empresas. Se utilizan estudios de casos, investigaciones actuales y mejores prácticas para sensibilizar a líderes y trabajadores sobre la importancia de un ambiente de trabajo saludable.",
        benefits: [
            'Mayor conciencia sobre la relevancia de gestionar riesgos psicosociales.',
            'Herramientas para prevenir y mitigar situaciones que afecten la salud mental de los empleados.',
            'Sensibilización sobre la importancia de un ambiente de trabajo equilibrado y saludable.',
            'Alineación de las prácticas organizacionales con los estándares legales en salud ocupacional.'
        ]
    },
    {
        title: "Capacitaciones en Seguridad y Salud en el Trabajo (SG-SST)",
        description: "Estas capacitaciones cubren los aspectos fundamentales del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), incluyendo la identificación de peligros, evaluación de riesgos, implementación de matrices y medidas de control. También se abordan temas como primeros auxilios, normativas legales y el desarrollo de programas de vigilancia epidemiológica.",
        benefits: [
            'Cumplimiento de la normativa vigente en seguridad y salud ocupacional.',
            'Reducción de accidentes laborales y enfermedades profesionales.',
            'Mayor consciencia y compromiso por parte de los empleados con su seguridad y la de sus compañeros.',
            'Optimización de los procesos de seguridad dentro de la empresa.'
        ]
    },
    {
        title: "Conferencias sobre Responsabilidad Social Empresarial (RSE)",
        description: "Esta conferencia introduce a las empresas en los conceptos clave de la responsabilidad social empresarial (RSE) y su importancia en la sostenibilidad y reputación de la empresa. Se discuten temas como la ética empresarial, la contribución al desarrollo comunitario, y la implementación de políticas y prácticas sostenibles dentro de la organización.",
        benefits: [
            'Mejora de la imagen y reputación de la empresa.',
            'Mayor atracción de clientes y talento comprometido con los valores de responsabilidad social.',
            'Creación de prácticas sostenibles y alineadas con la estrategia empresarial.',
            'Impacto positivo en la comunidad y el entorno.'
        ]
    },
    {
        title: "Programas de Formación para Procesos de Selección y Evaluación de Personal",
        description: "En este programa, se enseña a los equipos de recursos humanos cómo gestionar de manera efectiva los procesos de selección, desde la definición del perfil del cargo hasta la selección final. Se profundiza en la aplicación de pruebas psicológicas y la realización de entrevistas estructuradas, así como en la evaluación de competencias y ajuste cultural.",
        benefits: [
            'Procesos de selección más efectivos y adaptados a las necesidades de la organización.',
            'Contrataciones más acertadas, reduciendo la rotación y mejorando la retención de talento.',
            'Equipos de recursos humanos más preparados para evaluar competencias y habilidades de los candidatos.',
            'Mayor coherencia entre el perfil del trabajador y las necesidades de la empresa.'
        ]
    }
]);

const currentPage = ref(0);
const itemsPerPage = 2;
const transitionName = ref('slide-right');

const totalPages = computed(() => Math.ceil(cards.value.length / itemsPerPage));

const paginatedCards = computed(() => {
    const start = currentPage.value * itemsPerPage;
    const end = start + itemsPerPage;
    return cards.value.slice(start, end);
});

const nextPage = () => {
    if (currentPage.value < totalPages.value - 1) {
        transitionName.value = 'slide-left';
        currentPage.value++;
    }
};

const prevPage = () => {
    if (currentPage.value > 0) {
        transitionName.value = 'slide-right';
        currentPage.value--;
    }
};

const phases = ref([
    {
        title: "Diagnóstico Inicial y Evaluación de Peligros",
        content: "Realizamos un análisis exhaustivo de las condiciones actuales de la empresa, identificando los posibles peligros y evaluando los riesgos asociados a las actividades laborales. Este diagnóstico inicial nos permite crear un plan de acción adaptado a las características de la organización y su sector económico.",
        isOpen: false
    },
    {
        title: "Diseño e Implementación del Sistema",
        content: "En esta etapa, desarrollamos toda la documentación necesaria, como políticas de seguridad, matrices de identificación de peligros, evaluaciones de riesgos, procedimientos de control y planes de emergencia. Nos encargamos de la creación de programas de vigilancia epidemiológica y capacitación del personal en temas de seguridad y salud en el trabajo.",
        isOpen: false
    },
    {
        title: "Capacitación y Sensibilización",
        content: "Es fundamental que los colaboradores comprendan y adopten los procedimientos de seguridad. Por ello, realizamos capacitaciones continuas para los empleados y directivos, asegurando que todos estén alineados con los protocolos del SG-SST y comprometidos con la creación de un entorno laboral seguro.",
        isOpen: false
    },
    {
        title: "Monitoreo, Seguimiento y Mejora Continua",
        content: "Una vez implementado el sistema, llevamos a cabo auditorías internas periódicas para garantizar que el SG-SST se esté cumpliendo correctamente. Revisamos los indicadores de gestión y proponemos mejoras para asegurar la evolución del sistema, de manera que se mantenga vigente y efectivo en la prevención de riesgos laborales.",
        isOpen: false
    },
    {
        title: "Cumplimiento Normativo y Certificaciones",
        content: "Asesoramos a las empresas para que cumplan con las exigencias legales, garantizando que los documentos y procedimientos cumplan con las normativas nacionales e internacionales (como las normas ISO 45001, Decreto 1072 y Resolución 0312). Ayudamos a las organizaciones a prepararse para auditorías externas y procesos de certificación, en caso de que busquen obtener un reconocimiento formal de su sistema de gestión.",
        isOpen: false
    }
]);

const togglePhase = (index) => {
    phases.value[index].isOpen = !phases.value[index].isOpen;
};

const beneficts = ref([
    {
        title: "Cumplimiento de la normativa legal",
        content: "Aseguramos que tu empresa cumpla con las exigencias del Ministerio del Trabajo y otras entidades reguladoras, evitando sanciones.",
        isOpen: false
    },
    {
        title: "Prevención de accidentes y enfermedades laborales",
        content: "Reducimos significativamente los riesgos para los colaboradores, creando un ambiente de trabajo más seguro.",
        isOpen: false
    },
    {
        title: "Mejora de la productividad",
        content: "Un entorno laboral seguro y controlado fomenta el bienestar de los empleados, lo que se traduce en mayor motivación y productividad.",
        isOpen: false
    },
    {
        title: "Fortalecimiento de la cultura organizacional",
        content: "Promover la seguridad y salud en el trabajo contribuye a una cultura de prevención y responsabilidad compartida, mejorando el clima laboral.",
        isOpen: false
    },
    {
        title: "Acompañamiento continuo",
        content: "Ofrecemos soporte a largo plazo, ayudando a las empresas a mantener el sistema actualizado y adaptado a los cambios normativos y organizacionales.",
        isOpen: false
    }
]);

const toggleBenefit = (index) => {
    beneficts.value[index].isOpen = !beneficts.value[index].isOpen;
};
</script>

<style scoped>
.contenedor-implementacion {
    margin: 2rem;
}

.accordion button {
    transition: background-color 0.3s ease;
}

.accordion button:hover {
    background-color: #e2e8f0;
}

.accordion .fas {
    transition: transform 0.3s ease;
}

.accordion .fa-chevron-up {
    transform: rotate(180deg);
}

.contenedor-tarjetas {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
}

.navigation-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

.contacto-paginas {
    margin-top: 5rem;
}

.slide-left-enter-active, .slide-left-leave-active {
    transition: transform 0.5s;
}

.slide-left-enter, .slide-left-leave-to {
    transform: translateX(100%);
}

.slide-right-enter-active, .slide-right-leave-active {
    transition: transform 0.5s;
}

.slide-right-enter, .slide-right-leave-to {
    transform: translateX(-100%);
}

.tarjeta {
    margin-bottom: 2rem;
}
</style>