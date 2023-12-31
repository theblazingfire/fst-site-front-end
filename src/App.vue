<script setup>
// import app level css here
// import app level components here
// bootstrap-grid framework imported here
import "./style.css"
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import Header from "./components/header/Header.vue";
</script>

<template>
  <main>
    <Header></Header>
    <router-view></router-view>
  </main>
</template>
