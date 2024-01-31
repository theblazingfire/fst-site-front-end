<script setup>
// import app level css here
// import app level components here
// bootstrap-grid framework imported here
import Header from "./components/header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
  <main>
    <Header></Header>
    <div class="offset-top-main"></div>
    <router-view></router-view>
    <Footer></Footer>
  </main>
</template>
