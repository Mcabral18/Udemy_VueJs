<template>
  <!-- v-model.lazy.trim
	lazy apenas atualiza o conteudo quando deixa de estar focus
	trim remove os espaços 

v-model.number
	retorna o numero como numero e nao como string
 -->
  <div id="app">
    <h1>Registrar Reclamação</h1>
    <div class="conteudo">
      <form class="painel" v-if="!enviado">
        <div class="cabecalho">Formulário</div>
        <Rotulo nome="E-mail">
          <input type="text" v-model.lazy.trim="user.email" />
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" v-model="user.password" />
        </Rotulo>
        <Rotulo nome="Idade">
          <input type="number" v-model.number="user.age" />
        </Rotulo>
        <Rotulo nome="Mensagem">
          <textarea name="" cols="30" rows="5" v-model="message"></textarea>
        </Rotulo>
        <Rotulo nome="Características do Problema">
          <span class="mr-4"
            ><input type="checkbox" v-model="checkbox" value="reproduzivel" />
            Reproduzível</span
          >
          <span
            ><input type="checkbox" v-model="checkbox" value="intermitente" />
            Intermitente</span
          >
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span class="mr-4"
            ><input type="radio" value="Web" v-model="radio" /> Web</span
          >
          <span class="mr-4"
            ><input type="radio" value="Mobile" v-model="radio" /> Mobile</span
          >
          <span
            ><input type="radio" value="Outro" v-model="radio" /> Outro</span
          >
        </Rotulo>
        <Rotulo nome="Prioridade">
          <select v-model="prioridade">
            <option v-for="(prioridade, index) in prioridades" :key="index">
              {{ prioridade.nome }}
            </option>
          </select>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <Escolha v-model="escolha" />
        </Rotulo>
        <hr />
        <button @click.prevent="sendFrom">Enviar</button>
      </form>
      <div class="painel" v-if="enviado">
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="E-mail">
          <span>{{ user.email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{ user.password }}</span>
        </Rotulo>
        <Rotulo nome="Idade">
          <span>{{ user.age }}</span>
        </Rotulo>
        <Rotulo nome="Mensagem">
          <span style="white-space: pre">{{ message }}</span>
        </Rotulo>
        <Rotulo nome="Marque as Opções">
          <span v-for="check in checkbox" :key="check">
            <ul>
              <li>{{ check }}</li>
            </ul>
          </span>
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span>{{ radio }}</span>
        </Rotulo>
        <Rotulo nome="Prioridade">
          <span>{{ prioridade }}</span>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <span>{{ escolha }}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Escolha from "./components/Escolha.vue";

export default {
  name: "app",
  components: {
    Rotulo,
    Escolha,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
        age: "",
      },
      message: "",
      checkbox: [],
      radio: "",
      prioridades: [
        {
          nome: "Baixa",
        },
        {
          nome: "Moderada",
        },
        {
          nome: "Alta",
        },
      ],
      prioridade: "Baixa",
      escolha: true,
      enviado: false,
    };
  },
  methods: {
    sendFrom() {
      this.enviado = true;
    },
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
