<template>
  <section class="projects-modern">
    <h2>프로젝트 경험</h2>
    <div class="project-grid">
      <router-link
        v-for="project in projects"
        :key="project.id"
        :to="`/projects/${project.id}`"
        class="project-card-link"
      >
        <div class="project-card">
          <img v-if="project.img" :src="project.img" :alt="project.title" class="project-img" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.desc }}</p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import programing from '../assets/webprograming.png'
import friend from '../assets/friend.jpg'
import weather from '../assets/weather.jpg'

const projects = [
  {
    id: 1,
    title: "포트폴리오 웹",
    desc: "html5,css,javascript로 만든 개인 포트폴리오 사이트",
    img: programing,
    detail: "이 프로젝트는 HTML5, CSS, JavaScript로 만든 개인 포트폴리오 웹사이트입니다. 자기소개, 기술스택, 프로젝트 경험 등을 담고 있습니다."
  },
  {
    id: 2,
    title: "팀 프로젝트: 친구 매칭 앱",
    desc: "지도 API 활용한 실시간 매칭 앱 개발",
    img: friend,
    detail: "지도 API를 활용해 친구를 실시간으로 매칭해주는 앱을 개발했습니다. 위치 기반 서비스와 실시간 알림 기능이 특징입니다."
  },
  {
    id: 3,
    title: "날씨 정보 앱",
    desc: "OpenWeatherMap API를 활용한 실시간 날씨 웹 개발",
    img: weather,
    detail: "OpenWeatherMap API를 연동하여 실시간으로 날씨 정보를 보여주는 웹앱입니다. 지역별 날씨, 아이콘, 온도 등을 확인할 수 있습니다."
  }
]
</script>

<style scoped>
.project-card-link {
  text-decoration: none;
  color: inherit;
}
.projects-modern {
  max-width: 900px;
  margin: 3rem auto;
  padding: 2rem 1rem;
}
h2 {
  color: #4895ef;
  margin-bottom: 2rem;
  text-align: center;
}
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}
.project-card {
  background: #f8f9fa;
  border-radius: 1rem;
  box-shadow: 0 4px 16px rgba(80,80,120,0.07);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.2s;
}
.project-card:hover {
  box-shadow: 0 8px 32px rgba(80,80,120,0.18);
}
.project-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 0.7rem;
  margin-bottom: 1rem;
  background: #eee;
}
h3 {
  color: #22223b;
  margin: 0 0 0.7rem 0;
}
</style>
