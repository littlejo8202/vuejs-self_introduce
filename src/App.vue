<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/career">Career</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/projects">Projects</router-link>
    </nav>
    <div class="side-widgets">
      <VisitorWidget />
      <ClockWidget />
    </div>
    <router-view />
  </div>
</template>

<script setup>
import VisitorWidget from './components/VisitorWidget.vue'
import ClockWidget from './components/ClockWidget.vue'
</script>

<style>
@import './App.css';

.side-widgets {
  position: fixed;
  right: 0;
  top: 120px;
  width: 220px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
@media (max-width: 900px) {
  .side-widgets { display: none; }
}
</style>
