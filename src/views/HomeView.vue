<template>
  <AnimatedBackground>
    <motion.div
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ duration: 1 }"
      class="flex flex-col items-center text-white px-4 py-6"
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

          <div
            class="flex lg:flex-row flex-col gap-1 lg:gap-2 lg:flex-wrap bg-white bg-opacity-10 px-2 py-1 outline outline-1 outline-white m-1 rounded-lg"
          >
            <div class="flex flex-col gap-1 lg:gap-2">
              <a
                href="mailto:joshuanomong@gmail.com"
                class="flex hover:text-blue-400 content-center gap-1"
                ><Mail /> joshuanomong@gmail.com</a
              >
              <a
                href="https://github.com/joshuadaquila"
                class="flex hover:text-blue-400 content-center gap-1"
                ><Github /> joshuadaquila</a
              >
            </div>

            <div class="flex flex-col gap-1 lg:gap-2">
              <p class="flex content-center gap-1"><PhoneCall /> +63 935 790 1126</p>
              <p class="flex content-center gap-1"><Home />Sibalom, Antique, Philippines</p>
            </div>
          </div>

          <!-- Description -->
          <motion.p
            class="mt-2 text-sm lg:text-lg text-center px-4"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, delay: 0.5 }"
          >
            {{ description }}
          </motion.p>

          <!-- Technology Icons -->
          <motion.div
            class="flex my-8 flex-wrap justify-center gap-4"
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
        <h1 class="text-xl font-semibold mb-4 text-white mt-4">{{ subtitle }}</h1>

        <!-- Scrollable Project Section -->
        <div class="rounded-md p-4 backdrop-blur-md bg-white bg-opacity-10">
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
import { PhoneCall, Mail, Home, Github } from 'lucide-vue-next'

const title = '<CodeWithJoshua/>'
const subtitle = '<Works/>'
const titlePrefix = title.slice(0, 9)
const titleSuffix = title.slice(9)

const description =
  'I’m a passionate software developer with a strong foundation in modern frameworks, design patterns, and development best practices, dedicated to building clean, scalable, and high-performance applications.'

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
    title: 'UA Alumni Engagement Hub',
    description:
      'A cross-platform alumni system that bridges graduates and universities through real-time chat, events, and tracer surveys—powered by AI. Built with React, React Native, and Express.js, it features AI-generated insight reports using OpenAI’s GPT model, turning alumni data into actionable recommendations for institutional improvement. Includes push notifications, profile engagement, media uploads, and dynamic reporting.',
    techStack: [
      'React',
      'React Native',
      'Express.js',
      'MySQL',
      'SQLite',
      'Socket.IO',
      'Firebase',
      'OpenAI GPT',
    ],
    coverImage: '/alumnihub/alumniHubCover.webp',
    projectLink: '/projects/alumni-hub',
  },
  {
    title: 'Patnongon Sangguniang Kabataan Event Management System',
    description:
      'A smart feedback-driven event platform empowering local youth councils to engage with the community. SK officials can send real-time announcements and event alerts, while residents share feedback to help improve future services—an intelligent bridge between SK governance and the people they serve.',
    techStack: [
      'React',
      'React Native',
      'Express.js',
      'MySQL',
      'Socket.IO',
      'Machine Learning',
      'Python',
    ],
    coverImage: '/sk/skCover.webp',
    projectLink: '/projects/sk-event-management-system',
  },
  {
    title: 'CCS Web-Based Class Scheduling System',
    description:
      'A web-based scheduling platform designed to simplify class planning and management for administrators, faculty, and students. Built with PHP, MySQL, and JavaScript, it offers smart scheduling, user role control, and real-time timetable generation—all in one intuitive interface.',
    techStack: ['PHP', 'JavaScript', 'MySQL'],
    coverImage: '/classSchedCover.webp',
    projectLink: '/projects/ccs-web-based-class-scheduling-system',
  },
  {
    title: 'UA Hotel Management System',
    description:
      'A fully offline-capable Hotel Management System built with Electron.js to streamline operations for small to mid-sized hotels. From booking rooms and tracking guests to billing and generating reports, this system ensures reliable performance even without internet access—perfect for hotels in remote or bandwidth-limited areas.',
    techStack: ['Electron.js', 'React', 'SQLite', 'Express.js'],
    coverImage: '/hotelms/hotelmsCover.webp',
    projectLink: '/projects/hotel-management-system',
  },

  {
    title: 'CCS Library Management System',
    description:
      'A C# desktop app built with WinForms and MySQL for managing library operations. Track students, inventory, and transactions in one intuitive dashboard—complete with printable logs and real-time borrow/return status tracking.',
    techStack: ['.NET Framework', 'C#', 'MySQL'],
    coverImage: '/desktopls/dslcover.webp',
    projectLink: '/projects/library-system',
  },
  {
    title: 'VermiExpert',
    description:
      'VermiExpert is an AI-powered mobile app that monitors and assesses vermibed health using real-time sensor data transmitted via Bluetooth. Paired with a hardware setup, it evaluates key environmental parameters—temperature, moisture, and pH—and classifies bed conditions using a trained Decision Tree model. ',
    techStack: [
      'React Native',
      'Machine Learning',
      'IoT',
      'Arduino',
      'SQLite',
      'Python',
      'Rule-Based Expert System',
    ],
    coverImage: '/vermi/vermicover.webp',
    projectLink: '/projects/vermiexpert',
  },
  {
    title: 'PlantGuardian',
    description:
      'PlantGuardian is a smart, sensor-integrated mobile application built with React Native that helps indoor plant lovers care for their greens with confidence. Through real-time Bluetooth communication with a custom hardware setup, the app measures light intensity and temperature, then uses a rule-based expert system to deliver science-backed care recommendations tailored to each plant species. ',
    techStack: ['React Native', 'IoT', 'Arduino', 'SQLite', 'Rule-Based Expert System'],
    coverImage: '/plantcare/plantcareCover.webp',
    projectLink: '/projects/plantcarerecommender-system',
  },
  {
    title: '<CodeWithJoshua/> Portfolio Website',
    description:
      'This is a sleek, responsive portfolio website built with Vue.js, designed to showcase my projects, skills, and experience in an interactive and engaging way. It features smooth navigation, dynamic components, and a clean, modern UI — all powered by Vue’s reactive data handling and component-based architecture. Fully responsive and performance-optimized, this site ensures a consistent user experience across all devices.',
    techStack: ['Built with ❤️ using Vue.js'],
    coverImage: '',
    projectLink: '',
  },
]
</script>
