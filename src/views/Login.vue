<template>
  <div>
    <div class="row justify-content-md-center" style="min-height:600px">
      <div class="col-4 m-4">
        <p class="fs-6 text-center">Sign in</p>
        <form
          class="form-group"
          @submit.prevent="ingresoUsuario({ email: email, password: pass })"
        >
          <input type="text" class="form-control mt-2" v-model="email"   placeholder="email" />
          <input type="password" class="form-control mt-2" v-model="pass"   placeholder="password" />
          <button class="btn btn-secondary mt-3">Sign in</button>
        </form>
        <p>{{error}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  methods: {
    ...mapActions(["ingresoUsuario"]),
  },
  computed:{
    ...mapState(['error']),
   
  }, metaInfo: {
    title: 'Login'
  }
};
</script>
