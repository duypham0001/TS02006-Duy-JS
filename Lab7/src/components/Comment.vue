<template>
  <div class="col-sm-4 m-5">
    <h2>Bình luận bài viết</h2>
    <div class="card">
      <img src="../assets/img1.jpg" alt="Hình ảnh" />
      <div class="card-body">
        <h3 class="card-title">8 loại rau củ quả giàu canxi</h3>
        <p class="card-text">Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung 
          canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi...</p>
      </div>
    </div>
    <form @submit.prevent="submitComment">
      <div class="mt-3">
        <textarea id="commentText" cols="60" v-model="commentText"
          placeholder="Nhập bình luận của bạn"></textarea>
      </div>

      <button type="submit" class="btn btn-success">Gửi bình luận</button>
    </form>

    <div v-if="comments.length" class="mt-3">
      <h5>Danh sách các bình luận:</h5>
      <ul style="list-style-type: circle;">
        <li v-for="(comment, index) in comments" :key="index">
          <p><strong>{{ comment.name }}</strong>: {{ comment.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['username']);

const commentText = ref('');
const comments = ref([]);
function submitComment() {
  if (commentText.value) {
    comments.value.push({
      name: props.username, 
      text: commentText.value
    });
    commentText.value = '';
  }
}
</script>
<style scoped>
/* Wrapper bình luận */
.col-sm-4 {
  max-width: 600px !important;
  width: 100% !important;
  margin: 80px auto !important;
  float: none !important;
}

/* Card bài viết */
.card {
  margin-bottom: 20px;
  box-shadow: 0 6px 15px rgba(255, 255, 255, 0.15);
}

/* Ảnh trong card */
.card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Textarea bình luận */
textarea {
  width: 100%;
  min-height: 120px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ffffff;
  resize: vertical;
}

/* Nút gửi */
button.btn-success {
  margin-top: 10px;
  width: 100%;
}
</style>
