<template>
  <div class="widget-box">
    <div class="widget-title">방문자 수</div>
    <div class="widget-value">{{ count }}</div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const count = ref(0)
onMounted(() => {
  const stored = localStorage.getItem('visitCount')
  count.value = stored ? parseInt(stored) + 1 : 1
  localStorage.setItem('visitCount', count.value)
})
</script>
<style scoped>
.widget-box { margin-bottom: 1.5rem; background: #fff; border-radius: 1rem; box-shadow: 0 2px 8px #e0e7ff; padding: 1rem; text-align: center; }
.widget-title { font-size: 1.05rem; color: #4361ee; margin-bottom: 0.3rem; }
.widget-value { font-size: 1.4rem; font-weight: bold; }
</style>
