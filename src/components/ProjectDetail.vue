<template>
  <section class="project-detail">
    <button class="back-btn" @click="$router.back()">← 목록으로</button>
    <div v-if="project">
      <h2>{{ project.title }}</h2>
      <img v-if="project.img" :src="project.img" :alt="project.title" class="detail-img" />
      <p class="desc">{{ project.detail }}</p>
    </div>
    <div v-else>
      <p>해당 프로젝트를 찾을 수 없습니다.</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import portpolioImg from '../assets/portpolio.png'
import friend from '../assets/friend.jpg'
import weather from '../assets/weather.jpg'

const projects = [
  {
    id: 1,
    title: "포트폴리오 웹",
    img: portpolioImg,
    detail: "이 프로젝트는 HTML5, CSS, JavaScript로 만든 개인 포트폴리오 웹사이트입니다. 자기소개, 기술스택, 프로젝트 경험 등을 담고 있습니다."
  },
  {
    id: 2,
    title: "팀 프로젝트: 친구 매칭 앱",
    img: friend,
    detail: "지도 API를 활용해 친구를 실시간으로 매칭해주는 앱을 개발했습니다. 위치 기반 서비스와 실시간 알림 기능이 특징입니다."
  },
  {
    id: 3,
    title: "날씨 정보 앱",
    img: weather,
    detail: "OpenWeatherMap API를 연동하여 실시간으로 날씨 정보를 보여주는 웹앱입니다. 지역별 날씨, 아이콘, 온도 등을 확인할 수 있습니다."
  }
]

const route = useRoute()
const project = computed(() =>
  projects.find(p => String(p.id) === route.params.id)
)
</script>

<style scoped>
.project-detail {
  max-width: 600px;
  margin: 3rem auto;
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 6px 24px rgba(80,80,120,0.08);
  padding: 2rem 2.5rem;
}
.back-btn {
  background: none;
  border: none;
  color: #4361ee;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  cursor: pointer;
}
.detail-img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 1rem;
  margin: 1.2rem 0;
  object-fit: contain;
  background: #f0f0f0;
}
.desc {
  font-size: 1.1rem;
  color: #444;
  margin-top: 1rem;
}
</style>
