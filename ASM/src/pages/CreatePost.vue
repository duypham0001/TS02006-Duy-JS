<template>
  <MainLayout>
    <div class="container py-5 col-md-8">
      <h4>{{ isEdit ? 'Edit Post' : 'Create Post' }}</h4>

      <input class="form-control mb-3" v-model="post.title" placeholder="Title">

      <select class="form-control mb-3" v-model="post.category">
        <option>Công nghệ</option>
        <option>Khoa học</option>
        <option>Sức khỏe</option>
      </select>

      <textarea class="form-control mb-3" rows="5" v-model="post.content"></textarea>

      <input type="file" class="form-control mb-3" @change="onImage">

      <div class="form-check mb-3">
        <input type="checkbox" class="form-check-input" v-model="post.featured">
        <label>Bài viết nổi bật</label>
      </div>

      <button class="btn btn-primary" @click="save">
        {{ isEdit ? 'Update' : 'Create' }}
      </button>
    </div>
  </MainLayout>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: null,
        title: '',
        content: '',
        image: '',
        category: 'Công nghệ',
        featured: false
      },
      isEdit: false
    }
  },
mounted() {
  const id = this.$route.params.id
  const posts = JSON.parse(localStorage.getItem('posts')) || []

  if (id) {
    const found = posts.find(p => p.id == id)

    if (found) {
      this.post = { ...found }
      this.isEdit = true
    }
  }
},

  methods: {
    //Base 64
    onImage(e) {
      const file = e.target.files[0]
      if (!file) return

      const reader = new FileReader()
      reader.onload = () => {
        this.post.image = reader.result   // base64
      }
      reader.readAsDataURL(file)
    },
save() {
  let posts = JSON.parse(localStorage.getItem('posts')) || []

  if (this.isEdit) {
    const index = posts.findIndex(p => p.id === this.post.id)

    if (index !== -1) {
      posts[index] = { ...this.post }
    }
  } else {
    posts.unshift({
      ...this.post,
      id: Date.now(),
      author: localStorage.getItem('username') || 'Admin',
      createdAt: new Date().toLocaleDateString()
    })
  }

  localStorage.setItem('posts', JSON.stringify(posts))
  this.$router.push('/home')
}

  }
}
</script>




<style scoped>
.image-preview {
  width: 100%;
  height: 300px;
  background: #e9ecef;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  overflow: hidden;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
