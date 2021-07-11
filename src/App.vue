<template>
    <div >
    <nav-component></nav-component>
    <router-view />
    <footer-component></footer-component>
  </div>
</template>


<script>
import FooterComponent from "./components/footerComponent.vue";
import NavComponent from "./components/navComponent.vue";

export default {
  components: { NavComponent, FooterComponent },
  metaInfo: {
    titleTemplate: '%s | Cuarentech'
  },
};
</script>

