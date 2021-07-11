<template>
  <div class="container">
    <h2 class="text-center mt-3">Edit article</h2>

    <div class="d-flex justify-content-center">
      <form class="form.group mt-2 w-75" @submit.prevent="guardar">
        <input
          type="text"
          name="titulo"
          class="form-control mt-2"
          v-model="articulo.titulo"
        />

        <editor
          v-model="articulo.contenido"
          apiKey=""
          :init="{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | fontselect fontsizeselect formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
          }"
        />
        <input
          type="date"
          name="fecha"
          class="form-control mt-2"
          v-model="articulo.fecha"
        />
        <input
          type="file"
          @change="buscarImagen($event)"
          name="imagen"
          class="form-control mt-2"
        />
        <button type="submit" class="my-2 btn btn-success btn-sm">Save</button
        ><router-link :to="'/blog/'" class="btn btn-info ml-2 btn-sm">
          Cancel</router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
import { firebase, storage, db } from "../firebase.js";
import Editor from "@tinymce/tinymce-vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "EditarComponent",
  metaInfo: {
    title: "Admin",
  },
  components: { editor: Editor },

  data() {
    return { file: null, urlTemporal: "", error: "" };
  },
  computed: {
    ...mapState(["articulo"]),
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["editarArt", "getArticulo"]),

    buscarImagen(event) {
      // console.log(event.target.files[0]);

      const tipoArchivo = event.target.files[0].type;

      if (
        tipoArchivo === "image/jpeg" ||
        tipoArchivo === "image/png" ||
        tipoArchivo === "image/webp"
      ) {
        this.file = event.target.files[0];
        this.error = null;
      } else {
        this.error = "Archivo no válido";
        this.file = null;
        return;
      }
   
    },
    guardar() {
      if (this.file != null) {
        this.subirImagen().then(() => {
          this.editarArt(this.articulo);
        });
      } else {
        this.editarArt(this.articulo);
      }
    },
    async subirImagen() {
      try {
        const refImagen = storage
          .ref()
          .child(this.user.email)
          .child(this.articulo.id)
          .child("foto articulo");
        const res = await refImagen.put(this.file);
        const urlDescarga = await refImagen.getDownloadURL();
        this.articulo.foto = urlDescarga;
        this.error = "Imagen subida con éxito";
        this.file = null;
      } catch (error) {
        console.log(error, "error subir");
      } finally {
      }
    },
  },
  created() {
    this.getArticulo(this.$route.params.id);
  },
};
</script>
