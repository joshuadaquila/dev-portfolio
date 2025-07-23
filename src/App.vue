<template>
  <div id="app" class="bg-[#041c32] text-gray-900 flex flex-col lexend">
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data() {
    return {
      title: '<Joshua/>',
    }
  },
})
</script>
