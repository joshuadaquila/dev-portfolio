<script setup lang="ts">
import { ArrowLeftCircle, CloudDownloadIcon, ExternalLinkIcon, Github } from 'lucide-vue-next'
import { motion } from 'motion-v'

const demolink = 'https://alumni-hub.netlify.app'
const repolink = null
const apklink = null

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
        University of Antique <br />
        <span class="text-[#ecb365]">Alumni Engagement Hub</span>
      </h1>
      <p class="mt-2 text-lg text-center">
        Empowering Alumni Connections Through Smart Digital Engagement
      </p>
    </motion.div>

    <p class="text-sm text-left mt-2">Technology and Tools Used:</p>
    <div
      class="mb-2 flex flex-wrap justify-center bg-white bg-opacity-10 p-2 mt-2 outline outline-white outline-1 rounded-xl"
    >
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">React</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">MySQL</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">React Native</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">SQLite</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">Express.js</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">Socket.io</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">Firebase</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">OpenAI GPT API</p>
      </div>
    </div>

    <div class="m-2 flex flex-col sm:flex-row text-sm">
      <a
        :href="demolink ? demolink : '#'"
        :class="[
          ' px-4 m-1 py-1 rounded-sm flex items-center justify-center outline  outline-1',
          demolink ? 'bg-green-700 text-white outline-white' : 'hidden',
        ]"
      >
        <ExternalLinkIcon />
        Live Link
      </a>
      <a
        :href="repolink ? repolink : '#'"
        :class="[
          ' px-4 m-1 py-1 rounded-sm flex items-center justify-center outline outline-1',
          repolink ? 'bg-[#04293a] text-white outline-white' : 'hidden',
        ]"
      >
        <Github />
        Repository
      </a>
      <a
        :href="apklink ? apklink : '#'"
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
          src="/alumnihub/alumniHubCover.webp"
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
        The University of Antique Alumni Engagement Hub is a dual-platform system built with React,
        React Native, Express.js, MySQL, and SQLite, designed to strengthen engagement between the
        university and its graduates through digital innovation. The system streamlines alumni
        profiling, event coordination, real-time messaging, and data-driven tracer studies while
        offering a social platform-like experience for graduates to interact.
      </p>
      <div>
        <h2 class="text-2xl font-bold mb-2 lg:mt-10 mt-4">Key Features:</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            🔐 Authentication system with JWT-based login (React Admin + React Native user side)
          </li>
          <li>🔔 Real-time notifications via OneSignal + Firebase Cloud Messaging</li>
          <li>🧠 AI-powered report summaries using OpenAI GPT model for tracer study insights</li>
          <li>📬 Live messaging using Socket.IO for alumni-staff interaction</li>
          <li>📊 Advanced data profiling modules: Employment, Demographics, Contributions</li>
          <li>📸 Engagement feed with media sharing, likes, and comments — similar to LinkedIn</li>
          <li>🗓️ Event creation and attendance tracking with report exports (PDF)</li>
          <li>📤 PDF export for reports like survey responses, alumni lists, and analytics</li>
          <li>🎨 Styled using Tailwind CSS for consistency and responsiveness across platforms</li>
          <li>💾 Multer-powered image upload system for secure photo contributions</li>
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Admin Dashboard</h2>
        <p class="text-gray-300">
          A clean and intuitive admin dashboard showing the total alumni count and a visual chart of
          graduation year and program distribution. All core modules are neatly placed in the
          sidebar for quick access.
        </p>
      </motion.div>

      <div class="flex flex-col lg:flex-row flex-wrap items-center justify-center" v-viewer>
        <img
          src="/alumnihub/ah1.webp"
          alt="Dashboard 1"
          loading="lazy"
          class="rounded-lg lg:m-4 mt-4 lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
        <img
          src="/alumnihub/ah10.webp"
          alt="Dashboard 2"
          loading="lazy"
          class="rounded-lg hidden m-4 lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
      </div>
    </div>

    <div class="border w-full my-4 border-gray-600" />

    <div class="flex flex-col lg:flex-row justify-center lg:p-10">
      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/alumnihub/ah2.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">List of Alumni</h2>
        <p class="text-gray-300">
          The alumni table features advanced filtering and export-ready data, making it easy for
          admins to generate reports, print summaries, and conduct alumni profiling.
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Event Management</h2>
        <p class="text-gray-300">
          Manage alumni events with date, time, venue, and attendee data. Events are categorized
          into upcoming, ongoing, and past, allowing better tracking and participation management.
        </p>
      </motion.div>
      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/alumnihub/ah3.webp"
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
          src="/alumnihub/ah5.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Graduate Tracer Survey Responses</h2>
        <p class="text-gray-300">
          All submitted tracer survey responses are listed with a “See Response” button, giving
          admins direct access to alumni feedback and export options.
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Community Messagebox</h2>
        <p class="text-gray-300">
          Real-time chat interface for seamless admin-to-alumni communication. Powered by Socket.IO,
          the chat ensures instant replies and engagement.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/alumnihub/ah4.webp"
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
          src="/alumnihub/ah6.webp"
          alt="Weekly Schedule View"
          loading="lazy"
          class="rounded-lg m-4 lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
        <img
          src="/alumnihub/ah7.webp"
          alt="Weekly Schedule View"
          loading="lazy"
          class="rounded-lg m-4 hidden lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
        <img
          src="/alumnihub/ah8.webp"
          alt="Weekly Schedule View"
          loading="lazy"
          class="rounded-lg hidden m-4 lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
      </div>

      <motion.div
        :initial="{ x: 200, opacity: 0 }"
        :while-in-view="{ x: 0, opacity: 1 }"
        :transition="{ delay: 0.5 }"
      >
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Alumni Profiling Insights</h2>
        <p class="text-gray-300">
          The system presents powerful visual summaries of alumni demographics, employment, and
          contributions through interactive pie charts—automatically interpreted using OpenAI’s GPT
          model. These AI-powered insights help the university understand graduate engagement, align
          academic offerings with industry trends, and recognize standout alumni.
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">AI Data Analytics Report</h2>
        <p class="text-gray-300">
          OpenAI GPT model analyzes alumni tracer responses and generates written insights on career
          progression, job satisfaction, and curriculum relevance.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/alumnihub/ah9.webp"
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
          src="/alumnihub/ss2.webp"
          alt="Weekly Schedule View"
          loading="lazy"
          class="rounded-lg m-4 w-64 hover:scale-105 transition cursor-zoom-in"
        />
      </div>

      <motion.div
        :initial="{ x: 200, opacity: 0 }"
        :while-in-view="{ x: 0, opacity: 1 }"
        :transition="{ delay: 0.5 }"
        class="ml-4"
      >
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Real-Time Messaging</h2>
        <p class="text-gray-300">
          Chat like you're on Messenger! This live chat feature allows instant conversations between
          alumni and admins—made possible by Socket.IO.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/alumnihub/ss3.webp"
          alt="Weekly Schedule View"
          loading="lazy"
          class="rounded-lg m-4 w-64 hover:scale-105 transition cursor-zoom-in"
        />
      </div>

      <motion.div
        :initial="{ x: 200, opacity: 0 }"
        :while-in-view="{ x: 0, opacity: 1 }"
        :transition="{ delay: 0.5 }"
        class="ml-4"
      >
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Alumni Profile View</h2>
        <p class="text-gray-300">
          View detailed alumni profiles including name, course, and graduation year. A clean layout
          ensures easy navigation to posts and updates.
        </p>
      </motion.div>
    </div>

    <div class="border w-full my-4 border-gray-600" />

    <div class="flex flex-col lg:flex-row justify-center lg:p-10">
      <motion.div
        :initial="{ x: -200, opacity: 0 }"
        :while-in-view="{ x: 0, opacity: 1 }"
        :transition="{ delay: 0.5 }"
        class="ml-4"
      >
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Graduate Tracer Survey Form</h2>
        <p class="text-gray-300">
          Officially aligned with CHED standards, this mobile-optimized form allows alumni to submit
          vital tracer survey data—quickly and accurately.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/alumnihub/ss4.webp"
          alt="Weekly Schedule View"
          loading="lazy"
          class="rounded-lg m-4 w-64 hover:scale-105 transition cursor-zoom-in"
        />
      </div>

      <motion.div
        :initial="{ x: -200, opacity: 0 }"
        :while-in-view="{ x: 0, opacity: 1 }"
        :transition="{ delay: 0.5 }"
        class="ml-4"
      >
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Create a Post with Image Upload</h2>
        <p class="text-gray-300">
          Just like LinkedIn—users can post status updates, upload photos, and express thoughts.
          Others can view, like, and comment for engagement.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/alumnihub/ss5.webp"
          alt="Weekly Schedule View"
          loading="lazy"
          class="rounded-lg m-4 w-64 hover:scale-105 transition cursor-zoom-in"
        />
      </div>
    </div>
  </div>
</template>
