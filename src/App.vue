<template>
  <div id="app">
    <header>
      <h1>My Vue App</h1>
    </header>

    <h1 class="text-3xl font-bold text-red-600 underline">Hello world!</h1>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2025</p>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>
