<template>
  <MainLayout>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <div class="card shadow-lg border-0 rounded-4">
            <div class="card-body p-4">

              <h4 class="text-center mb-4">Thông tin cá nhân</h4>

              <!-- AVATAR -->
              <div class="text-center mb-4">
                <img
                  :src="form.avatar || defaultAvatar"
                  class="rounded-circle mb-3 avatar"
                />
                <input
                  type="file"
                  class="form-control"
                  @change="onAvatarChange"
                />
              </div>

              <!-- NAME -->
              <div class="mb-3">
                <label>Họ tên</label>
                <input v-model="form.name" class="form-control" />
              </div>

              <!-- EMAIL -->
              <div class="mb-4">
                <label>Email</label>
                <input v-model="form.email" class="form-control" />
              </div>

              <hr class="my-4" />

              <h5 class="mb-3">Đổi mật khẩu</h5>

              <!-- OLD PASSWORD -->
              <div class="mb-3">
                <label>Mật khẩu cũ</label>
                <input
                  type="password"
                  v-model="oldPassword"
                  class="form-control"
                />
              </div>

              <!-- NEW PASSWORD -->
              <div class="mb-4">
                <label>Mật khẩu mới</label>
                <input
                  type="password"
                  v-model="newPassword"
                  class="form-control"
                />
              </div>

              <button class="btn btn-primary w-100" @click="save">
                Lưu thay đổi
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue'

export default {
  components: { MainLayout },

  data() {
    return {
      defaultAvatar: 'https://i.pravatar.cc/150',
      form: {
        id: null,
        name: '',
        email: '',
        password: '',
        avatar: '',
        role: ''
      },
      oldPassword: '',
      newPassword: ''
    }
  },

  mounted() {
    const user = JSON.parse(localStorage.getItem('currentUser'))

    if (!user) {
      alert('Vui lòng đăng nhập')
      this.$router.push('/login')
      return
    }

    this.form = { ...user }
  },

  methods: {
    // UPLOAD AVATAR → BASE64
    onAvatarChange(e) {
      const file = e.target.files[0]
      if (!file) return

      const reader = new FileReader()
      reader.onload = () => {
        this.form.avatar = reader.result
      }
      reader.readAsDataURL(file)
    },

    save() {
      const users = JSON.parse(localStorage.getItem('users')) || []

      const index = users.findIndex(u => u.id === this.form.id)
      if (index === -1) return

      // ĐỔI MẬT KHẨU
      if (this.oldPassword || this.newPassword) {
        if (this.oldPassword !== users[index].password) {
          alert('Mật khẩu cũ không đúng')
          return
        }

        if (!this.newPassword) {
          alert('Vui lòng nhập mật khẩu mới')
          return
        }

        users[index].password = this.newPassword
        this.form.password = this.newPassword
      }

      users[index] = { ...users[index], ...this.form }

      localStorage.setItem('users', JSON.stringify(users))
      localStorage.setItem('currentUser', JSON.stringify(users[index]))

      alert('Cập nhật thành công')
      this.oldPassword = ''
      this.newPassword = ''
    }
  }
}
</script>

<style scoped>
.avatar {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 4px solid #eee;
}

.card {
  border-radius: 16px;
}

label {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
}
</style>
