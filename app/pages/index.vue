<template>
  <div class="w-full font-poppins bg-black">
    <div
      class="fixed top-0 left-0 w-full flex items-center justify-between text-white z-50 font-bebas"
    >
      <p class="py-4 px-4 text-lg lg:py-8 lg:px-8 lg:text-2xl text-shadow">
        About
      </p>
      <p class="py-4 px-4 text-lg lg:py-8 lg:px-8 lg:text-2xl text-shadow">
        What I Do
      </p>
      <p class="py-4 px-4 text-lg lg:py-8 lg:px-8 lg:text-2xl text-shadow">
        Projects
      </p>
      <p class="py-4 px-4 text-lg lg:py-8 lg:px-8 lg:text-2xl text-shadow">
        Contact
      </p>
    </div>
    <HeroSection />
    <AboutMeSection />
    <WhatIDoSection />
    <ProjectsSection />
    <ContactMeSection />
  </div>
</template>

<script setup></script>

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
