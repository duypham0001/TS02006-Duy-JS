<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="product-card-container">
          <h2 class="mb-4 text-center fw-bold text-primary">Danh Sách Linh Kiện PC</h2>
          
          <div class="list-group">
            <div 
              v-for="(item, index) in product" 
              :key="index" 
              class="list-group-item list-group-item-action border-0 shadow-sm mb-3 rounded py-3 px-4"
            >
              <div class="d-flex justify-content-between align-items-start">
                <div>
                  <h5 class="product-name mb-1">{{ item.name }}</h5>
                  <p class="product-price text-danger fw-bold mb-2">
                    {{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price) }}
                  </p>
                </div>
                <button 
                  class="btn btn-sm btn-outline-primary rounded-pill" 
                  @click="toggleDetails(index)"
                >
                  {{ showDetails[index] ? 'Đóng' : 'Chi tiết' }}
                </button>
              </div>

              <transition name="fade">
                <div v-if="showDetails[index]" class="mt-3 text-muted border-top pt-2 description-text">
                  {{ item.description }}
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const product = ref([
    {
        name: "CPU AMD Ryzen 9 7950X",
        description: "Vi xử lý 16 nhân 32 luồng, xung nhịp lên tới 5.7GHz, tối ưu cho xử lý đa nhiệm và đồ họa nặng.",
        price: 14500000,
    },
    {
        name: "Card đồ họa NVIDIA RTX 4090",
        description: "GPU mạnh mẽ nhất hiện nay với 24GB VRAM GDDR6X, hỗ trợ Ray Tracing và DLSS 3 cực đỉnh cho gaming 4K.",
        price: 52000000,
    },
    {
        name: "RAM Corsair Dominator Platinum 64GB DDR5",
        description: "Bộ nhớ RAM hiệu năng cao, bus 6000MHz với thiết kế tản nhiệt nhôm sang trọng và đèn LED RGB độc quyền.",
        price: 7800000,
    },
    {
        name: "SSD Samsung 990 Pro 2TB NVMe Gen4",
        description: "Ổ cứng SSD tốc độ đọc/ghi lên tới 7450/6900 MB/s, độ bền cao, phù hợp cho Render video và làm AI.",
        price: 4500000,
    },
    {
        name: "Mainboard ASUS ROG Maximus Z790 Hero",
        description: "Bo mạch chủ cao cấp dành cho CPU Intel thế hệ 13/14, hỗ trợ PCIe 5.0 và hệ thống cấp điện 20+1 phase.",
        price: 18500000,
    }
]); 

const showDetails = ref(product.value.map(() => false));
const toggleDetails = (index) => {
    showDetails.value[index] = !showDetails.value[index];
};
</script>

<style scoped>
/* Căn giữa và đổ bóng nhẹ cho các item */
.list-group-item {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-color: #ffffff;
}

.list-group-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
}

/* Tên sản phẩm */
.product-name {
  font-size: 1.1rem;
  color: #2c3e50;
  font-weight: 600;
}

/* Giá tiền */
.product-price {
  font-size: 1rem;
}

/* Mô tả sản phẩm */
.description-text {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #555;
}

/* Hiệu ứng Fade khi bấm xem chi tiết */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Căn chỉnh màu sắc tiêu đề */
.text-primary {
  color: #0d6efd !important;
}
</style>