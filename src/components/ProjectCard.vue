<template>
  <motion.div
    class="relative w-full rounded-lg shadow-lg bg-[#04293A] text-white p-6 my-4 overflow-hidden flex items-stretch"
    :animate="{ y: [0, -10, 0] }"
    :transition="{ duration: 3, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- Animated Cover Image -->
    <motion.div
      class="lg:flex hidden items-center overflow-hidden"
      :animate="{ width: hover ? '33%' : '0%' }"
      :transition="{ duration: 0.5, ease: 'easeInOut' }"
    >
      <div v-viewer>
        <img
          :src="coverImage"
          tooltip="Cover Image"
          alt="Cover"
          class="rounded-lg w-72 object-cover cursor-zoom-in relative"
        />
      </div>
    </motion.div>

    <!-- Text Content -->
    <div class="flex-1 lg:pl-6 transition-all duration-500 overflow-hidden">
      <router-link
        :to="projectLink"
        class="text-2xl font-bold hover:underline hover:opacity-80 text-[#ecb365] mb-2"
        >{{ title }}</router-link
      >
      <p class="text-gray-300 mb-4">
        {{ description }}
      </p>
      <!-- <p class="text-sm text-gray-200">Technology and Tools Used:</p> -->

      <!-- Tech Stack Icons -->
      <div class="flex flex-wrap items-center mt-4">
        <motion.p
          v-for="(tech, index) in techStack"
          :key="index"
          tooltip="tech"
          class="mr-3 opacity-80 rounded-full text-sm m-1 transition-opacity duration-300 bg-[#064663] py-1 px-2"
          :animate="{ opacity: [0.6, 1, 0.6] }"
          :transition="{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: index * 0.1,
          }"
          >{{ tech }}
        </motion.p>
      </div>
    </div>
  </motion.div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v'
import { ref } from 'vue'

defineProps<{
  title: string
  description: string
  techStack: string[]
  coverImage: string
  projectLink: string
}>()

const hover = ref(false)
</script>
