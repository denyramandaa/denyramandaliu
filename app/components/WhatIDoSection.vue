<template>
  <div class="w-full bg-[#161616]">
    <div
      class="w-full bg-[#1a1a1a] text-white py-8 lg:py-16 text-lg rounded-t-[50px] lg:rounded-t-[10%] shadow-lg"
    >
      <h2
        class="w-full mx-auto mb-6 lg:mb-10 text-6xl lg:text-8xl font-bebas text-center mt-8 lg:mt-12"
      >
        <Icon
          v-scroll-reveal
          class="text-center text-5xl lg:text-6xl block text-center w-full translate-y-[6px]"
          name="streamline-freehand:programming-keyboard-type"
        />
        <p v-scroll-reveal>What I Do?</p>
      </h2>
      <div class="w-full px-4 lg:px-0">
        <div
          class="w-full mx-auto text-center text-base lg:text-xl font-poppins flex gap-6 lg:max-w-[80%] flex-col lg:flex-row"
        >
          <div class="w-full lg:w-1/3">
            <Icon
              v-scroll-reveal
              name="streamline-freehand:programming-user-code"
              class="text-white text-8xl"
            />
            <p v-scroll-reveal>
              I specialize in
              <span
                class="text-2xl lg:text-3xl text-shadow-lg text-shadow-white font-bold"
                >Web Development</span
              >, working across front-end and back-end technologies to build
              <span class="text-yellow-600"
                >CMS platforms, company profiles, and digital invitations</span
              >
              from concept to deployment.
            </p>
            <p v-scroll-reveal class="text-sm font-poppins text-gray-500 mt-4">
              Vue/Nuxt, React/Next, Node, PHP, Google Cloud Platform, SQL,
              Tailwind, Wordpress, Laravel
            </p>
          </div>
          <div class="w-full lg:w-1/3">
            <Icon
              v-scroll-reveal
              name="streamline-freehand:design-tool-pen-brush-cup"
              class="text-white text-8xl"
            />
            <p v-scroll-reveal>
              With a strong design sense, I contribute through
              <span
                class="text-2xl lg:text-3xl text-shadow-lg text-shadow-white font-bold"
                >Design & Creative</span
              >,
              <span class="text-yellow-600"
                >producing UI designs and 2D/3D assets</span
              >
              that enhance digital experiences.
            </p>
            <p v-scroll-reveal class="text-sm font-poppins text-gray-500 mt-4">
              Figma, Blender 3D, Photoshop, After Effects, Premiere, Adobe
              Illustrator
            </p>
          </div>
          <div class="w-full lg:w-1/3">
            <Icon
              v-scroll-reveal
              name="streamline-freehand:business-management-team-up"
              class="text-white text-8xl"
            />
            <p v-scroll-reveal>
              I also bring strong
              <span
                class="text-2xl lg:text-3xl text-shadow-lg text-shadow-white font-bold"
                >Leadership and Professional</span
              >
              skills, supported by
              <span class="text-yellow-600"
                >5+ years of experience in technical leadership</span
              >
              , mentorship, people and project coordination, system architecture
              thinking, and fluent communication in Bahasa Indonesia and
              English.
            </p>
          </div>
        </div>
        <div class="mt-12">
          <p class="mb-4 text-center" v-scroll-reveal>
            Want great interaction and a visually stunning website?<br>
            Or maybe you’re looking for someone who can help lead your projects?
          </p>
          <div
            class="flex flex-col lg:flex-row items-center justify-center gap-4"
          >
            <a
              v-scroll-reveal
              :href="whatsAppLink"
              target="_blank"
              rel="noopener noreferrer"
              class="w-max bg-yellow-600 text-[#1a1a1a] rounded-full px-6 py-2 cursor-pointer text-sm lg:text-lg font-bold"
            >
              Chat on WhatsApp
            </a>
            <a
              v-scroll-reveal
              :href="emailLink"
              class="w-max border border-white rounded-full px-6 py-2 cursor-pointer text-sm lg:text-lg"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
      <div v-scroll-reveal class="w-full mx-auto mt-10">
        <ClientOnly>
          <Swiper
            :modules="modules"
            :slides-per-view="6"
            :space-between="4"
            :speed="2000"
            :autoplay="{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }"
            loop
            :loop-additional-slides="5"
            free-mode
            free-mode-momentum="false"
            allow-touch-move="false"
            :centered-slides="false"
            :watch-slides-progress="true"
            :breakpoints="{
              0: { slidesPerView: 4 },
              640: { slidesPerView: 4 },
              768: { slidesPerView: 6 },
              1024: { slidesPerView: 6 },
              1280: { slidesPerView: 8 },
            }"
            class="w-full smooth-swiper"
          >
            <SwiperSlide
              v-for="n in techSkills"
              :key="n"
              class="flex items-center justify-center"
            >
              <Icon :name="n" class="text-white text-6xl lg:text-8xl" />
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const modules = [Autoplay];

const techSkills = ref([
  "fa7-brands:html5",
  "fa7-brands:css3-alt",
  "fa7-brands:js",
  "fa7-brands:vuejs",
  "fa7-brands:react",
  "fa7-brands:figma",
  "fa7-brands:node",
  "fa7-brands:php",
  "fa7-brands:laravel",
  "fa7-brands:wordpress",
  "fa7-brands:java",
  "fa7-brands:android",
  "fa7-brands:python",
  "fa7-brands:openai",
  "fa7-brands:docker",
  "fa7-brands:npm",
  "fa7-brands:git-square",
  "fa7-brands:github",
]);

const phoneNumber = "6281995440458";
const email = "denyramanda07@gmail.com";

const whatsAppMessage =
  "Hi Deny, I'm interested in building a website. Can we discuss?";

const emailSubject = "Website Inquiry";
const emailBody =
  "Hi Deny,\n\nI'm interested in building a website and would like to discuss further.\n\nThanks.";

const whatsAppLink = computed(() => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsAppMessage
  )}`;
});

const emailLink = computed(() => {
  return `mailto:${email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;
});
</script>
