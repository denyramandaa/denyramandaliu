<template>
  <div class="w-full bg-[#1a1a1a]">
    <div
      class="bg-[url('/images/projects.jpg')] bg-cover bg-center bg-no-repeat w-full text-white py-8 lg:py-16 text-lg rounded-t-[50px] lg:rounded-t-[10%] shadow-lg relative overflow-hidden"
    >
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div class="relative z-1">
        <h2
          v-scroll-reveal
          class="w-full mx-auto text-6xl lg:text-8xl font-bebas text-center mt-8 lg:mt-12"
        >
          <Icon
            class="text-center text-5xl lg:text-6xl block text-center w-full"
            name="streamline-freehand:security-it-service"
          />
          Projects
        </h2>
        <p
          v-scroll-reveal
          class="w-full px-4 max-w-[640px] text-center mx-auto text-sm lg:text-base"
        >
          Below are five selected projects that represent my signature work —
          from interactive experiences to production-ready web platforms.
        </p>
        <div
          v-scroll-reveal
          class="mt-4 flex items-center justify-center gap-3 text-white/60"
        >
          <span class="text-sm uppercase tracking-wider">or</span>
          <NuxtLink
            NuxtLink
            to="/projects"
            class="text-sm font-semibold text-yellow-500 hover:text-yellow-400 transition-colors underline underline-offset-4"
          >
            View all projects
          </NuxtLink>
        </div>
        <div v-scroll-reveal class="w-full py-6 lg:py-12">
          <ClientOnly>
            <Swiper
              class="hero-swiper w-full"
              slides-per-view="auto"
              centered-slides
              :space-between="40"
              :initial-slide="Math.floor(projectsData.length / 2)"
              :modules="modules"
            >
              <SwiperSlide
                v-for="project in projectsData"
                :key="project.id"
                class="hero-slide"
              >
                <div
                  class="relative w-full aspect-square lg:aspect-video bg-cover bg-center rounded-xl overflow-hidden"
                  :style="{
                    backgroundImage: `url(/images/projects/${project.img})`,
                  }"
                >
                  <!-- content -->
                  <div
                    class="slide-content absolute p-2 lg:p-6 bottom-0 left-0 z-30 opacity-0 translate-y-3 transition-all duration-400 ease-out"
                  >
                    <p
                      class="mb-0 lg:mb-2 w-max rounded bg-yellow-600 px-2 py-1 leading-none font-poppins text-[10px] lg:text-xs font-bold text-[#333]"
                    >
                      {{ project.sup }}
                    </p>
                    <h3
                      class="font-bebas text-2xl lg:text-4xl text-white drop-shadow-lg mb-1"
                    >
                      {{ project.title }}
                    </h3>
                    <p
                      class="px-2 py-1 border border-1 w-max rounded lg:mt-2 cursor-pointer text-xs lg:text-sm"
                    >
                      <a :href="project.url" target="_blank">View Project</a>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Controller,
} from "swiper/modules";

const modules = [EffectCoverflow, Navigation, Pagination, Controller];

const projectsData = ref([
  {
    id: "bantimurung",
    sup: "Game and Encyclopedia",
    url: "https://interaktif.kompas.id/baca/kupu-kupu-bantimurung/",
    title: "Mencari Kupu-kupu di Bantimurung",
    img: "bantimurung.jpg",
    desc: "",
  },
  {
    id: "stadion-piala-dunia-rusia",
    sup: "3D Interactive Website",
    url: "https://interaktif.kompas.id/baca/stadion-rusia-2018/",
    title: "12 Stadion Piala Dunia 2018",
    img: "piala-dunia-rusia.jpg",
    desc: "",
  },
  {
    id: "sandenly",
    sup: "Digital Invitation",
    url: "https://sanden-ly-fallin.love/",
    title: "#SanDenLyFallinLove",
    img: "sandenly.jpg",
    desc: "",
  },
  {
    id: "hari-film-nasional",
    sup: "Game and Quiz",
    url: "https://interaktif.kompas.id/baca/ketahui-fakta-film-nasional/",
    title: "Hari Film Nasional",
    img: "hari-film-nasional.jpg",
    desc: "",
  },
  {
    id: "nft-kompas",
    sup: "Company Profile",
    url: "https://nft.kompas.id/",
    title: "NFT Kompas",
    img: "nft-kompas.jpg",
    desc: "",
  },
]);
</script>
<style>
/* slide sizing */
.hero-slide {
  width: 70vw;
  max-width: 960px;
  opacity: 0.4;
  transform: scale(0.9);
  transition: transform 0.6s ease, opacity 0.6s ease;
}

/* active slide */
.hero-slide.swiper-slide-active {
  opacity: 1;
  transform: scale(1);
  z-index: 10;
}

/* side dark overlay */
.hero-slide::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6),
    transparent 20%,
    transparent 80%,
    rgba(0, 0, 0, 0.6)
  );
  transition: opacity 0.6s ease;
}

.hero-slide.swiper-slide-active::after {
  opacity: 0;
}

/* bottom gradient overlay */
.hero-slide .relative::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.35) 30%,
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.hero-slide.swiper-slide-active .relative::after {
  opacity: 1;
}

/* content active */
.hero-slide.swiper-slide-active .slide-content {
  opacity: 1;
  transform: translateY(0);
}
</style>
