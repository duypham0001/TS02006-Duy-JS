<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
    <div class="container">

      <!-- LOGO -->
      <router-link class="navbar-brand fw-bold text-success" to="/home">
        Energy Public
      </router-link>

      <!-- TOGGLER -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- MENU -->
      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Trang chủ</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link">Bài viết</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Video</a>
          </li>
        </ul>

        <div class="d-flex gap-2">
          <router-link to="/create-post" class="btn btn-success">
            + Đăng bài
          </router-link>

          <button class="btn btn-outline-secondary" @click="logout">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('isLogin')
      this.$router.push('/login')
    }
  }
}
</script>



<style scoped>  




.logo {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}

.menu {
  list-style: none;
  display: flex;
  gap: 20px;
}

.menu a {
  color: #ddd;
  text-decoration: none;
}

.menu a.router-link-active {
  color: #fff;
}

</style>
