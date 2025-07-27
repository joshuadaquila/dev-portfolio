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
        Balay ni JUAN <br />
        <span class="text-[#ecb365]">Hotel Management System</span>
      </h1>
      <p class="mt-2 text-lg text-center">Manage Rooms. Track Guests. Simplify Stays.</p>
    </motion.div>

    <p class="text-sm text-left mt-2">Technology and Tools Used:</p>
    <div
      class="mb-2 flex bg-white bg-opacity-10 p-2 mt-2 outline outline-white outline-1 rounded-xl"
    >
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">React</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">Electron</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">Express</p>
      </div>
      <div class="flex flex-col items-center mx-1">
        <p class="text-xs">SQLite</p>
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
          src="/hotelms/hotelmsCover.webp"
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
        This Hotel Management System is designed to digitize and simplify core hotel operations.
        Built as a cross-platform desktop application using Electron.js, it features modular
        components to handle guest records, room availability, billing, check-in/check-out
        workflows, and reporting—all while working offline. Its intuitive UI and clean layouts
        enable staff to navigate quickly, search efficiently, and manage the property with
        confidence. The system is ideal for establishments seeking a reliable, local-first solution
        without cloud dependencies.
      </p>
      <div>
        <h2 class="text-2xl font-bold mb-2 lg:mt-10 mt-4">Key Features:</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            🏨 Room Management Dashboard – Real-time room status (available, occupied, reserved)
          </li>
          <li>🧑‍💼 Guest Record System – Track guest info, stay history, and contact details</li>
          <li>📆 Booking & Reservation Workflow – Streamlined check-in/check-out process</li>
          <li>💸 Billing Module – Auto-generate bills with stay duration and room type</li>
          <li>📑 Printable Reports – Export guest logs and booking summaries</li>
          <li>📴 Offline-First Architecture – Works without internet access</li>
          <li>
            🖥️ User-Friendly Desktop UI – Built with Electron.js and optimized for staff usability
          </li>
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Room Status Overview</h2>
        <p class="text-gray-300">
          “At-a-glance room availability made effortless.” This screen displays the status of all
          rooms—categorized as vacant, occupied, or reserved. The color-coded layout helps
          receptionists instantly identify room availability during check-in or walk-in situations.
        </p>
      </motion.div>

      <div class="flex flex-col lg:flex-row items-center justify-center" v-viewer>
        <img
          src="/hotelms/h1.webp"
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
          src="/hotelms/h2.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Reservation and Booking Form</h2>
        <p class="text-gray-300">
          “Fast and simple guest reservations.” A user-friendly form that captures essential booking
          information—name, contact, check-in/out dates, and room preferences. Designed to reduce
          friction and human error in front desk operations.
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Guest Record List</h2>
        <p class="text-gray-300">
          “Every guest, every visit—tracked and stored.” Browse and manage all guest records with
          filtering and search options. Whether for audits or return guests, this view keeps hotel
          data well-organized and accessible.
        </p>
      </motion.div>
      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/hotelms/h4.webp"
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
          src="/hotelms/h5.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Billing Summary</h2>
        <p class="text-gray-300">
          “Transparent billing, simplified.” Easily generate a guest's billing summary, including
          stay duration, selected room, and charges. Ideal for check-out procedures or payment
          verification.
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Room Assignment View</h2>
        <p class="text-gray-300">
          “Assign rooms with clarity and speed.” Assign or reassign rooms with a clean dropdown
          interface. Designed for real-time changes during guest intake or booking adjustments.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/hotelms/h3.webp"
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
          src="/hotelms/h8.webp"
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">Weekly Schedule View</h2>
        <p class="text-gray-300">
          “Generate and export reports with one click.” Whether it's a summary of check-ins or
          detailed transaction history, this module lets you export reports for auditing or
          record-keeping.
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
        <h2 class="text-2xl font-bold mb-2 lg:mt-10">User Management Panel</h2>
        <p class="text-gray-300">
          “Empower access control with clarity and ease.” This is the User Management interface,
          where administrators can effortlessly manage accounts within the system. Whether assigning
          admin roles or registering new front desk users, this module ensures secure access and
          role-based control—all through a clean, paginated interface with quick edit and delete
          actions. The search and filter options keep large user lists manageable as the hotel
          grows.
        </p>
      </motion.div>

      <div class="flex items-center justify-center" v-viewer>
        <img
          src="/hotelms/h7.webp"
          alt="Add New Schedule Form"
          loading="lazy"
          class="rounded-lg m-4 lg:w-[80%] hover:scale-105 transition cursor-zoom-in"
        />
      </div>
    </div>
  </div>
</template>
