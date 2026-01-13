<template>
  <MainHeader />
  <NuxtPage />
  <transition name="loader-fade">
    <LoaderScreen v-if="showLoader" />
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showLoader = ref(true);

onMounted(() => {
  setTimeout(() => {
    showLoader.value = false;
  }, 2200);
});
</script>
<style>
html {
  scroll-behavior: smooth;
}
.loader-fade-enter-active,
.loader-fade-leave-active {
  transition: opacity 0.6s ease;
}

.loader-fade-enter-from,
.loader-fade-leave-to {
  opacity: 0;
}
</style>
