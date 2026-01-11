export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("scroll-reveal", {
    mounted(el, binding) {
      const {
        from = 40,
        opacity = true,
        until = 0.75, // viewport percentage
      } = binding.value || {};

      const update = () => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;

        const start = vh * 0.9; // start when element enters viewport
        const end = vh * until;

        const distance = start - end;
        const progress = Math.min(
          Math.max((start - rect.top) / distance, 0),
          1
        );

        const translateY = from * (1 - progress);

        el.style.transform = `translateY(${translateY}px)`;
        if (opacity) {
          el.style.opacity = String(progress);
        }
      };

      el.style.willChange = "transform, opacity";
      el.style.opacity = "0";
      el.style.transform = `translateY(${from}px)`;

      update();

      window.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);

      el._cleanup = () => {
        window.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
      };
    },

    unmounted(el) {
      el._cleanup?.();
    },
  });
});
