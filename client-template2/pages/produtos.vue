<template>
  <div>
    <div
      v-for="(produto, index) in produtos"
      :key="index"
      class="cor-fundo-primaria"
    >
      <ImgEsquerda
        :id="'img-esquerda-nossos-produtos' + index"
        v-if="index % 2 == 0"
        :comp="produto"
      />
      <ImgDireita
        v-else
        :id="'img-direita-nossos-produtos' + index"
        :comp="produto"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
mapGetters;
export default {
  computed: {
    ...mapGetters({
      produtos: "conteudo/produtos",
    }),
  },
  methods: {},
};
</script>

<style>
.nossos-produtos-grid-fotos {
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>
