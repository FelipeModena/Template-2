<template>
  <div
    class="mb-2 d-flex img-direita-componente-id w-100"
    :style="styleFundo()"
  >
    <div class="px-5 pt-5" :style="styleCorTitulo()">
      <h2>
        <strong>{{ comp.titulo ? comp.titulo : "" }}</strong>
      </h2>
      <p>{{ comp.texto ? comp.texto : "" }}</p>
      <button
        v-if="comp.txtBotao1 != null && comp.txtBotao1 != ''"
        class="img-hover-padrao border-5 w-100 my-3 bg-transparent p-3"
        :style="styleBotao()"
      >
        {{ comp.txtBotao1 ? comp.txtBotao1 : "" }}
      </button>
    </div>
    <div class="pr-5">
      <img class="ml-4 mt-4" height="250px" :src="requestImg()" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mobile: false,
    comp: Object,
  },
  methods: {
    styleFundo() {
      if (this.comp.corFundo != undefined) {
        return [{ background: this.comp.corFundo }];
      }
    },
    styleCorTitulo() {
      if (this.comp.corTitulo != undefined) {
        return [{ color: this.comp.corTitulo }];
      }
    },
    styleBotao() {
      if (this.comp.corFundo != undefined) {
        return [{ "border-color": this.comp.corBotao1 }, { color: this.comp.corBotao1 }];
      }
    },
    requestImg() {
      if (this.SITE_STATICO == false && this.comp.imagens != undefined) {
        return this.API_URL + "/images/" + this.comp.imagens[0].imgUrl;
      } else return require("~/assets/imagens/" + this.comp.imgUrl);
    },
  },
  mounted() {
    if (document.documentElement.clientWidth <= 1200) {
      console.log("mobile laytou");
      $(".img-direita-componente-id")
        .addClass("d-flex-inline ")
        .removeClass("d-flex ");
    }

    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 1200) {
        $(".img-direita-componente-id")
          .addClass("d-flex-inline ")
          .removeClass("d-flex ");
        console.log("mobile laytou");
      } else {
        $(".img-direita-componente-id")
          .addClass("d-flex ")
          .removeClass("d-flex-inline ");
      }
    });
  },
};
</script>

<style>
</style>
