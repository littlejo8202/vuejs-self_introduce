<template>
  <section class="career-modern">
    <div class="career-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        :class="{ active: currentTab === tab.value }"
        @click="currentTab = tab.value"
      >
        {{ tab.label }}
      </button>
    </div>

    <div v-if="currentTab === 'school'">
      <h2>학력</h2>
      <div class="career-list">
        <div class="career-item" v-for="(item, index) in careerItems" :key="index">
          <div class="school-logo">
            <img :src="item.logo" :alt="item.name + ' 로고'" />
          </div>
          <div>
            <strong>{{ item.name }}</strong>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="currentTab === 'certificate'">
      <h2>자격증</h2>
      <ul class="cert-list">
        <li>네트워크관리사 1급 <span>(2024)</span></li>
        <li>컴퓨터활용능력 1급 <span>(2024)</span></li>
        <li>행정관리사 2급 <span>(2023)</span></li>
      </ul>
    </div>

    <div v-else-if="currentTab === 'parttime'">
      <h2>아르바이트 경력</h2>
      <ul class="parttime-list">
        <li>편의점 알바 (2022~2025)</li>
        <li>수학 학원 알바 (2023)</li>
        <li>수학 과외 (2024)</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import yongmaLogo from '../assets/yongma.png'
import seilLogo from '../assets/seil.png'
import sgnamLogo from '../assets/sgnam.png'
import gachonLogo from '../assets/gachon.png'

const tabs = [
  { label: '학력', value: 'school' },
  { label: '자격증', value: 'certificate' },
  { label: '아르바이트 경력', value: 'parttime' }
]
const currentTab = ref('school')

const careerItems = [
  { name: '인천용마초등학교', description: '졸업', logo: yongmaLogo },
  { name: '세일고등학교', description: '졸업', logo: seilLogo },
  { name: '산곡남중학교', description: '졸업', logo: sgnamLogo },
  { name: '가천대학교', description: '컴퓨터공학과 재학', logo: gachonLogo },
]
</script>

<style scoped>
.career-modern {
  max-width: 600px;
  margin: 3rem auto;
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 6px 24px rgba(80,80,120,0.08);
  padding: 2rem 2.5rem;
}
.career-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
}
.career-tabs button {
  background: #e0e7ff;
  border: none;
  border-radius: 1rem 1rem 0 0;
  padding: 0.7rem 1.7rem;
  font-size: 1.1rem;
  color: #3a0ca3;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.career-tabs button.active {
  background: #4361ee;
  color: #fff;
}
.career-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.career-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.school-logo {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 2px solid #a0c4ff;
  background: #fff;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.school-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #fff;
  display: block;
}
strong {
  font-size: 1.15rem;
  color: #22223b;
}
p {
  margin: 0.2rem 0 0 0;
  color: #555;
}
.cert-list, .parttime-list {
  list-style: none;
  padding: 0;
  margin: 1.2rem 0 2.2rem 0;
}
.cert-list li, .parttime-list li {
  margin-bottom: 0.7rem;
  font-size: 1.05rem;
  color: #333;
}
.cert-list span, .parttime-list span {
  color: #888;
  font-size: 0.98rem;
}
</style>
