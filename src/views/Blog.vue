<template>
  <div class="container" style="min-height:600px">
   <card-component></card-component>
  </div>
</template>

<script>
import CardComponent from '../components/cardComponent.vue';
export default {
  name: "Blog",
  metaInfo: {
    title: 'Blog'
  },
  components: {
    CardComponent,
  },
};
</script>