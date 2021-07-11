<template>
  <div style="min-height: 600px">
    <div class="d-flex justify-content-center"><h2>Articles</h2></div>
    <br />
    <div class="d-flex justify-content-center">
      <table class="table w-75">
        <thead>
          <th>Title</th>
          <th>Content</th>
          <th>Date</th>
          <th>Task</th>
        </thead>
        <tbody>
          <tr v-for="(articulo, index) in articulos" :key="index">
            <td>{{ articulo.titulo }}</td>
            <td>
              <span
                v-if="articulo.contenido"
                v-html="articulo.contenido.slice(0, 30)"
              ></span>
            </td>
            <td>{{ articulo.fecha }}</td>
            <td>
              <div class="btn-group">
                <router-link
                  class="btn btn-secondary btn-sm rounded mr-3 "
                  :to="{
                    name: 'Editar',
                    params: {
                      id: articulo.id,
                    },
                  }"
                  >Editar</router-link
                >

                <button
                  class="btn btn-danger btn-sm rounded"
                  size="sm"
                  @click="eliminar(articulo.id)"
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ListadoComponent",
  methods: {
    ...mapActions(["getArticulos", "deleteArticulos"]),
    eliminar(id) {
      let rta = confirm("are you sure?");
      if (rta == true) {
        this.deleteArticulos(id);
      }
    },
  },
  created() {
    this.getArticulos();
  },
  computed: {
    ...mapState(["articulos"]),
  },
};
</script>

