
<template>
  <div class="w-full min-h-screen relative h-full overflow-hidden bg-black text-white">
    <div
      class="absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 px-4 w-full lg:w-max"
      :style="{ transform: textTransform }">
      <h1 class="font-bebas text-[92px] lg:text-[180px] leading-none">DENY RAMANDA LIU</h1>
      <p class="text-left lg:text-center font-sans text-lg lg:text-4xl">Senior Front-End Developer & Creative Engineer</p>
    </div>
    <div
      class="w-full h-auto absolute bottom-0 left-0"
      :style="{ transform: imageTransform }"
    >
      <img
        class="left-1/2 -translate-x-1/2 h-full z-10 relative lg:w-full max-w-[980px]"
        src="/images/hero.png"
        alt="hero"
        draggable="false">
    </div>
    <div
      class="absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 text-transparent z-20 pointer-events-none px-4 w-full lg:w-max"
      :style="{
        transform: textTransform
      }"
    >
      <h2 class="font-bebas text-[92px] lg:text-[180px] leading-none"
      style="
        -webkit-text-stroke: 1px rgba(255,255,255,0.9);
      ">DENY RAMANDA LIU</h2>
      <p class="text-left lg:text-center font-sans text-lg lg:text-4xl text-white">Senior Front-End Developer & Creative Engineer</p>
    </div>
  </div>
</template>

<script setup>
import { useScroll } from '@vueuse/core'
import { computed } from 'vue'

// reactive scroll position
const { y } = useScroll(window)

// parallax tuning
const IMAGE_SPEED = 0.25
const TEXT_SPEED = 0.15
const MAX_OFFSET = 140

const clamp = (v, min, max) => Math.min(Math.max(v, min), max)

// image moves DOWN
const imageTransform = computed(() => {
  const offset = clamp(y.value * IMAGE_SPEED, 0, MAX_OFFSET)
  return `translate(0%, ${offset}px)`
})

// text moves UP
const textTransform = computed(() => {
  const offset = clamp(y.value * TEXT_SPEED, 0, MAX_OFFSET)
  return `translate(-50%, calc(-50% - ${offset}px))`
})
</script>
