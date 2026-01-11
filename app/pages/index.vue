<template>
  <div class="w-full font-poppins bg-black">
    <HeroSection id="hero" />
    <AboutMeSection id="about" />
    <WhatIDoSection id="whatido" />
    <ProjectsSection id="projects" />
    <BlogSection id="blog" />
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
:root {
  --ease-hero: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-content: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-ui: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-fast: cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal-item {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity var(--reveal-duration, 700ms)
      var(--reveal-ease, var(--ease-content)),
    transform var(--reveal-duration, 700ms)
      var(--reveal-ease, var(--ease-content));
  will-change: transform, opacity;
}

.reveal-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
