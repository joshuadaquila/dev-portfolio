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
      <h1 class="text-2xl lg:text-4xl text-center font-bold">
        College of Computer Studies <br />
        <span class="text-[#ecb365]">Library Management System</span>
      </h1>
      <p class="mt-2 text-lg text-center">
        Smart Desktop Library System — Borrow. Return. Manage. Simplified.
      </p>
    </motion.div>

    <p class="text-sm text-left mt-2">Technology and Tools Used:</p>
    <div
      class="mb-2 flex bg-white bg-opacity-10 p-2 mt-2 outline outline-white outline-1 rounded-xl"
    >
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">.NET Framework</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">MySQL</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">C#</p>
      </div>
    </div>

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
          src="/desktopls/dslcover.webp"
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
        This Library Management System is a Windows desktop application built using MS Visual Studio
        (WinForms), C#, .NET Framework, and MySQL. Designed for academic institutions, it provides a
        robust and user-friendly interface for handling book inventory, student borrowers,
        transaction logs, and borrowing activities—all from one centralized system.
      </p>
      <div>
        <h2 class="text-2xl font-bold mb-2 lg:mt-10 mt-4">Key Features:</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>🧑 Student record management with search, filter, and course tagging</li>
          <li>📚 Book inventory tracking with ISBN, title, and description</li>

          <li>🔄 Borrowing and returning functionality with real-time status updates</li>
          <li>📆 Date-based transaction logs for borrowed/returned books</li>
          <li>🔍 Borrower activity history and record lookup</li>
          <li>🖨️ Printable reports and filter tools for streamlined library audits</li>
          <li>🧼 Clean, offline-capable interface with intuitive buttons and data grid views</li>
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Student Record Module</h2>
        <p class="text-gray-300">
          Add, update, or search for students with ease. Each student record includes name, address,
          and course, stored and linked to borrowing logs.
        </p>
      </motion.div>

      <div class="flex flex-col lg:flex-row items-center justify-center" v-viewer>
        <img
          src="/desktopls/dsl1.webp"
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
          src="/desktopls/dsl2.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Borrowing Module</h2>
        <p class="text-gray-300">
          Select a student, choose a book, and confirm the transaction with a click. This
          streamlined interface makes borrowing quick and accurate.
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Return and Borrow Log</h2>
        <p class="text-gray-300">
          Track which books have been borrowed or returned by whom, and when. Statuses are
          color-coded and sorted for clarity.
        </p>
      </motion.div>
      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/desktopls/ds3.webp"
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
          src="/desktopls/ds4.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Transaction Log with Filter Options</h2>
        <p class="text-gray-300">
          View a complete transaction history with filtering by borrow/return status, date, borrower
          name, or book title. Includes a print-ready report feature for documentation.
        </p>
      </motion.div>
    </div>
  </div>
</template>
