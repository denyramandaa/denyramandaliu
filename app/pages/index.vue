<template>
  <div class="w-full font-sans bg-black">
    <HeroSection />
    <div class="w-full bg-[#252023] text-white py-8 lg:py-16 text-lg">
      <div class="w-full mx-auto">
        <ClientOnly>
          <Swiper
            :modules="modules"
            :slides-per-view="6"
            :space-between="4"
            :speed="2000"
            :autoplay="{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false
            }"
            loop
            :loop-additional-slides="5"
            free-mode
            free-mode-momentum="false"
            allow-touch-move="false"
            :centered-slides="false"
            :watch-slides-progress="true"
            :breakpoints="{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
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
              <Icon
                :name="n"
                class="text-white text-8xl"
              />
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
    </div>
    <div class="w-full text-white pt-10 text-lg bg-[#252023]">
      <h2 class="w-full px-4 max-w-[640px] mx-auto mb-8 text-8xl font-bebas text-center">ABOUT ME</h2>
      <!-- <img class="w-[60px] mx-auto mb-12" src="/images/logo.svg" alt="logo D"> -->
      <p class="w-full px-4 max-w-[640px] mx-auto mb-4"><span class="text-[68px] font-bold float-left mr-2 leading-[.72em] block">Hi</span>I’m Deny — a senior front-end developer with over 9 years of experience building production-ready web applications for media, startups, and enterprise environments.</p>
      <p class="w-full px-4 max-w-[640px] mx-auto">I specialize in transforming complex requirements into clean, scalable, and maintainable interfaces, while ensuring performance, accessibility, and strong visual quality.</p>
      <div class="flex items-center px-4 max-w-[640px] mx-auto text-xl py-8">
        <div class="w-[4px] h-[80px] relative bg-yellow-600"></div>
        <h3 class="pl-4 font-lora font-bold text-yellow-600">With a background in both engineering and design, I bridge the gap between design vision and technical execution.</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay  } from 'swiper/modules'

const modules = [Autoplay]

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

])
</script>

<style>
.smooth-swiper .swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>
