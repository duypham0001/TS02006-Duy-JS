<template>
  <div>
    <Header />
    <Navbar />

    <!-- wrapper -->
    <main class="main-content">
      <div class="container">
        <slot />
      </div>
    </main>

    <Footer />
  </div>
</template>


<script>
import Header from '../components/Header.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Header, Navbar, Footer }
}
</script>
<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 40px;
}
</style>

