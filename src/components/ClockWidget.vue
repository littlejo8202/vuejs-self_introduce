<template>
  <div class="widget-box">
    <div class="widget-title">현재 시각</div>
    <div class="widget-value">{{ time }}</div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const time = ref('')
let timer
function updateTime() {
  const now = new Date()
  time.value = now.toLocaleTimeString('ko-KR', { hour12: false })
}
onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})
onUnmounted(() => clearInterval(timer))
</script>
