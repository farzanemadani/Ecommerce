<template>
  <Header @toggleMenu="toggleMenu" />
  <main>
    <slot />
  </main>
  <Footer />
  <ClientOnly>
    <Transition name="slide-from-right">
      <MobileMenu v-if="isShowingMobileMenu" @closeMenu="toggleMenu" />
    </Transition>
  </ClientOnly>
</template>
<script setup lang="ts">
import Header from '~/components/generalElements/Header.vue';
import Footer from '~/components/generalElements/Footer.vue';
import MobileMenu from '~/components/generalElements/MobileMenu.vue';

const isShowingMobileMenu = ref<Boolean>(false);

const toggleMenu = () => {
  isShowingMobileMenu.value =
    !isShowingMobileMenu.value;
};
</script>
<style scoped>
/* Slide-from-right & Slide-from-left */
.slide-from-right-leave-active,
.slide-from-right-enter-active,
.slide-from-left-leave-active,
.slide-from-left-enter-active {
  transition: transform 300ms ease-in-out;
}

.slide-from-right-enter-from,
.slide-from-right-leave-to {
  transform: translateX(500px);
}

.slide-from-left-enter-from,
.slide-from-left-leave-to {
  transform: translateX(-500px);
}
</style>
