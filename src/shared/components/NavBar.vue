<template>
  <div>
    <header ref="header" class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <router-link to="/" class="-m-1.5 p-1.5">
            <img src="../../assets/img/logo.png" alt="logo" />
          </router-link>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="lg:flex lg:gap-x-10">
          <div class="nav flex gap-x-8">
            <router-link v-for="item in navigation" :key="item.name" :to="item.href" class="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold leading-9 text-gray-900">
              {{ item.name }}
            </router-link>
          </div>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Programas', href: '/programas' },
];

const mobileMenuOpen = ref(false);
const router = useRouter();

const navigateTo = (href) => {
  if (href === '#contact') {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    router.push(href);
  }
};

const header = ref(null);

const handleScroll = () => {
  if (window.scrollY > 50) {
    header.value.classList.add('blurred-background');
  } else {
    header.value.classList.remove('blurred-background');
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.blurred-background {
  backdrop-filter: blur(10px);
}
nav{
  height: 5rem;
}
img {
  width: 4rem;
  height: 4rem;
}
@media (max-width: 800px) {
  img {
    width: 3rem;
    height: 3rem;
  }

  nav{
  height: 4rem;
}

  .nav a {
    color: #6D9886;
  }
}
</style>