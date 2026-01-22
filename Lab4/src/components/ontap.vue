<template>
  <div class="box">
    <h2>Kiểm tra độ tuổi</h2>

    <p>
      Nhập năm sinh:
      <input type="number" v-model="birthYear" />
    </p>

    <p>Năm sinh của bạn: <span>{{ birthYear }}</span></p>
    <p>Tuổi của bạn: <span>{{ age }}</span></p>
    <p>Phân loại: <span>{{ category }}</span></p>
  </div>
</template>

<script>
export default {
  name: "AgeCheck",
  data() {
    return {
      birthYear: 2007
    }
  },
  computed: {
    age() {
      const currentYear = new Date().getFullYear()
      return currentYear - this.birthYear
    },
    category() {
      if (this.age < 12) return "Trẻ em"
      if (this.age < 18) return "Thiếu niên"
      if (this.age < 60) return "Thanh niên"
      return "Người cao tuổi"
    }
  }
}
</script>

<style scoped>
.box {
  width: 300px;
  margin: 50px auto;
  text-align: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  font-family: Arial;
}

input {
  width: 100px;
  padding: 6px;
  text-align: center;
}

span {
  color: red;
  font-weight: bold;
}
</style>
