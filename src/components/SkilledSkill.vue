<template>
  <section class="skills-modern">
    <h2>기술 스택</h2>
    <div class="skills-list">
      <div class="skill-chip" v-for="skill in skills" :key="skill.name">
        <img v-if="skill.img" :src="skill.img" :alt="skill.name" class="skill-icon" />
        {{ skill.name }}
      </div>
    </div>
    <div class="github-link">
      <a href="https://github.com/littlejo8202" target="_blank">
        <span>GitHub 바로가기</span>
      </a>
    </div>
  </section>
</template>

<script setup>
import vueLogo from '../assets/vue.png'
import pyLogo from '../assets/python.jpg'
import webprogramingLogo from '../assets/webprograming.png'
import gitLogo from '../assets/git.png'
import virtualbox from '../assets/virtualbox.jpg'

const skills = [
  { name: 'Vue.js', img: vueLogo },
  { name: 'Python', img: pyLogo },
  { name: 'HTML5,CSS3,Javascript', img: webprogramingLogo },
  { name: 'Git', img: gitLogo },
  { name: 'VitualBox', img: virtualbox }
]
</script>

<style scoped>
.skills-modern {
  max-width: 600px;
  margin: 3rem auto;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 18px rgba(60,60,120,0.09);
  padding: 2rem 2.5rem;
  text-align: center;
}
h2 {
  color: #00b4d8;
  margin-bottom: 1.5rem;
}
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}
.skill-chip {
  background: linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%);
  color: #22223b;
  border-radius: 2rem;
  padding: 0.7rem 1.5rem;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(80,80,120,0.08);
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.skill-icon {
  width: 48px;    
  height: 48px;   
  object-fit: contain;
  border-radius: 50%;
  background: #fff;
  display: block;
}

.github-link a {
  color: #4361ee;
  font-weight: bold;
  font-size: 1.1rem;
  text-decoration: none;
  transition: color 0.2s;
}
.github-link a:hover {
  color: #22223b;
}
</style>
