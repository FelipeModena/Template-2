<template>
  <div>
    <CarousselResponsivo
      :comp="index.carouselTopo"
    />

    <TextoCentralizado :comp="index.conteudo1" />
    <ImgEsquerda :comp="index.conteudo3" />

    <div class="my-4" id="index-grid-book-imagens">
      <img
        class="img-hover-padrao"
        v-for="(foto, index) in index.conteudo2"
        :key="index"
        width="100%"
        height="290x"
        :src="require('~/assets/imagens/' + foto)"
        :alt="foto.imgUrl"
        @click="showImgInModal(foto)"
      />
    </div>
    <b-modal
      id="modal-imagens-componente-tamanho"
      title="oie"
      :hide-header="true"
      :hide-footer="true"
      :busy="true"
    >
      <img
        class="img-fluid"
        width="400px"
        :src="'/_nuxt/assets/imagens/' + imgEscolhidaModal"
        alt=""
      />
    </b-modal>

    <div class="centraliza my-4">
      <NuxtLink to="produtos"
        ><button class="btn-azul-form">Visite nossa galeria</button></NuxtLink
      >
    </div>
    <FormsContato
      class="my-4 cor-fundo-forms py-3"
      id="index-forms-contato"
      :comp="index.forms"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      index: "conteudo/index",
      indexApi: "conteudoApi/paginas",
    }),
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      mobile: false,
      imgEscolhidaModal: "",
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    showImgInModal(foto) {
      this.imgEscolhidaModal = foto;
      this.$bvModal.show("modal-imagens-componente-tamanho");
    },
  },
  mounted() {
    console.log(this.index);
    if (document.documentElement.clientWidth <= 850) {
      $(".mobile-display").css("display", "list-item");
      $("#index-img-esquerda-banner").removeClass("d-flex");
      this.mobile = true;
    }

    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 850) {
        $(".mobile-display-img").css("width", "100%");
        $("#index-img-esquerda-banner").removeClass("d-flex");
        $(".mobile-display").css("display", "list-item");
        this.mobile = true;
      } else {
        $(".mobile-display-img").css("width", "400px");
        $("#index-img-esquerda-banner").addClass("d-flex");
        $(".mobile-display").css("display", "flex");
        this.mobile = false;
      }
    });
  },
};
</script>

<style>
.carousel-index-banner .carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 25%;
  height: 100%;
}
.carousel-index-banner .carousel-control-prev-icon {
  margin-right: 55%;
}
.carousel-index-banner .carousel-control-next-icon {
  margin-left: 20px;
}
.relative-container-carousel {
  position: relative;
  text-align: center;
}
.relative-container-carousel div {
  position: absolute;
  top: 8px;
  left: 110px;
  width: 400px;
  height: 500px;
}

.index-carousel-conteudo-texto {
  color: #890d00;
}

.btn-caraousel-cor {
  background: #890d00;
  opacity: 90%;
  color: white;
  transition: 0.4s;
  border: 2px solid #890d00;
  padding: 12px;
  width: 100%;
}
.btn-caraousel-cor :hover {
  transition: 0.4s;
  background: #3a24bb;
  width: 80%;
}

#index-img-esquerda-banner {
  background: var(--cor-padrao-header-fundo);
  color: var(--cor-form-fonte);
}
#index-grid-book-imagens {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
</style>
