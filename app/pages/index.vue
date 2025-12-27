<template>
  <div class="w-full font-smooch bg-black">
    <HeroSection />
    <div
      class="w-full text-white py-10 lg:py-20 text-2xl bg-[#161616] rounded-t-[50px] lg:rounded-t-[10%]"
    >
      <img
        class="w-[60px] mx-auto mb-8 lg:mb-12"
        src="/images/logo.svg"
        alt="logo D"
      />
      <div class="w-full px-4 max-w-[1000px] mx-auto mb-8 lg:mb-10">
        <h2 class="w-full mx-auto mb-1 text-4xl font-bebas">ABOUT ME</h2>
        <p class="w-full pr-[20%] text-xl">
          I’m senior front-end developer with over 9 years of experience
          building production-ready web applications for media, startups, and
          enterprise environments. I specialize in transforming complex
          requirements into clean, scalable, and maintainable interfaces, while
          ensuring performance, accessibility, and strong visual quality.
        </p>
      </div>
      <div class="w-full px-4 lg:px-0 max-w-[1400px] mx-auto">
        <p
          class="w-full mx-auto text-3xl lg:text-[60px] font-poppins leading-[1.2] text-start lg:text-center font-bold"
        >
          <span class="w-[10%] lg:w-[12%] inline-block"></span>With a background
          in both engineering and design,
          <span class="text-yellow-600"
            >I bridge the gap between design vision and technical
            execution.</span
          >
        </p>
        <div
          class="w-max mx-auto mt-10 border border-white rounded-full px-6 py-2 cursor-pointer"
        >
          See My Work
        </div>
      </div>
    </div>
    <div
      class="w-full bg-[#1a1a1a] text-white py-8 lg:py-16 text-lg min-h-screen"
    >
      <h2
        class="w-full mx-auto mb-1 text-6xl lg:text-8xl font-bebas text-center mt-12"
      >
        What I Do?
      </h2>
      <p class="w-full max-w-[640px] text-xl mx-auto text-center px-4">
        I focus on web development — but that’s just the beginning. You can also
        count on me for creative design work that complements solid engineering.
        Below is a snapshot of the skills I use to craft complete digital
        experiences.
      </p>
      <div class="w-full px-4 lg:px-0">
        <div
          class="w-full max-w-[840px] mx-auto flex gap-4 overflow-x-auto md:overflow-visible md:grid md:grid-cols-3 md:gap-6 scrollbar-hide snap-x snap-mandatory mt-10"
        >
          <div
            class="min-w-[80%] sm:min-w-[60%] md:min-w-0 border border-white rounded-lg p-4 snap-start"
          >
            <h2 class="text-2xl font-semibold mb-2">Web Development</h2>
            <p class="text-xl opacity-80 leading-[1.3]">
              I work across front-end and back-end technologies to build
              <span class="text-yellow-600 font-bold"
                >CMS platforms, company profiles, and digital invitations</span
              >
              — from concept to deployment.
            </p>
            <p class="text-sm mt-6 font-sans opacity-80">
              Vue/Nuxt, React/Next, Node, PHP, Google Cloud Platform, SQL,
              Tailwind, Wordpress, Laravel
            </p>
          </div>
          <div
            class="min-w-[80%] sm:min-w-[60%] md:min-w-0 border border-white rounded-lg p-4 snap-start"
          >
            <h2 class="text-2xl font-semibold mb-2">Design & Creative</h2>
            <p class="text-xl opacity-80 leading-[1.3]">
              With a strong design sense, I work with tools like Figma, Blender,
              Photoshop, and Illustrator to support and enhance digital
              experiences.
            </p>
            <p class="text-sm mt-6 font-sans opacity-80">
              Figma, Blender 3D, Photoshop, After Effect, Premiere, Adobe
              Illustrator
            </p>
          </div>
          <div
            class="min-w-[80%] sm:min-w-[60%] md:min-w-0 border border-white rounded-lg p-4 snap-start"
          >
            <h2 class="text-2xl font-semibold mb-2">Non-Technical Skills</h2>
            <p class="text-xl opacity-80 leading-[1.3]">
              Fluent in Bahasa Indonesia and English, with
              <span class="text-yellow-600 font-bold"
                >5+ years of experience in leadership</span
              >
              and software engineering management roles.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full mx-auto mt-10 lg:mt-20">
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
</script>

<style>
.smooth-swiper .swiper-wrapper {
  transition-timing-function: linear !important;
}
.scrollbar-hide {
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
