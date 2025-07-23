<script setup lang="ts">
import { ArrowLeftCircle, CloudDownloadIcon, ExternalLinkIcon, Github } from 'lucide-vue-next'
import { motion } from 'motion-v'

const demolink = 'https://class-scheduling-system.vercel.app/'
const repolink = 'hkashash'
const apklink = 'as'

const goback = () => {
  window.history.back()
}
</script>

<template>
  <div
    class="bg-[#041c32] min-h-screen flex text-white flex-col items-center justify-center relative overflow-hidden p-10"
  >
    <div class="fixed z-50 shadow-md top-0 left-0 p-4">
      <button
        @click="goback"
        class="bg-[#ecb365] p-2 text-[#041c32] rounded-full hover:scale-110 transition"
      >
        <ArrowLeftCircle />
      </button>
    </div>

    <motion.div
      class="flex flex-col items-center justify-center text-white"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5, delay: 0.5 }"
    >
      <h1 class="text-2xl lg:text-4xl text-center font-bold">
        College of Computer Studies <br />
        <span class="text-[#ecb365]">Web-Based Class Scheduling System</span>
      </h1>
      <p class="mt-2 text-lg">Class Scheduling Made Effortless — One Click at a Time</p>
    </motion.div>

    <div class="m-2 flex flex-col sm:flex-row text-sm">
      <button
        :class="[
          ' px-4 m-1 py-1 rounded-sm flex items-center justify-center outline  outline-1',
          demolink ? 'bg-green-700 text-white outline-white' : 'hidden',
        ]"
      >
        <ExternalLinkIcon />
        Live Demo
      </button>
      <button
        :class="[
          ' px-4 m-1 py-1 rounded-sm flex items-center justify-center outline  outline-1',
          repolink ? 'bg-[#04293a] text-white outline-white' : 'hidden',
        ]"
      >
        <Github />
        Repository
      </button>
      <button
        :class="[
          ' px-4 m-1 py-1 rounded-sm flex items-center justify-center outline  outline-1',
          apklink ? 'bg-yellow-600 text-white outline-white' : 'hidden',
        ]"
      >
        <CloudDownloadIcon />
        Apk Download
      </button>
    </div>

    <motion.div class="flex items-center justify-center">
      <div v-viewer class="flex items-center justify-center cursor-zoom-in">
        <motion.img
          src="/classSchedCover.webp"
          alt="Class Scheduling"
          class="w-[100%] sm:w-[50%] rounded-lg m-4"
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{
            type: 'spring',
            stiffness: 120,
            damping: 12,
            delay: 0.5,
          }"
        />
      </div>
    </motion.div>

    <div>
      <p>Key Features:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>🗓️ Smart schedule creation with conflict checking by subject, room, and instructor</li>
        <li>🔐 Role-based access control for administrators and staff</li>
        <li>
          🏫 Modular data management: manage colleges, buildings, classrooms, curriculum, users, and
          more
        </li>
        <li>📚 Automated section timetable generation with dynamic semester/year selection</li>
        <li>🔎 Fast and intuitive UI with real-time search and filters for smooth navigation</li>
        <li>✅ User-friendly form handling for error-free schedule input</li>
      </ul>
    </div>

    <div class="border w-full my-4 border-gray-600" />

    <div class="flex flex-col lg:flex-row justify-center lg:p-10">
      <motion.div
        :initial="{ x: -200, opacity: 0 }"
        :while-in-view="{ x: 0, opacity: 1 }"
        :transition="{ delay: 0.5 }"
      >
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Dashboard Overview</h2>
        <p class="text-gray-300">
          The heart of the system — a clean, organized admin dashboard that gives you a bird’s-eye
          view of the entire scheduling system. Quickly access modules, see record counts, and
          select school year and semester in one place.
        </p>
      </motion.div>

      <div class="flex flex-col lg:flex-row items-center justify-center" v-viewer>
        <img
          src="/webbasedls/ls5.webp"
          alt="Dashboard Overview"
          loading="lazy"
          class="rounded-lg m-4 lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
      </div>
    </div>

    <div class="border w-full my-4 border-gray-600" />

    <div class="flex flex-col lg:flex-row justify-center lg:p-10">
      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/webbasedls/ls4.webp"
          alt="Dashboard Overview"
          loading="lazy"
          class="rounded-lg m-4 lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
      </div>

      <motion.div
        :initial="{ x: 200, opacity: 0 }"
        :while-in-view="{ x: 0, opacity: 1 }"
        :transition="{ delay: 0.5 }"
      >
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">User Management Panel</h2>
        <p class="text-gray-300">
          Easily manage admin and staff accounts with this dynamic user table. Edit or delete users
          with just a click, and maintain proper access rights to keep your system secure and
          organized.
        </p>
      </motion.div>
    </div>

    <div class="border w-full my-4 border-gray-600" />

    <div class="flex flex-col lg:flex-row justify-center lg:p-10">
      <motion.div
        :initial="{ x: -200, opacity: 0 }"
        :while-in-view="{ x: 0, opacity: 1 }"
        :transition="{ delay: 0.5 }"
      >
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Section Schedule Lookup</h2>
        <p class="text-gray-300">
          Need to view or assign a schedule to a specific section? Just select the section name and
          hit search. This module makes navigating section-based schedules quick and hassle-free.
        </p>
      </motion.div>
      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/webbasedls/ls1.webp"
          alt="Dashboard Overview"
          loading="lazy"
          class="rounded-lg m-4 lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
      </div>
    </div>

    <div class="border w-full my-4 border-gray-600" />

    <div class="flex flex-col lg:flex-row justify-center lg:p-10">
      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/webbasedls/ls2.webp"
          alt="Dashboard Overview"
          loading="lazy"
          class="rounded-lg m-4 lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
      </div>

      <motion.div
        :initial="{ x: 200, opacity: 0 }"
        :while-in-view="{ x: 0, opacity: 1 }"
        :transition="{ delay: 0.5 }"
      >
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Weekly Schedule View</h2>
        <p class="text-gray-300">
          A full week at a glance. The system automatically arranges and displays schedules by day
          and time block, showing assigned instructors, rooms, and subjects — all formatted for
          clarity and accuracy.
        </p>
      </motion.div>
    </div>

    <div class="border w-full my-4 border-gray-600" />

    <div class="flex flex-col lg:flex-row justify-center lg:p-10">
      <motion.div
        :initial="{ x: -200, opacity: 0 }"
        :while-in-view="{ x: 0, opacity: 1 }"
        :transition="{ delay: 0.5 }"
      >
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Add New Schedule Form</h2>
        <p class="text-gray-300">
          Flexible schedule creation form with dropdown selectors and time inputs to avoid
          conflicts.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/webbasedls/ls2.webp"
          alt="Dashboard Overview"
          loading="lazy"
          class="rounded-lg m-4 lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
      </div>
    </div>
  </div>
</template>
