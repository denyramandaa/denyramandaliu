<template>
  <div
    class="fixed top-0 left-0 w-full flex items-center justify-between text-white z-50 font-bebas transition-transform duration-300"
    :class="{
      '-translate-y-full': isHidden,
      'translate-y-0': !isHidden,
      'bg-black/50 backdrop-blur-md py-2 lg:py-4 shadow-xl': showBackground,
      'py-4 lg:py-8': !showBackground,
    }"
  >
    <p
      v-for="menu in headerMenu"
      :key="menu.id"
      class="px-4 text-lg lg:px-8 lg:text-2xl text-shadow cursor-pointer hover:underline"
      @click="goTo(menu.id)"
    >
      {{ menu.name }}
    </p>
  </div>
</template>
<script setup>
const headerMenu = ref([
  {
    name: "About",
    id: "about",
  },
  {
    name: "What I Do",
    id: "whatido",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Blog",
    id: "blog",
  },
]);

const router = useRouter();
const route = useRoute();

const isHidden = ref(false);
const showBackground = ref(false);

const goTo = async (id) => {
  if (route.path !== "/") {
    // navigate to home with hash
    await router.push({ path: "/", hash: `#${id}` });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;

  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  const jumbotron = document.getElementById("hero");

  if (!jumbotron) return;

  const jumbotronHeight = jumbotron.clientHeight;

  isHidden.value = scrollY > 1 && scrollY < jumbotronHeight - 20;
  showBackground.value = scrollY > jumbotronHeight - 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
