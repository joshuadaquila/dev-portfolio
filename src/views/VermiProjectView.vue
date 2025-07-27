<script setup lang="ts">
import { ArrowLeftCircle, CloudDownloadIcon, ExternalLinkIcon, Github } from 'lucide-vue-next'
import { motion } from 'motion-v'

const demolink = null
const repolink = null
const apklink =
  'https://github.com/joshuadaquila/vermiExpertApp/releases/download/apk-release/vermi-appv2.1.apk'

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
        VermiExpert <br />
        <span class="text-[#ecb365]"
          >AI-Powered Vermibed Health Monitoring and Expert Recommendation System (Thesis)</span
        >
      </h1>
      <p class="mt-2 text-lg text-center">Assess. Predict. Optimize Your Vermibeds with AI.</p>
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
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">Python</p>
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
          src="/vermi/vermicover.webp"
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
        VermiExpert is a smart mobile application designed to assist farmers and compost managers in
        maintaining healthy vermicomposting beds. Integrated with a custom Bluetooth-enabled
        hardware setup, the app continuously gathers temperature, moisture, and pH data from the
        vermibed in real time. These readings are then analyzed through an embedded Decision Tree
        model to classify the current state of the bed as favorable or unfavorable. When conditions
        are found to be suboptimal, VermiExpert activates its rule-based expert system to deliver
        tailored and actionable recommendations—helping users respond proactively and maintain
        optimal composting environments.
      </p>
      <div>
        <h2 class="text-2xl font-bold mb-2 lg:mt-10 mt-4">Key Features:</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            📡 Real-time vermibed monitoring via Bluetooth-connected sensors (temperature, moisture,
            pH)
          </li>
          <li>
            🌡️ Environmental data visualization with live mini-charts for spotting trends and
            abnormalities
          </li>
          <li>
            🧠 AI-powered assessment using a trained Decision Tree model for classifying bed
            conditions
          </li>
          <li>
            📋 Expert recommendations generated through a rule-based inference engine for actionable
            guidance
          </li>
          <li>👍 Multi-bed management to track multiple vermicomposting setups independently</li>
          <li>
            📂 Assessment history logs with timestamps and CSV export support for offline reporting
          </li>
          <li>⭐ Favorites tagging for bookmarking important assessments for quick reference</li>
          <li>🌓 Modern mobile interface with theme toggle (dark/light) and offline support</li>
        </ul>
      </div>
    </div>

    <div class="border w-full my-4 border-gray-600" />

    <div class="flex flex-col lg:flex-row justify-center lg:p-10">
      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/vermi/v1.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Live Sensor Monitoring</h2>
        <p class="text-gray-300">
          Here’s where it all begins—real-time readings of temperature, moisture, and pH streamed
          wirelessly from your vermibed. Farmers don’t need guesswork anymore—just a glance tells
          them whether the environment is thriving or needs attention, with vibrant visuals that
          speak louder than numbers.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/vermi/v2.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Smart Assessment Dashboard</h2>
        <p class="text-gray-300">
          Instead of interpreting charts or metrics, the app instantly tells you the current
          condition—Favorable or Unfavorable. Powered by a Decision Tree model trained on real data,
          this screen delivers smart classifications that simplify decision-making for every grower,
          beginner or expert.
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Expert Recommendation Screen</h2>
        <p class="text-gray-300">
          If something’s wrong, VermiExpert doesn’t just alert you—it tells you why and what to do.
          This screen becomes your digital mentor, offering expert recommendations based on proven
          agricultural rules. It’s not just data; it’s guidance farmers can trust.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/vermi/v3.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">History & Log Export</h2>
        <p class="text-gray-300">
          Each result you gather becomes part of your journey. This history log not only archives
          every past reading and result—it lets you export them with a tap, empowering you to track
          progress, share records, or analyze trends over time.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/vermi/v4.webp"
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
          src="/vermi/v5.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Vermibed Management</h2>
        <p class="text-gray-300">
          No matter how many vermibeds you manage, this screen keeps everything organized.
          Seamlessly add, remove, or monitor multiple beds—perfect for expanding farms or
          experimental setups that need focused attention per unit.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/vermi/v6.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Saved Favorite</h2>
        <p class="text-gray-300">
          Not all assessments are created equal—some need to be remembered. This screen gives you
          the power to save those moments when things went right (or wrong), so you can revisit them
          later for comparison, learning, or sharing.
        </p>
      </motion.div>
    </div>
  </div>
</template>
