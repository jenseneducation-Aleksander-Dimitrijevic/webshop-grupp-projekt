<template>
  <div id="app">
    <Navbar />
    <cart-modal />
    <app-side-menu />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CartModal from "@/components/CartModal.vue";
import AppSideMenu from "@/components/AppSideMenu.vue";
export default {
  components: {
    Navbar,
    AppSideMenu,
    CartModal,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Open Sans", sans-serif;
}

// Page transition
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
