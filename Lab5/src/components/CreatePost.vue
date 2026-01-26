<template>
  <div class="create-post">
    <h2 class="title">Tạo bài viết mới</h2>

    <input
      v-model="post.title"
      type="text"
      class="form-input"
      placeholder="Tiêu đề bài viết"
    />

    <input
      v-model="post.author"
      type="text"
      class="form-input"
      placeholder="Tên tác giả"
    />

    <textarea
      v-model="post.content"
      class="form-textarea"
      placeholder="Nội dung bài viết"
    ></textarea>

    <button class="btn-post" @click="submitPost">
      Đăng bài
    </button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['add-post']);

const post = reactive({
  title: '',
  author: '',
  content: ''
});

const submitPost = () => {
  if (!post.title || !post.author || !post.content) return;

  emit('add-post', { ...post });

  post.title = '';
  post.author = '';
  post.content = '';
};
</script>
