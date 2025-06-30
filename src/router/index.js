import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutMe from '../components/AboutMe.vue'
import CareerMatter from '../components/CareerMatter.vue'
import SkilledSkill from '../components/SkilledSkill.vue'
import ProjectDevelopment from '../components/ProjectDevelopment.vue'
import ProjectDetail from '../components/ProjectDetail.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutMe },
  { path: '/career', component: CareerMatter },
  { path: '/skills', component: SkilledSkill },
  { path: '/projects', component: ProjectDevelopment },
  { path: '/projects/:id', component: ProjectDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
