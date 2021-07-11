<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <img src="../assets/favicon.png" alt="" style="height:26px">
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home </b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/blog">Blog</b-nav-item>
          <b-nav-item-dropdown v-if="autenticado2">
            <template #button-content>
              <em>Admin</em>
            </template>
            <b-dropdown-item to="/admin">List</b-dropdown-item>
            <b-dropdown-item to="/nuevo">New</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="http://courses.cuarentech.com/my/index.php?lang=es" target="_blank"
            >Courses</b-nav-item  
          >
          <!-- login -->
          <b-nav-item v-if="!autenticado2" to="/login">Login</b-nav-item>
          <!-- register -->
          <b-nav-item v-if="!autenticado2" to="/register">Register</b-nav-item>
          <b-nav-item-dropdown right v-if="autenticado2">
            <template #button-content>
              <em>{{ user.email }}</em>
            </template>
            <b-dropdown-item>
              <button
                @click="cerrar"
                variant="light"
                class="btn btn-dark btn-sm"
              >
                Sign out
              </button>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "NavComponent",
  computed: {
    ...mapGetters(["autenticado2"]),
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["cerrar", "setAuth"]),
  },
  created() {
    this.setAuth();
  },
};
</script>
