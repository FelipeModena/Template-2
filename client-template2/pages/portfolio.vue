<template>
  <div>
    <ListaImagens class="my-4" :comp="portfolio"/>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListaImagens from '~/components/ListaImagens.vue';
export default {
  components: { ListaImagens },
  computed: {
    ...mapGetters({
      portfolio: "conteudo/portfolio",
    }),
  },
  data() {
    return {
      imgEscolhidaModal: "",
    };
  },
};
</script>

<style>
#modal-imagens-componente-tamanho .modal-content {
  background: transparent;
  border: none;
}

</style>
