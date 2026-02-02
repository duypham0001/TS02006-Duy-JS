<template>
  <div class="container mt-5">
    <h3 class="mb-3">Bài 1: Xếp loại học sinh</h3>

    <input
      type="number"
      step="0.1"
      v-model.number="dtb"
      class="form-control mb-3"
      placeholder="Nhập điểm trung bình"
    />

    <div v-if="dtb < 5" class="alert alert-danger">
      Xếp loại: Yếu
    </div>
    <div v-else-if="dtb < 6.5" class="alert alert-warning">
      Xếp loại: Trung bình
    </div>
    <div v-else-if="dtb < 8" class="alert alert-info">
      Xếp loại: Khá
    </div>
    <div v-else-if="dtb < 9" class="alert alert-primary">
      Xếp loại: Giỏi
    </div>
    <div v-else class="alert alert-success">
      Xếp loại: Xuất sắc
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dtb = ref(0)
</script>
