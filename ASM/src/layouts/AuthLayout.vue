<!-- AuthLayout.vue -->
<template>
  <div class="auth-bg">
    <div class="auth-card">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.auth-bg {
  min-height: 100vh;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-card {
  width: 420px;
  background: #fff;
  padding: 24px 28px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0,0,0,.15);
}
</style>
