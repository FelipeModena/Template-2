<template>
  <div class="mb-2 d-block container lista-imagens-componente-mobile-id">
    <div class="centraliza cor-fundo-primaria my-4">
      <h1>
        <strong>{{ comp.titulo }}</strong>
      </h1>
      <p>Clique nas imagens para ampliar</p>
    </div>
    <div
      class="d-inline p-2  img-hover-padrao"
      v-for="(img, indexComponente) in comp.imagens"
      :key="indexComponente"
    >
      <img
        class="img-fluid-lista-imagens-componente m-1"
        height="100%"
        :src="requestImg(img.imgUrl)"
        :alt="img.imgUrl"
        @click="aumentaImg(img)"
      />
    </div>
    <b-modal
      id="modal-imagens-componente-tamanho"
      :hide-header="true"
      :hide-footer="true"
      :busy="true"
      class="bg-transparent"
    >
      <img
        class="img-fluid portfolio-img-corta d-block"
        width="400px"
        :src="'/_nuxt/assets/imagens/' + imgEscolhidaModal"
        alt=""
      />
      <span>{{imgTextoEscolhidaModal}}</span>
    </b-modal>
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
  },

};
</script>
<style>

.img-fluid-lista-imagens-componente {
  width: 200px;
  height: 200px;
}

.lista-imagens-componente-mobile {
  display: grid;
  grid-template-columns: 30% 30% 30%;
}

.portfolio-img-corta{
  overflow:hidden;
}
</style>
