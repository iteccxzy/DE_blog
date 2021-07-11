<template>
  <div>
    <listado-component></listado-component>
  </div>
</template>

<script>
import ListadoComponent from "../components/listadoComponent.vue";

export default {
  name: "Admin",
  components: { ListadoComponent },
  metaInfo: {
    title: 'Admin'
  }
};
</script>
