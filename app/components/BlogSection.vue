<template>
  <div class="w-full bg-[#212121]">
    <div
      class="w-full bg-[url('/images/car-animation.jpg')] bg-cover bg-center bg-no-repeat text-white py-8 lg:py-16 text-lg shadow-lg min-h-[50vh] flex items-center justify-center relative"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      <!-- Content -->
      <h2
        v-scroll-reveal
        class="relative z-10 w-full mx-auto text-4xl lg:text-8xl font-bebas text-center mt-8 lg:mt-12"
      >
        Blog is Coming Soon
      </h2>
    </div>
  </div>
</template>
