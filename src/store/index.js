import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  //////////////////////////// data  ////////////////////////////////////////
  state: {
    articulos: [],
    articulo: {
      id: "",
      titulo: "",
      contenido: "",
      fecha: "",
      autor: "",
      foto: "",
    },
    user: null,
    carga: false,
    error: "",
    texto: "",
  },

  ////////////////////////////  mutations  ////////////////////////////////////////
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setArticulos(state, payload) {
      state.articulos = payload;
    },
    setArticulo(state, payload) {
      state.articulo = payload;
    },
    nuevoArt(state, payload) {
      state.articulos.push(payload);
    },
    delete(state, payload) {
      state.articulos = state.articulos.filter((item) => item.id !== payload);
    },
    clean(state) {
      state.articulo = {
        id: "",
        titulo: "",
        contenido: "",
        fecha: "",
        autor: "",
      };
    },
    cargar(state, payload) {
      state.carga = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    cleanTexto(state, payload) {
      state.texto = payload;
    },
  },

  //////////////////////////// actions  ////////////////////////////////////////
  actions: {
    async registrarUsuario({ commit }, user) {
      try {
        const res = await fetch(
          "",
          {
            method: "POST",
            body: JSON.stringify({
              email: user.email,
              password: user.password,
              returnSecureToken: true,
            }),
          }
        );
        const dataDB = await res.json();
        if (dataDB.error) {
          return console.log(dataDB.error);
        }

        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },

    async ingresoUsuario({ commit }, usuario) {
      try {
        const res = await fetch(
          ``,
          {
            method: "POST",
            body: JSON.stringify({
              email: usuario.email,
              password: usuario.password,
              returnSecureToken: true,
            }),
          }
        );
        const dataDB = await res.json();

        if (dataDB.error) {
          return commit("setError", "usuario o contraseña incorrecta");
        }
        commit("setUser", dataDB);
        localStorage.setItem("usuario", JSON.stringify(dataDB));
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },

    cleanArticulos({ commit }) {
      commit("setArticulos", null);
    },

    cleanTexto({ commit }) {
      commit("cleanTexto", "");
    },

    async getArticulos({ commit, state }) {

      try {
        const res = await fetch(
          ``
        );
        const dataDB = await res.json();
        if (dataDB.error == "Auth token is expired") {
          commit("setUser", null);
          commit("setArticulos", null);
          localStorage.removeItem("usuario");
          router.push("/login");
        } else {
          const array = [];
          for (let i in dataDB) {
            array.push(dataDB[i]);
          }
          commit("setArticulos", array);
        }
      } catch (error) {
        console.log(error, "error getArticulos");
      }
    },

    setAuth({ commit }) {
      if (localStorage.getItem("usuario")) {
        commit("setUser", JSON.parse(localStorage.getItem("usuario")));
      } else {
        return commit("setUser", null);
      }
    },

    async getAll({ commit, state }) {
      commit("cargar", true);

      try {
        const res = await fetch(
          ``
        );
        const dataDB = await res.json();
        const array = [];
        const array2 = [];

        for (let i in dataDB) {
          array.push(dataDB[i]);
        }
        array.forEach((element) => {
          for (let i in element) {
            array2.push(element[i]);
          }
        });
        commit("cargar", false);
        commit("setArticulos", array2);
      } catch (error) {
        console.log(error, "error getAll");
      }
    },

    async save({ commit, state }, articulo) {
      articulo.autor = state.user.email;
      try {
        await fetch(
          ``,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(articulo),
          }
        );
        
      } catch (error) {
        console.log(error);
      }
      commit("nuevoArt", articulo);
      router.push("/admin");
    },

    async getArticulo({ commit, state }, id) {
      try {
        const res = await fetch(
          ``
        );
        const dataDB = await res.json();
        commit("setArticulo", dataDB);
      } catch (error) {
        console.log(error, "getArticulo error");
      }
    },

    async getArt({ commit }, id) {
      try {
        const res = await fetch(
          ``
        );
        const dataDB = await res.json();
        const array = [];
        const array2 = [];

        for (let i in dataDB) {
          array.push(dataDB[i]);
        }
        array.forEach((element) => {
          for (let i in element) {
      
            if (element[i].id == id) {
              array2.push(element[i]);
            }
          }
        });

        commit("setArticulo", array2);
      } catch (error) {
        console.log(error, "getArt error");
      }
    },
    closeArt({ commit }) {
      commit("clean");
    },
    async editarArt({ commit, state }, articulo) {
      articulo.autor = state.user.email;
      try {
        await fetch(
          ``,
          {
            method: "PATCH",
            body: JSON.stringify(articulo),
          }
        );
      } catch (error) {
        console.log(error);
      }
      commit("clean");
      router.push("/admin");
    },

    async deleteArticulos({ commit, state }, id) {
      try {
        await fetch(
          ``,
          {
            method: "DELETE",
          }
        );
        commit("delete", id);
      } catch (error) {
        console.log(error);
      }
    },

    cerrar({ commit }) {
      commit("setUser", null);
      commit("setArticulos", null);
      localStorage.removeItem("usuario");
      router.push("/login");
    },

    buscador({ commit, state }, payload) {
      state.texto = payload.toLowerCase();
    },
  },
  //////////////////////////// getters  ////////////////////////////////////////
  getters: {
    autenticado() {
      return !!localStorage.getItem("usuario");
    },
    autenticado2(state) {
      return !!state.user;
    },

    arrayFiltrado(state) {
      let arregloFiltrado = [];
      for (let articulo of state.articulos) {
        let titulo = articulo.titulo.toLowerCase();
        if (titulo.indexOf(state.texto) >= 0) {
          arregloFiltrado.push(articulo);
        }
      }
      return arregloFiltrado;
    },
  },
  //////////////////////////// modules  ////////////////////////////////////////
  modules: {},
});
