<template>
  <div class="post-list">
    <h2 class="title">Danh sách bài viết</h2>

    <div
      v-for="(post, index) in posts"
      :key="index"
      class="post-card"
    >
      <h3 class="post-title">
        {{ post.title }}
      </h3>

      <p class="post-author">
        {{ post.author }}
      </p>

      <p class="post-content">
        {{ post.content }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  posts: {
    type: Array,
    required: true
  }
});
</script>
