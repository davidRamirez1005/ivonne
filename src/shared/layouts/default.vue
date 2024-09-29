<template>
	<div class="layout">
	  <header>
		<NavBar />
	  </header>
	  <main class="main-layout">
		<router-view />
	  </main>
	  <footer>
		<Footer />
	  </footer>
	</div>
  </template>
  
  <script setup>
  import NavBar from "../components/NavBar.vue";
  import Footer from "../components/Footer.vue";
  </script>
  
  <style scoped>
  .layout {
	background-color: #f9fbfd;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;
  }
  
  header {
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1000;
	background-color: #f9fbfd;
  }
  
  .main-layout {
	flex: 1;
	margin-top: 4rem;
	padding-bottom: 5rem;
	width: 100% !important;
  }
  
  footer {
	bottom: 0;
	width: 100%;
	z-index: 1000;
  }
  </style>