<template>
  <div class="container mt-5">
    <h3 class="mb-3">Bài 2: Xác định mùa theo tháng</h3>

    <input
      type="number"
      v-model.number="month"
      class="form-control mb-3"
      placeholder="Nhập tháng (1-12)"
    />

    <div v-if="month < 1 || month > 12" class="alert alert-danger">
      Vui lòng nhập tháng từ 1 đến 12!
    </div>

    <div v-else-if="month >= 3 && month <= 5" class="alert alert-success">
      Mùa Xuân
    </div>
    <div v-else-if="month >= 6 && month <= 8" class="alert alert-warning">
      Mùa Hạ
    </div>
    <div v-else-if="month >= 9 && month <= 11" class="alert alert-info">
      Mùa Thu
    </div>
    <div v-else class="alert alert-primary">
      Mùa Đông
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const month = ref(1)
</script>
