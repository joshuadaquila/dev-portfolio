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

  /* overflow: hidden; */
}

/* Geometric pattern overlay */
.animated-background::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  /* width: 200%;
  height: 200%; */
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 40px 40px;
  transform: scale(1);
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
  animation: patternFloat 60s linear infinite;
  z-index: 0;
  pointer-events: none;
  opacity: 0.8; /* Increased base opacity */
}

.animated-background:hover::before {
  transform: scale(1.2) rotate(5deg);
  opacity: 0.7; /* Increased hover opacity */
}

.content {
  position: relative;
  z-index: 10;
  color: #fefefe;
}

/* Background animation */
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

/* Subtle pattern movement */
@keyframes patternFloat {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(40px, 40px);
  }
}
</style>
