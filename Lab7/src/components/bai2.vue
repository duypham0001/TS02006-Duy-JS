<template>
  <div class="container mt-5">
    <div v-if="!isLoggedIn" class="col-sm-4">
      <h3>Form Đăng nhập</h3>

      <form @submit.prevent="login">
        <div class="mb-3">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="email"
            placeholder="Nhập email"
          />
          <p v-if="emailError" class="text-danger">{{ emailError }}</p>
        </div>

        <div class="mb-3">
          <label>Mật khẩu</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            placeholder="Nhập mật khẩu"
          />
          <p v-if="passwordError" class="text-danger">{{ passwordError }}</p>
        </div>

        <button class="btn btn-primary">Đăng nhập</button>
      </form>
    </div>

    <div v-else class="col-sm-5">
      <h3>Chào mừng, {{ email }}!</h3>
      <button class="btn btn-secondary" @click="logout">Đăng xuất</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);
const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const login = () => {
  emailError.value = '';
  passwordError.value = '';

  if (!email.value) {
    emailError.value = 'Email là bắt buộc';
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Email không hợp lệ';
  }

  if (!password.value) {
    passwordError.value = 'Mật khẩu là bắt buộc';
  }

  if (!emailError.value && !passwordError.value) {
    isLoggedIn.value = true;
  }
};

const logout = () => {
  isLoggedIn.value = false;
  email.value = '';
  password.value = '';
};
</script>
<style scoped>
/* Canh giữa toàn bộ form login */


/* Fix col-sm-4 / col-sm-5 khi dùng sai chỗ */
.container > .col-sm-4,
.container > .col-sm-5 {
  max-width: 420px !important;
  width: 100% !important;
  float: none !important;
  margin: 0 auto !important;
}

/* Nút đăng nhập full width */
button.btn-primary,
button.btn-secondary {
  width: 100%;
}
</style>

