<template>
  <div>
    <div class="row justify-content-md-center" style="min-height: 600px">
      <div class="col-4 m-4">
        <p class="fs-6 text-center">Sign up</p>
       
        <form class="form-group">
          <input
            v-model="email"
            type="text"
            class="form-control mt-2"
            placeholder="email"
          />
          <input
            v-model="pass"
            type="password"
            class="form-control mt-2"
            placeholder="password"
          />
          <input
            v-model="pass2"
            type="password"
            class="form-control mt-2"
            placeholder="re password"
          />
          <button class="btn btn-info mt-2">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      pass: "",
      pass2: "",
    };
  },
  methods: {
    ...mapActions(["registrarUsuario"]),
  },
  metaInfo: {
    title: "Register",
  },
};
</script>
