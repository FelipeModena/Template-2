<template>
  <div>
    <header>
      <b-navbar id="heder-estilos" class="header-padrao" toggleable="lg">
        <b-navbar-brand @click="alteraMarcacao()">
          <NuxtLink to="/">
            <img
              width="120px"
              src="~/assets/icones/imagem.png"
              alt="Logotipo"
            />
          </NuxtLink>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav id="nav-bar-links-topo" class="ml-auto">
            <NuxtLink
              v-for="(headerOp, index) in opcoesHeader()"
              :key="index"
              :to="headerOp.url"
            >
              <li class="nav-bar-opcao-li" @click="alteraMarcacao(index)">
                <i :id="`nav-opcao-italico-` + index"></i>
                <h5 :id="`nav-opcao` + index">
                  <strong>{{ headerOp.nomePagina }}</strong>
                </h5>
              </li>
            </NuxtLink>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <main><Nuxt /></main>
    <footer v-if="ativaRodape() == true">
      <div class="cor-fundo-secundaria px-5 py-2">
        <div class="my-4">
          <img width="21%" src="~/assets/icones/logo-dummy-branco.png" alt="" />
        </div>
        <div id="footer-default-grid" class="pb-4">
          <div>
            <NuxtLink
              class="text-left d-flex"
              v-for="(headerOp, index) in opcoesHeader()"
              :key="index"
              :to="headerOp.url"
              @click="alteraMarcacao(index)"
            >
              <h5 :id="`nav-opcao` + index">
                {{ headerOp.nomePagina }}
              </h5>
            </NuxtLink>
          </div>
          <div class="mt-3">
            <ListaInformativa :contato="contatoSalvo()" />
          </div>
        </div>
      </div>

      <div class="container py-3" style="display: grid">
        <div class="centraliza">
          <img width="40%" src="~/assets/icones/logo_sharkdata.png" alt="" />
        </div>
        {{ new Date().getFullYear() }} © SharkData todos os direito reservados
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      headerOpcoes: "conteudo/headerOpcoes",
      dadosCadastrais: "conteudo/dadosCadastrais",
      paginasApi: "conteudoApi/paginasAPI",
      rodapeAPI: "conteudoApi/rodapeAPI",
      contatoAPI: "conteudoApi/contatoAPI",
    }),
  },
  created() {
    this.getPaginas();
  },
  mounted() {
    const nav = this.headerOpcoes.find(
      (elemnt) => elemnt.url === this.$route.name
    );
    if (nav !== undefined) {
      $("#nav-opcao-italico-" + nav.id).addClass("circulo-marcacao-pagination");
    } else $("#nav-opcao-italico-" + 0).addClass("circulo-marcacao-pagination");
  },
  methods: {
    ...mapActions({
      getPaginas: "conteudoApi/getPaginas",
    }),
    contatoSalvo() {
      if (this.SITE_STATICO == true) {
        return this.dadosCadastrais;
      } else {
        return this.contatoAPI;
      }
    },
    opcoesHeader() {
      if (this.SITE_STATICO == true) {
        return this.headerOpcoes;
      } else {
        return this.paginasApi;
      }
    },
    ativaRodape() {
      if (this.SITE_STATICO == true) {
        return true;
      } else if (this.rodapeAPI != null) {
        return this.rodapeAPI.rodapeAtivo;
      }
    },
    alteraMarcacao(e) {
      for (let index = 0; index < this.headerOpcoes.length; index++) {
        $("#nav-opcao-italico-" + index).removeClass(
          "circulo-marcacao-pagination"
        );
      }
      if (e === undefined) {
        $("#nav-opcao-italico-" + 0).addClass("circulo-marcacao-pagination");
        return;
      }
      $("#nav-opcao-italico-" + e).addClass("circulo-marcacao-pagination");
    },
  },
};
</script>
<style>
#heder-estilos {
  background: var(--cor-padrao-header-fundo);
}
#nav-bar-links-topo li {
  margin-right: 30px;
  font-family: "Abel";
  color: var(--cor-padrao-header-fonte);
}
#footer-default-grid {
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
}
.nav-bar-opcao-li {
  display: flex;
  transition: 0.3s;
}
.nav-bar-opcao-li :hover {
  transition: 0.3s;
  opacity: 80%;
}
.circulo-marcacao-pagination {
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  background: var(--cor-padrao-header-fonte);
  margin: 8px 3px 0 0;
  width: 8px;
  height: 8px;
}
</style>
