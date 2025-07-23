<template>
  <div class="animated-background">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.animated-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, #064663, #04293a, #041c32, #ecb365);
  background-size: 250% 250%;
  animation: ovalGradientShift 40s ease-in-out infinite;
  z-index: 1;
  overflow: hidden;
}

/* Geometric pattern overlay */
.animated-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: patternFloat 60s linear infinite;
  z-index: 0; /* visible below content, above base */
  pointer-events: none;
  opacity: 1;
  transform: translate(0, 0);
}

.animated-background:hover::before {
  opacity: 0.6;
  transform: translate(20px, 20px) scale(1.1) rotate(2deg);
}

.content {
  position: relative;
  z-index: 2; /* on top of everything */
  color: #fefefe;
}

/* Background gradient shift */
@keyframes ovalGradientShift {
  0% {
    background-position: 20% 30%;
  }
  50% {
    background-position: 80% 70%;
  }
  100% {
    background-position: 20% 30%;
  }
}

/* Geometric pattern float */
@keyframes patternFloat {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(40px, 40px);
  }
}
</style>
