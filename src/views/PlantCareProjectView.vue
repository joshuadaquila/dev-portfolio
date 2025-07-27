<script setup lang="ts">
import { ArrowLeftCircle, CloudDownloadIcon, ExternalLinkIcon, Github } from 'lucide-vue-next'
import { motion } from 'motion-v'

const demolink = null
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
      <h1 class="text-2xl lg:text-4xl text-center w-full lg:w-[80%] font-bold">
        PlantGuardian <br />
        <span class="text-[#ecb365]">Indoor Plant Care Recommender System</span>
      </h1>
      <p class="mt-2 text-lg text-center">Nurture with Precision, Powered by AI</p>
    </motion.div>

    <p class="text-sm text-left mt-2">Technology and Tools Used:</p>
    <div
      class="mb-2 flex flex-wrap justify-center bg-white bg-opacity-10 p-2 mt-2 outline outline-white outline-1 rounded-xl"
    >
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">React Native</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">SQLite</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">Arduino</p>
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
          src="/plantcare/plantcareCover.webp"
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
        PlantGuardian is a React Native-based mobile application designed to help indoor plant
        owners provide optimal care for their plants. Powered by a Bluetooth-enabled hardware setup,
        the system measures real-time environmental conditions—specifically light intensity and
        temperature—and processes the data through a rule-based expert system to deliver precise and
        actionable plant care recommendations. This project was inspired by the growing trend of
        urban gardening and the challenges many plant parents face in maintaining proper indoor
        conditions. Whether you're trying to save your drooping fiddle leaf fig or want to
        understand why your peace lily is struggling, PlantGuardian translates sensor data into
        meaningful advice. Built with offline-first design principles and a clear, modern UI, the
        app aims to bridge the gap between plant passion and plant science.
      </p>
      <div>
        <h2 class="text-2xl font-bold mb-2 lg:mt-10 mt-4">Key Features:</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>🌱 Plant species browser with scientific names and quick search</li>
          <li>📶 Bluetooth communication with real-time sensor data retrieval</li>
          <li>💡 Live environmental readings for light and temperature</li>
          <li>🧠 Rule-based expert system for generating targeted care recommendations</li>
          <li>📚 Plant profile cards with ideal growing conditions and wellness benefits</li>
          <li>📈 Assessment history logs for long-term plant monitoring</li>
          <li>🔎 Readable, cited recommendations from real academic sources</li>
          <li>📱 Minimalist, mobile-friendly UI with responsive layout and easy navigation</li>
        </ul>
      </div>
    </div>

    <div class="border w-full my-4 border-gray-600" />

    <div class="flex flex-col lg:flex-row justify-center lg:p-10">
      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/plantcare/pc5.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Plant Catalog Home</h2>
        <p class="text-gray-300">
          Browse a curated list of common indoor plants, complete with scientific names. The clean
          interface and search bar make it easy to find your plant and get started with a care
          routine that’s actually data-informed.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/plantcare/pc6.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Detailed Plant Profile</h2>
        <p class="text-gray-300">
          Every plant comes with an info card showing its ideal temperature and light requirements,
          as well as its benefits to indoor spaces. It’s a mix of science and inspiration designed
          to empower users with better understanding and appreciation for each species.
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Live Sensor Data + Recommendation</h2>
        <p class="text-gray-300">
          This screen displays real-time sensor feedback from your environment. Current readings are
          compared against optimal ranges, and any mismatch triggers a tailored recommendation from
          the expert system. Users receive confident, actionable guidance on the spot.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/plantcare/pc3.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Contextual Recommendation Detail</h2>
        <p class="text-gray-300">
          When your plant’s environment isn’t ideal, the system doesn't just say “fix it”—it tells
          you how and why, with reference to real studies. This screen delivers expert-approved
          guidance while educating the user in the process.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/plantcare/pc1.webp"
          alt="Weekly Schedule View"
          loading="lazy"
          class="rounded-lg m-4 w-64 hover:scale-105 transition cursor-zoom-in"
        />
      </div>
    </div>

    <div class="border w-full my-4 border-gray-600" />

    <div class="flex flex-col lg:flex-row justify-center lg:p-10">
      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/plantcare/pc4.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Assessment History</h2>
        <p class="text-gray-300">
          See the plant’s progress over time. This screen shows logged assessments for your chosen
          plant, making it easy to monitor environmental consistency and the results of your
          adjustments. Ideal for proactive plant parenting and long-term care tracking.
        </p>
      </motion.div>
    </div>
  </div>
</template>
