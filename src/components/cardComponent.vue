<template>
  <div class="justify-content">
    <div v-if="carga" class="text-center mt-4">
      <h3>loading...</h3>
      <pulse-loader :loading="carga"></pulse-loader>
    </div>

    <div class="row">
      <div class="col-3">
        <form @submit.prevent="buscador(texto)">
          <input
            type="text"
            placeholder="search..."
            class="form-control mt-4"
            v-model="texto"
            v-on:keyup="buscador(texto)"
          />
        </form>
      </div>
    </div>

    <div class="row">
      <div
        class="col-lg-4 mb-4 my-3"
        v-for="(articulo, index) in arrayFiltrado"
        :key="index"
      >
        <div class="card border-secondary mb-3">
                 <div
            class="card-body"
            style="
              min-height: 200px;
              background-color: rgb(243, 248, 250);
            "
          >
            <p class="card-title font-weight-bold">
              {{ articulo.titulo | capitalize }}
            </p>
            <p class="card-subtitle mb-1 text-muted">
              By: {{ articulo.autor }}
            </p>
            <p class="card-text" v-if="articulo.contenido">
              Date: {{ articulo.fecha }}
            </p>

            <router-link
              :to="'/articulo/' + articulo.id"
              class="btn btn-outline-secondary btn-sm " 
            >
              Read more</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  name: "CardComponent",
  data() {
    return {
      texto: "",
    };
  },
  components: {
    PulseLoader,
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  methods: {
    ...mapActions(["getAll", "buscador", "cleanTexto"]),
  },
  created() {
    this.getAll();
  },
  computed: {
    ...mapState(["carga"]),
    ...mapGetters(["arrayFiltrado"]),
  },
  destroyed() {
    this.cleanTexto();
  },
};
</script>
