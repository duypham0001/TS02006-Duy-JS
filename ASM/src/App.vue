<script setup>
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
const route = useRoute()
import AuthLayout from "./layouts/AuthLayout.vue"
import Login from "./pages/Login.vue"
</script>

<template>
<router-view></router-view>
  <Navbar v-if="!['/login','/register'].includes(route.path)" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
