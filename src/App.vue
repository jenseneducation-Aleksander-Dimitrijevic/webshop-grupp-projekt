<template>
  <div id="app">
    <Navbar />
    <app-side-menu />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AppSideMenu from "@/components/AppSideMenu.vue";
export default {
  components: {
    Navbar,
    AppSideMenu,
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
</style>
