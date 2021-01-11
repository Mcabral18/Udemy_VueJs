<template>
  <div>
    <div>Selecione um usuario</div>
    <div class="usuario-detalhe" v-if="typeof cart[0] != 'undefined'">
      <h2>ID: {{ cart[0].id }}</h2>
      <h2>Nome: {{ cart[0].nome }}</h2>
      <h2>Idade: {{ cart[0].idade }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cart"],
};
</script>

<style>
.usuario-detalhe {
  flex: 1;
  border: 1px solid #ccc;
}
</style>
