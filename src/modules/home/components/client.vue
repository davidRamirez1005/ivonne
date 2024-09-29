<template>
    <section class="relative isolate overflow-hidden bg-white px-6 py-1 sm:py-1 lg:px-8">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <figure class="mt-3">
          <blockquote class="text-center text font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>“{{comentario}}”</p>
          </blockquote>
          <figcaption class="mt-10">
            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
              <div class="font-semibold text-gray-900">{{ nombre }}</div>
              <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div class="text-gray-600">{{compania}}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    comentario: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    compania: {
      type: String,
      required: true,
    },
  });
</script>

<style scoped>
section{
    display: flex;
    margin: 1rem;
    width: 30vw;
    border-radius: 40px;
}

@media (max-width: 800px){
    section{
        width: 100%;
    }
}
</style>
