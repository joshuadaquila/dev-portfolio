<script setup lang="ts">
import { ArrowLeftCircle, CloudDownloadIcon, ExternalLinkIcon, Github } from 'lucide-vue-next'
import { motion } from 'motion-v'

const demolink = 'https://patnongon-sk-event-system.netlify.app/login'
const repolink = null
const apklink =
  'https://github.com/joshuadaquila/sk-feedback-system-frontend/releases/download/apk-release/app-release.apk'

const goback = () => {
  window.history.back()
}
</script>

<template>
  <div
    class="bg-[#041c32] min-h-screen flex text-white flex-col items-center justify-center relative overflow-hidden p-6 lg:p-10"
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
        Patnongon Sangguniang Kabataan <br />
        <span class="text-[#ecb365]">Event and Announcement Hub</span>
      </h1>
      <p class="mt-2 text-lg text-center">Engage. Announce. Improve.</p>
    </motion.div>

    <p class="text-sm text-left mt-2">Technology and Tools Used:</p>
    <div
      class="mb-2 flex bg-white bg-opacity-10 p-2 mt-2 outline outline-white outline-1 rounded-xl"
    >
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">React</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">React Native</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">Python</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">MySQL</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">Socket.io</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">Express.js</p>
      </div>
    </div>

    <div class="m-2 flex flex-col sm:flex-row text-sm">
      <a
        :href="demolink ? demolink : '#'"
        target="_blank"
        :class="[
          ' px-4 m-1 py-1 rounded-sm flex items-center justify-center outline  outline-1',
          demolink ? 'bg-green-700 text-white outline-white' : 'hidden',
        ]"
      >
        <ExternalLinkIcon />
        Live Demo
      </a>
      <button
        :class="[
          ' px-4 m-1 py-1 rounded-sm flex items-center justify-center outline  outline-1',
          repolink ? 'bg-[#04293a] text-white outline-white' : 'hidden',
        ]"
      >
        <Github />
        Repository
      </button>
      <a
        v-if="apklink"
        :href="apklink"
        download
        :class="[
          ' px-4 m-1 py-1 rounded-sm flex items-center justify-center outline  outline-1',
          apklink ? 'bg-yellow-600 text-white outline-white' : 'hidden',
        ]"
      >
        <CloudDownloadIcon />
        Apk Download
      </a>
    </div>

    <motion.div class="flex items-center justify-center">
      <div v-viewer class="flex items-center justify-center cursor-zoom-in">
        <motion.img
          src="/sk/skCover.webp"
          alt="Class Scheduling"
          class="w-[100%] sm:w-[50%] rounded-lg m-2"
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

    <div class="lg:w-[80%] m-2">
      <h2 class="text-2xl font-bold mb-2 lg:mt-10">Project Overview</h2>
      <p>
        The SK Event Management System is a real-time event coordination and feedback platform
        tailored for the Sangguniang Kabataan (SK). It allows SK officers to organize events,
        publish announcements, and gather meaningful community feedback. Built-in sentiment analysis
        powered by Logistic Regression and Linear Discriminant Analysis provides insights into the
        effectiveness of events. Developed with a modern tech stack, the system bridges governance
        and citizen engagement through smart automation and analytics.
      </p>
      <div>
        <h2 class="text-2xl font-bold mb-2 lg:mt-10 mt-4">Key Features:</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>📢 Event creation & management with scheduling and venue tagging</li>
          <li>🔔 Real-time notifications via OneSignal and Socket.io</li>
          <li>📊 AI-powered sentiment analysis using trained ML models</li>
          <li>🗨️ Feedback collection system with a clean, mobile-friendly UI</li>
          <li>📅 Event calendar view for clear scheduling</li>
          <li>📂 User account control for SK officials with activity tracking</li>
          <li>📝 Announcement module for broadcasting public notices</li>
          <li>🔍 Insightful reports with pie charts, word clouds, and positive/negative ratios</li>
        </ul>
      </div>
    </div>

    <div class="border w-full my-4 border-gray-600" />

    <div class="flex flex-col lg:flex-row justify-center lg:p-10">
      <motion.div
        :initial="{ x: -200, opacity: 0 }"
        :while-in-view="{ x: 0, opacity: 1 }"
        :transition="{ delay: 0.5 }"
      >
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">
          Empowering Youth Participation—One Event at a Time
        </h2>
        <p class="text-gray-300">
          This dashboard provides a snapshot of past events, showcasing sentiment analysis, keyword
          clouds, and visual reports. See how feedback transforms into actionable insights—50%
          positive and counting.
        </p>
      </motion.div>

      <div class="flex flex-col lg:flex-row items-center justify-center" v-viewer>
        <img
          src="/sk/sk1.webp"
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
          src="/sk/sk3.webp"
          alt="User Management Panel"
          loading="lazy"
          class="rounded-lg m-4 lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
      </div>

      <motion.div
        :initial="{ x: 200, opacity: 0 }"
        :while-in-view="{ x: 0, opacity: 1 }"
        :transition="{ delay: 0.5 }"
      >
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">
          Built for Impact, Designed for Transparency
        </h2>
        <p class="text-gray-300">
          View, edit, or delete past events and get instant sentiment feedback—even when the word
          cloud isn't available. Maintain complete control while staying informed.
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">
          Voices That Matter: Real Feedback, Real Change
        </h2>
        <p class="text-gray-300">
          The feedback modal highlights raw sentiments from attendees. Each comment contributes to
          the system’s machine learning–powered sentiment analysis, helping SK officials refine
          future events.
        </p>
      </motion.div>
      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/sk/sk4.webp"
          alt="Section Schedule Lookup"
          loading="lazy"
          class="rounded-lg m-4 lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
      </div>
    </div>

    <div class="border w-full my-4 border-gray-600" />

    <div class="flex flex-col lg:flex-row justify-center lg:p-10">
      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/sk/sk5.webp"
          alt="Weekly Schedule View"
          loading="lazy"
          class="rounded-lg m-4 lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
      </div>

      <motion.div
        :initial="{ x: 200, opacity: 0 }"
        :while-in-view="{ x: 0, opacity: 1 }"
        :transition="{ delay: 0.5 }"
      >
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Organized People, Organized Data</h2>
        <p class="text-gray-300">
          User Account Management panel where SK officers can track users, manage access, and
          monitor login activity. An efficient way to govern digital participation.
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Clear Communication Starts Here</h2>
        <p class="text-gray-300">
          The Announcement Management interface allows officials to post important updates like
          meetings or symposiums with clarity and ease. Editable, searchable, and highly visible.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/sk/sk6.webp"
          alt="Add New Schedule Form"
          loading="lazy"
          class="rounded-lg m-4 lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
      </div>
    </div>

    <div class="border w-full my-4 border-gray-600" />

    <div class="flex flex-col lg:flex-row justify-center lg:p-10">
      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/sk/sk1.webp"
          alt="Weekly Schedule View"
          loading="lazy"
          class="rounded-lg m-4 lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
      </div>

      <motion.div
        :initial="{ x: 200, opacity: 0 }"
        :while-in-view="{ x: 0, opacity: 1 }"
        :transition="{ delay: 0.5 }"
      >
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Events at a Glance</h2>
        <p class="text-gray-300">
          This calendar view ensures that no event is overlooked. With month, week, and day filters,
          users and officials alike can plan ahead confidently and collaboratively.
        </p>
      </motion.div>
    </div>
  </div>
</template>
