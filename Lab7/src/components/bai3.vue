<template>
  <div class="container col-sm-6 mt-4">
    <h3>Đăng ký người dùng</h3>

    <form @submit.prevent="register">
      <input class="form-control mb-2" v-model="user.name" placeholder="Họ tên" />
      <input class="form-control mb-2" v-model="user.email" placeholder="Email" />
      <input type="password" class="form-control mb-2" v-model="user.password" placeholder="Mật khẩu" />
      <input type="date" class="form-control mb-2" v-model="user.dob" />

      <select class="form-control mb-2" v-model="user.gender">
        <option value="">Giới tính</option>
        <option>Nam</option>
        <option>Nữ</option>
      </select>

      <label class="me-2">
        <input type="checkbox" value="Tiếng Việt" v-model="user.languages" /> Tiếng Việt
      </label>
      <label class="ms-2">
        <input type="checkbox" value="English" v-model="user.languages" /> English
      </label>

      <br /><br />
      <button class="btn btn-success">Đăng ký</button>
    </form>

    <div v-if="submitted" class="mt-3">
      <h5>Thông tin đã đăng ký:</h5>
      <p>Họ tên: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Ngày sinh: {{ user.dob }}</p>
      <p>Giới tính: {{ user.gender }}</p>
      <p>Ngôn ngữ: {{ user.languages.join(', ') }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const submitted = ref(false);

const user = ref({
  name: '',
  email: '',
  password: '',
  dob: '',
  gender: '',
  languages: []
});

const register = () => {
  submitted.value = true;
};
</script>
<style scoped>

.container.col-sm-6 {
  max-width: 520px !important;
  width: 100% !important;
  margin: 0 auto !important;
  float: none !important;
}

/* Checkbox nhìn gọn hơn */
label {
  cursor: pointer;
}

/* Nút đăng ký full width */
button.btn-success {
  width: 100%;
}
</style>
