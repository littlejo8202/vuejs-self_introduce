<template>
  <section class="about-modern">
    <div class="about-card">
      <img :src="profileImg" alt="프로필" class="avatar" />
      <h2>조민혁</h2>
      <ul class="info-list">
        <li><span>나이</span>23세</li>
        <li><span>사는 곳</span>인천광역시 부평구</li>
        <li><span>이메일</span>littlejo8202@gmail.com</li>
      </ul>
      <blockquote class="motto">“Slow and Steady Wins the Game”</blockquote>
    </div>
  </section>
</template>
<script setup>
import profileImg from '../assets/picture.png'
</script>
<style scoped>
.about-modern {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: linear-gradient(120deg, #f8fafc 0%, #e0e7ff 100%);
}
.about-card {
  background: #fff;
  padding: 2.5rem 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(60, 60, 120, 0.15);
  text-align: center;
  width: 340px;
  transition: box-shadow 0.2s;
}
.about-card:hover {
  box-shadow: 0 12px 40px rgba(60, 60, 120, 0.25);
}
.avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #a0c4ff;
  margin-bottom: 1rem;
}
h2 {
  margin: 0.5rem 0 0.2rem 0;
  font-size: 1.5rem;
  color: #333;
}
.info-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 1.5rem 0;
  text-align: left;
}
.info-list li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  color: #444;
}
.info-list span {
  color: #64748b;
  font-weight: bold;
}
.motto {
  color: #5e60ce;
  font-style: italic;
  background: #f1f3f8;
  border-left: 4px solid #5e60ce;
  padding: 0.6rem 1rem;
  margin: 0;
  border-radius: 0.5rem;
}
</style>
