<template>
  <MainLayout>
    <div class="container py-5" v-if="post">
      <div class="row">
        <!-- LEFT: POST CONTENT -->
        <div class="col-md-8">
          <h2 class="mb-3">{{ post.title }}</h2>

          <img :src="post.image" class="img-fluid rounded mb-3">

          <!-- META dưới ảnh -->
          <div class="text-muted mb-3">
            {{ post.author }} · {{ post.createdAt }} · {{ post.category }}
          </div>

          <p class="post-content">
            {{ post.content }}
          </p>

          <!-- COMMENT FORM -->
          <div class="mt-5">
            <h5>Bình luận</h5>

            <textarea
              class="form-control mb-2"
              rows="3"
              v-model="commentText"
              placeholder="Nhập bình luận của bạn..."
            ></textarea>

            <button class="btn btn-primary" @click="submitComment">
              Gửi
            </button>
          </div>
        </div>

        <!-- RIGHT: COMMENTS -->
        <div class="col-md-4">
          <h5 class="mb-3">Danh sách bình luận</h5>

          <div
            v-for="(c, index) in post.comments"
            :key="index"
            class="comment-box mb-3"
          >
            <strong>{{ c.user }}</strong>
            <small class="text-muted d-block">{{ c.createdAt }}</small>
            <div class="mt-1">{{ c.content }}</div>
          </div>

          <div v-if="!post.comments.length" class="text-muted">
            Chưa có bình luận nào
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>




<script>
export default {
  data() {
    return {
      post: null,
      commentText: ''
    }
  },

  mounted() {
    const id = this.$route.params.id
    const posts = JSON.parse(localStorage.getItem('posts')) || []

    const found = posts.find(p => p.id == id)
    if (found) {
      // đảm bảo có mảng comments
      found.comments = found.comments || []
      this.post = found
    }
  },

  methods: {
    submitComment() {
      const username = localStorage.getItem('username')

      if (!username) {
        alert('Bạn cần đăng nhập để bình luận')
        this.$router.push('/login')
        return
      }

      if (!this.commentText.trim()) return

      const comment = {
        user: username,
        content: this.commentText,
        createdAt: new Date().toLocaleString()
      }

      this.post.comments.push(comment)

      // update lại localStorage
      const posts = JSON.parse(localStorage.getItem('posts')) || []
      const index = posts.findIndex(p => p.id === this.post.id)
      posts[index] = this.post
      localStorage.setItem('posts', JSON.stringify(posts))

      this.commentText = ''
    }
  }
}
</script>

<style scoped>
.post-content {
  line-height: 1.8;
  word-break: break-word;
}

.comment-box {
  background: #f8f9fa;
  padding: 10px 12px;
  border-radius: 6px;
  border-left: 4px solid #0d6efd;
}
</style>



