<template>
  <main class="home-modern">
    <img :src="mainImg" alt="메인 이미지" class="home-image" />
    <h1>Welcome!</h1>
    <p class="intro">
      이 사이트는 조민혁의 자기소개 페이지입니다.<br>
      위 메뉴에서 다양한 정보를 확인해보세요.
    </p>
    
  </main>
</template>

<script setup>
import mainImg from '../assets/picture.png' 
</script>

<style scoped>
.home-modern {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%);
}
.home-image {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(80,80,120,0.12);
  margin-bottom: 2rem;
  background: #fff;
}
h1 {
  font-size: 2.5rem;
  color: #3a0ca3;
  margin-bottom: 1rem;
}
.intro {
  color: #555;
  font-size: 1.15rem;
  margin-bottom: 2rem;
  text-align: center;
}

</style>
