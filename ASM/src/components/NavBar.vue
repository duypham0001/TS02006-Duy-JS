<template>
<nav class="navbar navbar-expand-lg fixed-top custom-navbar">
    <div class="container">

      <!-- LOGO -->
      <router-link class="navbar-brand fw-bold text-success" to="/home">
      Vlog Assingment
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
/* NAVBAR BACKGROUND */
.custom-navbar {
  background: linear-gradient(135deg, #198754, #20c997);
}

/* LOGO */
.navbar-brand {
  color: #ffffff !important;
  font-size: 22px;
  letter-spacing: 0.5px;
}

/* MENU LINKS */
.nav-link {
  color: rgba(255, 255, 255, 0.85) !important;
  font-weight: 500;
}

.nav-link:hover,
.router-link-active {
  color: #ffffff !important;
}

/* BUTTONS */
.btn-success {
  background: #ffffff;
  color: #198754;
  border: none;
  font-weight: 600;
}

.btn-success:hover {
  background: #e9f7f1;
  color: #146c43;
}

.btn-outline-secondary {
  border-color: rgba(255, 255, 255, 0.6);
  color: #ffffff;
}

.btn-outline-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
}

/* TOGGLER */
.navbar-toggler {
  border-color: rgba(255, 255, 255, 0.6);
}

.navbar-toggler-icon {
  filter: invert(1);
}
</style>
