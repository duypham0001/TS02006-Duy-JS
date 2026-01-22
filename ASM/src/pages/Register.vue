<template>
  <AuthLayout>
    <h3 class="mb-4">Sign up</h3>

    <input v-model="user.name" class="form-control mb-3" placeholder="Your name">
    <input v-model="user.email" class="form-control mb-3" placeholder="Email">
    <input v-model="user.password" type="password" class="form-control mb-4" placeholder="Password">

    <button class="btn btn-success w-100" @click="register">
      Sign up
    </button>
  </AuthLayout>
</template>

<script>
import AuthLayout from '../layouts/AuthLayout.vue'

export default {
  components: { AuthLayout },
  data() {
    return {
      user: { name: '', email: '', password: '' }
    }
  },
  methods: {
    register() {
      localStorage.setItem('user', JSON.stringify(this.user))
      this.$router.push('/login')
    }
  }
}
</script>
