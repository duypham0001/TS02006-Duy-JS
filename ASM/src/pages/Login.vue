<template>
  <AuthLayout>
    <h3 class="mb-4">Login</h3>

    <input v-model="email" class="form-control mb-3" placeholder="Email">
    <input v-model="password" type="password" class="form-control mb-4" placeholder="Password">

    <button class="btn btn-primary w-100" @click="login">
      Login
    </button>

    <p class="text-center mt-3">
      <router-link to="/register">Don't have an account?</router-link>
    </p>
    
  </AuthLayout>

</template>

<script>
import AuthLayout from '../layouts/AuthLayout.vue'

export default {
  components: { AuthLayout },

  data() {
    return {
      email: '',
      password: '',
      username: ''
    }
  },

  methods: {
    login() {
      if (!this.email || !this.password) return

      // LƯU TRẠNG THÁI ĐĂNG NHẬP
      localStorage.setItem('isLogin', 'true')

      // LƯU USERNAME (lấy từ email)
      this.username = this.email.split('@')[0]
      localStorage.setItem('username', this.username)

      // CHUYỂN TRANG
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 4px;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 18px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #ddd;
  outline: none;
  font-size: 14px;
}

input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
}

.btn-login {
  width: 100%;
  margin-top: 8px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #667eea;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.btn-login:hover {
  background: #5a67d8;
}

.register {
  text-align: center;
  margin-top: 18px;
  font-size: 14px;
}

.register a {
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
}

.register a:hover {
  text-decoration: underline;
}
</style>