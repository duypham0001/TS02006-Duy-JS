<template>
  <MainLayout>
    <div class="container py-5">
      <h2 class="text-center mb-5">                </h2>

      <div class="row">
        <!-- SIDEBAR -->
        <div class="col-md-2 sidebar">
          <h6>Chuyên mục</h6>
          <ul class="list-group mb-4">
            <li class="list-group-item" v-for="c in categories" :key="c">
              {{ c }}
            </li>
          </ul>

          <h6>Bài viết nổi bật</h6>
          <div v-for="p in featuredPosts" :key="p.id" class="mb-3">
            <img :src="p.image" class="img-fluid rounded mb-1">
            <small>{{ p.title }}</small>
          </div>
        </div>

        <!-- POSTS -->
        <div class="col-md-10">
          <div class="row">
            <div v-for="post in posts" :key="post.id" class="col-md-6 col-lg-4 mb-4">
              <div class="card h-100">
                <img :src="post.image" class="card-img-top">

                <div class="card-body">
                  <small>{{ post.createdAt }}</small>
                  <h5>{{ post.title }}</h5>
                  <p>{{ post.content.slice(0, 80) }}...</p>

                  <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-primary" @click="view(post.id)">
                      View
                    </button>

                    <button class="btn btn-sm btn-warning" @click="edit(post.id)">
                      Edit
                    </button>

                    <button class="btn btn-sm btn-danger" @click="remove(post.id)">
                      Delete
                    </button>

                  </div>
                </div>
              </div>
            </div>
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
      posts: JSON.parse(localStorage.getItem('posts')) || [],
      categories: ['Công nghệ', 'Khoa học', 'Sức khỏe']
    }
  },
  computed: {
    featuredPosts() {
      return this.posts.filter(p => p.featured)
    },
data() {
  return {
    posts: JSON.parse(localStorage.getItem('posts')) || [],
    categories: ['Công nghệ', 'Khoa học', 'Sức khỏe'],
    role: localStorage.getItem('role') || 'guest'
  }
}


  },
  methods: {
    view(id) {
      this.$router.push(`/post/${id}`)
    },
    edit(id) {
      this.$router.push(`/create-post/${id}`)
    },
    remove(id) {
      if (!confirm('Xóa bài viết?')) return
      this.posts = this.posts.filter(p => p.id !== id)
      localStorage.setItem('posts', JSON.stringify(this.posts))
    }
  }
}
</script>

<style scoped>
.sidebar h6 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
}

.sidebar .list-group-item {
  font-size: 13px;
  padding: 8px 10px;
}

.sidebar img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
}

.sidebar small {
  font-size: 13px;
  line-height: 1.4;
}

.card {
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-body small {
  color: #888;
  font-size: 13px;
}

.card-body h5 {
  font-size: 16px;
  font-weight: 600;
  margin: 6px 0;
}

.card-body p {
  font-size: 14px;
  color: #555;
}
</style>