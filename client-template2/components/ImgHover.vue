<template>
    <div class="my-2" id="index-caixas-inferiores">
      <div
        class="relative-container-imagem-grid-inferior"
        v-for="(foto, index) in comp.imagens"
        :key="index"
        @mouseenter="hoverGridInferior(index)"
        @mouseleave="unHoverGridInferior(index)"
      >
        <img
          :id="'relative-container-imagem-grid-inferior-img' + index"
          width="100%"
          height="300px"
          :src="requestImg(foto.imgUrl)"
          :alt="foto.imgUrl"
        />
        <div>
          <h3
            :id="'relative-container-imagem-grid-inferior-h' + index"
            class="text-center"
          >
            {{ foto.texto }}
          </h3>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    comp: Object,
  },
  data() {
    return {
      imgEscolhidaModal: '',
      imgTextoEscolhidaModal:''
    };
  },
  methods: {
    requestImg(img) {
      if (this.SITE_STATICO == false && this.comp.imagens != undefined) {
        return this.API_URL + "/images/" + img;
      } else return require("~/assets/imagens/" + img);
    },
    aumentaImg(img) {
      this.imgEscolhidaModal = img.imgUrl;
      this.imgTextoEscolhidaModal = img.texto;
      this.$bvModal.show("modal-imagens-componente-tamanho");
    },
        hoverGridInferior(id) {
      $("#relative-container-imagem-grid-inferior-h" + id).css({ opacity: "100%" });
      $("#relative-container-imagem-grid-inferior-img" + id).css({ opacity: "70%" });
    },
    unHoverGridInferior(id) {
      $("#relative-container-imagem-grid-inferior-h" + id).css({ opacity: "0%" });
      $("#relative-container-imagem-grid-inferior-img" + id).css({ opacity: "100%" });
    },
  },

};
</script>
<style>
#index-caixas-inferiores {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.relative-container-imagem-grid-inferior {
  position: relative;
  text-align: center;
  transition: 0.3s;
  color: var(--cor-secundaria-fonte);
}
.relative-container-imagem-grid-inferior h3{
  opacity: 0;
}
.relative-container-imagem-grid-inferior h3,img :hover {
  transition: 0.3s;
}
.relative-container-imagem-grid-inferior div {
  position: absolute;
  top: 8px;
  padding: 20% 30%;
}
</style>
