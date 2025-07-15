<script lang="ts">
export default {
  data() {
    return {
      title: 'Dev Portfolio',
      description: 'A simple portfolio page built with Vue 3 and Vuetify.',
      status: 'active',
      tasks: [
        { id: 1, name: 'Project 1', completed: false, link: 'https://google.com' },
        { id: 2, name: 'Project 2', completed: true },
        { id: 3, name: 'Project 3', completed: false },
      ],
    }
  },
}
</script>

<template>
  <section>
    <h1 class="text-red-300">{{ title }}</h1>
    <p v-if="status === 'active'">{{ description }}</p>

    <ul>
      <li v-for="task in tasks" :key="task.id" class="border">
        <checkbox v-model="task.completed" :label="task.name"></checkbox>
        <a :href="task.link">Click Me</a>
        <button
          v-on:click="task.completed = !task.completed"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {{ task.completed ? 'Completed' : 'Not Completed' }}
        </button>
      </li>
    </ul>
  </section>
</template>
