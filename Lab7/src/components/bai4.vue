<template>
  <div class="container mt-4">
    <LoginComponent v-if="!isloggedIn" @LoggedIn="handleLoginSuccess" />
    <CommentComponent v-else :username="loggedInUsername" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginComponent from './Login.vue';
import CommentComponent from './Comment.vue';

const isloggedIn = ref(false);
const loggedInUsername = ref('');
const handleLoginSuccess = (username) => {
  loggedInUsername.value = username;
  isloggedIn.value = true;
};
</script>

