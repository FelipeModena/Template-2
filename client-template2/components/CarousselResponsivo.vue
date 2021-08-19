    <template>
  <div class="mb-2">
    <b-carousel
      v-if="mobile != true"
      class="carousel-index-banner"
      v-model="slide"
      :interval="0"
      controls
      indicators
      label-indicators="asdas"
      img-width="1024"
      img-height="233"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="(cont, index) in comp.imagens" :key="index">
        <template #img>
          <div class="relative-container-carousel">
            <img
              class="w-100"
              height="450px"
              :src="requestImg(cont.imgUrl)"
              :alt="cont.imgUrl"
            />
            <div class="p-4 my-5 index-carousel-conteudo-texto">
              <h1>{{ cont.texto }}</h1>
              <NuxtLink :to="comp.urlBotao1"
                ><button class="btn-caraousel-cor">
                  visiste nossa Galeria
                </button></NuxtLink
              >
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
    <div v-else>
      <img class="w-100" :src="requestImg(comp[0].imgUrl)" alt="" />
      <div class="index-carousel-conteudo-texto centraliza">
        <h1>
          <strong>{{ comp[0].texto }}</strong>
        </h1>
        <NuxtLink class="mt-5" :to="comp.urlBotao1"
          ><button class="btn-caraousel-cor">
            visiste nossa Galeria
          </button></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    conteudo: "",
    comp: "",
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
    requestImg(img) {
      console.log(img);
      if (this.SITE_STATICO == false && this.comp.imagens != undefined) {
        return this.API_URL + "/images/" + img;
      } else return require("~/assets/imagens/" + img);
    },
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

<style scoped>
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
</style>