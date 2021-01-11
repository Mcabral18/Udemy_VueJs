<template>
  <div>
    <div class="usuario-lista">
      <table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(usuario, index) in usuarios"
            :key="index"
            @click="setUsuarioSelecionado(usuario)"
          >
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.nome }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <usuario-detalhe :cart="cart" />
  </div>
</template>

<script>
import UsuarioDetalhe from "./UsuarioDetalhe.vue";

export default {
  components: { UsuarioDetalhe },
  props: ["usuarios"],
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    setUsuarioSelecionado(usuario) {
      this.cart.unshift(usuario);
      this.cart.splice(1, 1);
      //   console.log(this.cart);
    },
  },
};
</script>

<style scoped>
.usuario-lista {
  flex: 1;
  display: flex;
}

table {
  flex: 1;
  border-spacing: 0px;
  border-collapse: separate;
  border-top: 1px solid #ccc;
}

th,
td {
  padding: 15px;
  border-bottom: 1px solid #ccc;
}

tbody tr:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>
