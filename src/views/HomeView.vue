<template>
  <AnimatedBackground>
    <motion.div
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ duration: 1 }"
      class="h-screen flex flex-col items-center text-white px-4 py-6"
    >
      <!-- Main container (with fixed layout and overflow control) -->
      <div class="w-full max-w-4xl flex flex-col h-full overflow-hidden">
        <!-- Top Section -->
        <div class="flex-shrink-0 flex flex-col items-center">
          <!-- Profile Picture -->
          <motion.img
            src="/profilepic.webp"
            alt="Profile Picture"
            class="rounded-full h-32 w-32 mx-auto mb-4"
            :initial="{ opacity: 0, scale: 0.8 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.8, delay: 0.2 }"
          />

          <!-- Title -->
          <motion.div
            :initial="{ x: -100, opacity: 0 }"
            :animate="{ x: 0, opacity: 1 }"
            :transition="{ type: 'spring', stiffness: 80 }"
          >
            <h1 class="lg:text-4xl text-3xl font-bold text-[#ecb365] text-center">
              {{ titlePrefix }}<span class="text-white">{{ titleSuffix }}</span>
            </h1>
          </motion.div>

          <!-- Description -->
          <motion.p
            class="mt-3 sm:text-sm lg:text-lg text-center px-4"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, delay: 0.5 }"
          >
            {{ description }}
          </motion.p>

          <!-- Technology Icons -->
          <motion.div
            class="flex my-6 flex-wrap justify-center gap-4"
            :initial="{ scale: 1, opacity: 0 }"
            :animate="{ scale: 1.5, opacity: 1 }"
          >
            <motion.img
              v-for="(icon, index) in techIcons"
              :key="index"
              :src="icon"
              class="h-8 w-8"
              :initial="{ opacity: 0 }"
              :while-hover="{ scale: 1.2 }"
              :animate="{ opacity: [0.3, 1, 0.3] }"
              :transition="{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: index * 0.1,
              }"
            />
          </motion.div>
        </div>
        <!-- <h1 class="text-xl font-semibold mb-4 text-white mt-4">{{ subtitle }}</h1> -->
        <!-- Scrollable Project Section -->
        <div
          class="flex-grow mt-4 overflow-y-auto rounded-md p-4 backdrop-blur-md bg-white bg-opacity-10"
        >
          <ProjectCard
            v-for="(project, i) in projects"
            :key="i"
            :title="project.title"
            :description="project.description"
            :techStack="project.techStack"
            :coverImage="project.coverImage"
            :projectLink="project.projectLink"
          />
        </div>
      </div>
    </motion.div>
  </AnimatedBackground>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v'
import AnimatedBackground from '../components/AnimatedBackground.vue'
import ProjectCard from '@/components/ProjectCard.vue'

const title = '<CodeWithJoshua/>'
const titlePrefix = title.slice(0, 9)
const titleSuffix = title.slice(9)

const description =
  "I'm a passionate software developer with a focus on building clean, scalable, and performant applications. With a strong foundation in modern frameworks, design patterns, and development best practices, I create solutions that are both functional and user-friendly."

const techIcons = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg',
]

const projects = [
  {
    title: 'CCS Web-Based Class Scheduling System',
    description:
      'A web-based scheduling platform designed to simplify class planning and management for administrators, faculty, and students. Built with PHP, MySQL, and JavaScript, it offers smart scheduling, user role control, and real-time timetable generation—all in one intuitive interface.',
    techStack: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
    ],
    coverImage: '/classSchedCover.webp',
    projectLink: '/projects/ccs-web-based-class-scheduling-system',
  },
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce application with user authentication, product management, and payment integration.',
    techStack: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
    ],
    coverImage: '/profilepic.webp',
    projectLink: '/projects/e-commerce-platform',
  },
]
</script>
