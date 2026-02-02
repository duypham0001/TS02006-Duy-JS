<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">
      Kiến thức sức khỏe cộng đồng
    </h1>

    <div class="row">
      <div
        class="col-12 col-md-4 mb-4"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="card h-100">
          <!-- ẢNH -->
          <img
            :src="item.image"
            class="card-img-top post-img"
            alt="Hình ảnh"
          />

          <!-- NỘI DUNG -->
          <div class="card-body">
            <h5 class="card-title">
              {{ item.title }}
            </h5>

            <p class="card-text">
              {{ item.content }}
            </p>

            <a href="#" class="btn btn-info btn-sm">
              Xem chi tiết
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import img1 from '../assets/rau-cu-qua.jpg'
import img2 from '../assets/gia-vi.jpg'
import img3 from '../assets/dau.jpg'

const items = [
  {
    title: '8 loại rau củ quả giàu canxi',
    content:
      'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi...',
    image: img1
  },
  {
    title: 'Các loại gia vị tốt cho sức khỏe',
    content:
      'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ các món ăn đã thêm hương thơm và vị hấp dẫn...',
    image: img2
  },
  {
    title: '9 loại đậu bổ dưỡng nên dùng nhiều',
    content:
      'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim...',
    image: img3
  }
]
</script>
<style scoped>
.post-img {
  height: 200px;
  object-fit: cover;
}

.card-text {
  font-size: 14px;
  color: #555;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* giới hạn 3 dòng */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>