<template>
  <div class="w-100">
    <div class="w-100" v-for="(componente, i) in paginasApiCopia.componente" :key="i">

      <FormsContato :comp="componente" v-if="componente.tipoComponente=='FORMULARIO'"/>
      <TextoCentralizado :comp="componente" v-if="componente.tipoComponente=='TEXTO CENTRALIZADO'"/>
      <ImgDireita :comp="componente" v-if="componente.tipoComponente=='TEXTO ESQUERDA E IMAGEM DIREITA'" />
      <ImgEsquerda :comp="componente" v-if="componente.tipoComponente=='TEXTO DIREITA E IMAGEM ESQUERDA'" />
      <ImgPrincipal :comp="componente" v-if="componente.tipoComponente=='IMAGEM PRINCIPAL'" />
      <ImgHover :comp="componente" v-if="componente.tipoComponente=='IMAGENS HOVER'" />
      <Mapa :comp="componente" v-if="componente.tipoComponente=='MAPA'" />
      <ListaImagens :comp="componente" v-if="componente.tipoComponente=='CONTEUDO GALERIA'" />
      <CarousselResponsivo :comp="componente" v-if="componente.tipoComponente=='BANNER PRINCIPAL'"/>  
            </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      paginasApi: "conteudoApi/paginasAPI",
    }),
  },
  data() {
    return {
      paginasApiCopia: "",
    };
  },
  watch: {
    paginasApi: function (newVal, oldVal) {
      if (process.browser) {
        this.paginasApi.forEach((pagina) => {
          if (pagina.url == this.$nuxt.$route.path) {
            console.log(pagina.componente);
            this.paginasApiCopia = JSON.parse(
              JSON.stringify(pagina)
            );
          }
        });
      }
    },
  },
  methods:{
      ...mapActions({
      getPaginas: "conteudoApi/getPaginas",
      })
  },
  created(){
      this.getPaginas();
  }
};
</script>

<style lang="less" scoped>
</style>