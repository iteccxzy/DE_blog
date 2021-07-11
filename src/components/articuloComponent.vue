<template>
  <div class="container">
    <div class="row justify-content-center" style="min-height: 600px">
      <div v-if="articulo[0]" class="col-lg-9 shadow p-3 mb-5 bg-body rounded">
        <img
          :src="articulo[0].foto"
          style="max-height: 200px"
          class="rounded my-3"
        />
        <p class="h2">{{ articulo[0].titulo | capitalize }}</p>
        <p class="h6">By: {{ articulo[0].autor }}</p>
        <p class="h6 mb-5" v-html="articulo[0].fecha"></p>
        <p class="h5" v-html="articulo[0].contenido"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ArticuloComponent",
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  computed: {
    ...mapState(["articulo"]),
  },
  methods: { ...mapActions(["closeArt", "getArt"]) },
  created() {
    this.getArt(this.$route.params.id);
  },
  destroyed() {
    this.closeArt();
  },
};
</script>

<style scoped>
.col-lg-9 {
  background-image: url("../assets/slant-right.png");
}
</style>