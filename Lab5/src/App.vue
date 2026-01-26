<template>
  <div class="container mt-5">
    <div class="col-md-8 mx-auto">
      <h1 class="text-center mb-4 fw-bold">
        Blog VueJS
      </h1>

      <CreatePost @add-post="addPost" />
      <PostList :posts="posts" />
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import CreatePost from './components/CreatePost.vue';
import PostList from './components/PostList.vue';

const posts = ref([]);

const addPost = (newPost) => {
  posts.value.push(newPost);
};
</script>
<style>
body {
  font-family: Arial, sans-serif;
}

/* Container */
.container {
  width: 700px;
  margin: 30px auto;
}

/* Title */
.title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 15px;
}

/* Create post */
.create-post {
  margin-bottom: 30px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 15px;
}

.form-textarea {
  height: 100px;
  resize: vertical;
}

.btn-post {
  background-color: #2f80ed;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
}

.btn-post:hover {
  background-color: #256ad6;
}

/* Post list */
.post-card {
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 15px;
}

.post-title {
  color: #1b8f3c;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5px;
}

.post-author {
  color: #e63946;
  font-weight: bold;
  margin-bottom: 10px;
}

.post-content {
  color: #ffffff;
  line-height: 1.6;
}
</style>