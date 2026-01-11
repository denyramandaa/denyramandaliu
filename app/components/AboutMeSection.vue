<template>
  <div
    class="w-full text-white py-10 lg:py-20 text-2xl bg-[#161616] rounded-t-[50px] lg:rounded-t-[10%]"
  >
    <div class="w-full px-4 max-w-[1000px] mx-auto mb-8 lg:mb-10">
      <h2 v-scroll-reveal class="w-full mx-auto mb-1 text-4xl font-bebas">
        <Icon
          class="text-center text-6xl"
          name="streamline-freehand:work-from-home-user-pet-cat"
        />
        ABOUT ME
      </h2>
      <p v-scroll-reveal class="w-full pr-[20%] text-base font-poppins">
        I’m senior front-end developer with over 9 years of experience building
        production-ready web applications for media, startups, and enterprise
        environments. I specialize in transforming complex requirements into
        clean, scalable, and maintainable interfaces, while ensuring
        performance, accessibility, and strong visual quality.
      </p>
    </div>
    <div class="w-full px-4 lg:px-0 max-w-[1400px] mx-auto">
      <p
        v-scroll-reveal
        class="w-full mx-auto text-3xl lg:text-[60px] font-poppins leading-[1.2] text-start lg:text-center font-bold"
      >
        <span class="w-[10%] lg:w-[12%] inline-block"></span>With a background
        in both engineering and design,
        <span class="text-yellow-600"
          >I bridge the gap between design vision and technical execution.</span
        >
      </p>
      <div
        v-scroll-reveal
        class="w-max mx-auto mt-10 border border-white rounded-full px-6 py-2 cursor-pointer text-sm lg:text-lg"
      >
        <NuxtLink to="/projects"> See My Work </NuxtLink>
      </div>
    </div>
  </div>
</template>
