<template>
  <div>
    <h1>Sample View</h1>
    <div v-for="n in 100" :key="n">Line {{ n }}</div>
  </div>
</template>
