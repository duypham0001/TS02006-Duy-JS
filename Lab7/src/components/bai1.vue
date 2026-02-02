<template>
  <div class="container mt-1 col-sm-8 task-container">
    <h2>Quản lý công việc</h2>

    <form @submit.prevent="addTask" class="mb-3">
      <input
        v-model="newTask"
        class="form-control mb-2"
        placeholder="Nhập công việc"
      />
      <button class="btn btn-primary">Thêm công việc</button>
    </form>

    <ul class="list-group">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="list-group-item d-flex justify-content-between"
      >
        {{ task }}
        <button class="btn btn-danger btn-sm" @click="removeTask(index)">
          Xóa
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newTask = ref('');
const tasks = ref([]);

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>
<style scoped>
.task-container {
  max-width: 500px;        /* Fix container quá hẹp */
  margin: 100px auto;     /* Canh giữa ngang */
  float: none;            /* Fix col-sm-* gây lệch */
}
</style>
